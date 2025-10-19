"use client"

import { useEffect } from "react"
import { useRouter } from "expo-router"
import { useAuth } from "../contexts/AuthContext"
import { View, ActivityIndicator, useColorScheme } from "react-native"
import { colors } from "../lib/theme"

export default function SplashScreen() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/(tabs)/home")
      } else {
        router.replace("/(auth)/login")
      }
    }
  }, [loading, user])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.background }}>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  )
}
