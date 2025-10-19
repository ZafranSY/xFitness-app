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

export default function SignupScreen() {
  const router = useRouter()
  const { signUp } = useAuth()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
  }>({})

  const validateForm = () => {
    const newErrors: typeof errors = {}
    if (!fullName) newErrors.fullName = "Full name is required"
    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignup = async () => {
    if (!validateForm()) return

    setLoading(true)
    try {
      await signUp(email, password, fullName)
      Alert.alert("Success", "Account created! Please check your email to verify your account.")
      router.replace("/(auth)/login")
    } catch (error: any) {
      Alert.alert("Signup Failed", error.message || "Unable to create account")
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background }}>
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: spacing.lg, paddingVertical: spacing.xl }}>
          {/* Back Button */}
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity style={{ marginBottom: spacing.lg }}>
              <Text style={[typography.body, { color: theme.primary, fontWeight: "600" }]}>← Back</Text>
            </TouchableOpacity>
          </Link>

          {/* Header */}
          <View style={{ marginBottom: spacing.xl }}>
            <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Create Account</Text>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
              Join XFitness today
            </Text>
          </View>

          {/* Form */}
          <View style={{ marginBottom: spacing.lg }}>
            <Input
              label="Full Name"
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name"
              error={errors.fullName}
            />
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
              placeholder="Create a password"
              secureTextEntry
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              secureTextEntry
              error={errors.confirmPassword}
            />
          </View>

          {/* Sign Up Button */}
          <Button title="Create Account" onPress={handleSignup} loading={loading} fullWidth />

          {/* Login Link */}
          <View style={{ flexDirection: "row", justifyContent: "center", gap: spacing.sm, marginTop: spacing.lg }}>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>Already have an account?</Text>
            <Link href="/(auth)/login" asChild>
              <TouchableOpacity>
                <Text style={[typography.bodySmall, { color: theme.primary, fontWeight: "600" }]}>Login</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
