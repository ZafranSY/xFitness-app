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

export default function ForgotPasswordScreen() {
  const router = useRouter()
  const { resetPassword } = useAuth()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!email) {
      setError("Email is required")
      return
    }

    setLoading(true)
    setError("")
    try {
      await resetPassword(email)
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Failed to send reset link")
      Alert.alert("Error", error || "Failed to send reset link")
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

          {!submitted ? (
            <>
              {/* Header */}
              <View style={{ alignItems: "center", marginBottom: spacing.xl }}>
                <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Reset Password</Text>
                <Text
                  style={[
                    typography.bodySmall,
                    { color: theme.mutedForeground, marginTop: spacing.sm, textAlign: "center" },
                  ]}
                >
                  Enter your email to receive a password reset link
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
                  error={error}
                />
              </View>

              {/* Submit Button */}
              <Button title="Send Reset Link" onPress={handleSubmit} loading={loading} fullWidth />
            </>
          ) : (
            <View style={{ alignItems: "center" }}>
              {/* Success Icon */}
              <View
                style={{
                  width: 64,
                  height: 64,
                  backgroundColor: theme.primary,
                  borderRadius: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: spacing.lg,
                }}
              >
                <Text style={{ fontSize: 32, fontWeight: "700", color: theme.primaryForeground }}>✓</Text>
              </View>

              <Text style={[typography.h3, { color: theme.foreground, fontWeight: "700", marginBottom: spacing.sm }]}>
                Check Your Email
              </Text>
              <Text
                style={[
                  typography.bodySmall,
                  { color: theme.mutedForeground, textAlign: "center", marginBottom: spacing.xl },
                ]}
              >
                We've sent a password reset link to {email}
              </Text>

              {/* Back to Login Button */}
              <Link href="/(auth)/login" asChild>
                <TouchableOpacity>
                  <Button title="Back to Login" onPress={() => {}} fullWidth />
                </TouchableOpacity>
              </Link>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
