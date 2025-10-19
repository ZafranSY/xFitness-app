import { View, ActivityIndicator, useColorScheme } from "react-native";
import { colors } from "../lib/theme";
import * as SplashScreen from 'expo-splash-screen';

// Keep the native splash screen visible initially
SplashScreen.preventAutoHideAsync();

export default function InitialRoute() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  // Render a simple loading indicator or null.
  // The actual navigation/redirect logic is now handled in app/_layout.tsx.
  // This screen is displayed briefly while the auth state is checked.
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.background }}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
  // You could also return null here if you prefer the native splash screen stays longer
  // return null;
}