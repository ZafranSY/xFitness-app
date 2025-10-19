// app/_layout.tsx
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { useColorScheme, View, ActivityIndicator } from "react-native";
import { colors } from "../lib/theme";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  useEffect(() => {
    const inTabsGroup = segments[0] === '(tabs)';

    if (!loading) {
      if (user && !inTabsGroup) {
        router.replace('/(tabs)/home');
      } else if (!user && inTabsGroup) {
        router.replace('/(auth)/login');
      }
      // Hide the splash screen once we've decided where to navigate
      SplashScreen.hideAsync();
    }
  }, [user, loading, segments]);

  // Render loading indicator or null while checking auth state
  if (loading) {
    // Optionally show a loading spinner here if you prefer over the splash screen
    // return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.background }}><ActivityIndicator size="large" color={theme.primary} /></View>;
    return null; // Or return null to keep showing the splash screen
  }


  // The navigator is rendered only AFTER loading is false
  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} backgroundColor={theme.background} />      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.foreground,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: theme.background,
          },
        }}
      >
        {/* The initial route is handled by the useEffect logic */}
        {/* These screens are now defined within the navigator */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Make index unusable directly */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}


export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}