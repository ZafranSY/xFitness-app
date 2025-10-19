"use client"

import { useState } from "react"
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useColorScheme,
  Alert,
} from "react-native"
import { Link, useRouter } from "expo-router"
import { useAuth } from "../../contexts/AuthContext"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { colors, spacing, typography } from "../../lib/theme"

export default function LoginScreen() {
  const router = useRouter()
  const { signIn } = useAuth()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async () => {
    if (!validateForm()) return

    setLoading(true)
    try {
      await signIn(email, password)
      router.replace("/(tabs)/home")
    } catch (error: any) {
      Alert.alert("Login Failed", error.message || "Unable to sign in")
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }}>
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: spacing.lg, paddingVertical: spacing.xl }}>
          {/* Logo */}
          <View style={{ alignItems: "center", marginBottom: spacing.xxl }}>
            <View
              style={{
                width: 96,
                height: 96,
                backgroundColor: theme.primary,
                borderRadius: 48,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: spacing.lg,
              }}
            >
              <Text style={{ fontSize: 32, fontWeight: "700", color: theme.primaryForeground }}>XF</Text>
            </View>
            <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>XFitness</Text>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
              Member Portal
            </Text>
          </View>

          {/* Form */}
          <View style={{ marginBottom: spacing.lg }}>
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />
            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
              error={errors.password}
            />
          </View>

          {/* Forgot Password Link */}
          <Link href="/(auth)/forgot-password" asChild>
            <TouchableOpacity style={{ marginBottom: spacing.lg }}>
              <Text style={[typography.bodySmall, { color: theme.primary, fontWeight: "600" }]}>Forgot Password?</Text>
            </TouchableOpacity>
          </Link>

          {/* Login Button */}
          <Button title="Login" onPress={handleLogin} loading={loading} fullWidth />

          {/* Sign Up Link */}
          <View style={{ flexDirection: "row", justifyContent: "center", gap: spacing.sm, marginTop: spacing.lg }}>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>Don't have an account?</Text>
            <Link href="/(auth)/signup" asChild>
              <TouchableOpacity>
                <Text style={[typography.bodySmall, { color: theme.primary, fontWeight: "600" }]}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
