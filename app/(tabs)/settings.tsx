"use client"

import { View, Text, StyleSheet, ScrollView, useColorScheme, TouchableOpacity, Switch, Alert } from "react-native"
import { useRouter } from "expo-router"
import { useAuth } from "../../contexts/AuthContext"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { colors, spacing, typography } from "../../lib/theme"

export default function SettingsScreen() {
  const { signOut } = useAuth()
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut()
            router.replace("/(auth)/login")
          } catch (error) {
            Alert.alert("Error", "Failed to logout")
          }
        },
      },
    ])
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Settings</Text>
        </View>

        {/* Notifications */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Notifications
        </Text>
        <Card style={{ marginBottom: spacing.lg }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: spacing.md,
            }}
          >
            <Text style={[typography.body, { color: theme.foreground }]}>Push Notifications</Text>
            <Switch value={true} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: spacing.md,
            }}
          >
            <Text style={[typography.body, { color: theme.foreground }]}>Email Notifications</Text>
            <Switch value={true} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={[typography.body, { color: theme.foreground }]}>Membership Reminders</Text>
            <Switch value={true} />
          </View>
        </Card>

        {/* Account */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Account
        </Text>
        <View style={{ gap: spacing.md, marginBottom: spacing.lg }}>
          <Card>
            <TouchableOpacity>
              <Text style={[typography.body, { color: theme.foreground }]}>Change Password</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity>
              <Text style={[typography.body, { color: theme.foreground }]}>Privacy Policy</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity>
              <Text style={[typography.body, { color: theme.foreground }]}>Terms of Service</Text>
            </TouchableOpacity>
          </Card>
        </View>

        {/* About */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          About
        </Text>
        <Card style={{ marginBottom: spacing.lg }}>
          <View style={{ marginBottom: spacing.md }}>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginBottom: spacing.xs }]}>
              App Version
            </Text>
            <Text style={[typography.body, { color: theme.foreground, fontWeight: "600" }]}>1.0.0</Text>
          </View>
          <View>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginBottom: spacing.xs }]}>
              Build Number
            </Text>
            <Text style={[typography.body, { color: theme.foreground, fontWeight: "600" }]}>2024.01.15</Text>
          </View>
        </Card>

        {/* Logout */}
        <Button title="Logout" onPress={handleLogout} variant="destructive" fullWidth />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
