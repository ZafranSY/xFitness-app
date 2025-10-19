import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { colors } from "../../lib/theme"

export default function AuthLayout() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgot-password" />
    </Stack>
  )
}
