import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar"; // Correct import
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useColorScheme, View, ActivityIndicator } from "react-native";
import { colors } from "../lib/theme";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const { user, loading } = useAuth(); // Get user and loading state
  const segments = useSegments(); // Get current navigation segments
  const router = useRouter(); // Get router instance
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  useEffect(() => {
    // Check if the user is currently in the main app (tabs) section
    const inTabsGroup = segments[0] === '(tabs)';

    // Only navigate when loading is false
    if (!loading) {
      if (user && !inTabsGroup) {
        // If user is logged in and not in the main app, redirect to home
        router.replace('/(tabs)/home');
      } else if (!user) {
        // If user is not logged in, redirect to login (handles initial load and logout)
        // No need to check if inTabsGroup here, always go to login if not logged in.
        router.replace('/(auth)/login');
      }
      // Once navigation logic is handled, hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [user, loading, segments]); // Re-run effect when user, loading, or segments change

  // While loading auth state, return null (or a loading indicator)
  // This prevents rendering the navigator before auth state is known
  if (loading) {
    // Return null to keep showing the native splash screen
    return null;
    // Or optionally show an ActivityIndicator:
    // return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }}><ActivityIndicator size="large" color={theme.primary} /></View>;
  }

  // Once loading is false, render the main navigator
  return (
    <>
      {/* Use 'style' prop for expo-status-bar */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} backgroundColor={theme.background} />
      {/* Stack Navigator */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.foreground,
          headerShadowVisible: false, // Hides the header shadow
          contentStyle: {
            backgroundColor: theme.background, // Set background color for screens
          },
        }}
      >
        {/* Define the navigators/screens managed by this Stack */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* The index screen is only used initially and shouldn't be navigable directly */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

// Export the main RootLayout which wraps everything in the AuthProvider
export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}