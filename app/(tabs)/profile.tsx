"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useColorScheme, Alert } from "react-native"
import { useRouter } from "expo-router"
import { useAuth } from "../../contexts/AuthContext"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { colors, spacing, typography } from "../../lib/theme"

export default function ProfileScreen() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const [fullName, setFullName] = useState(user?.user_metadata?.full_name || "")
  const [email, setEmail] = useState(user?.email || "")
  const [phone, setPhone] = useState("+60 12-345 6789")
  const [editing, setEditing] = useState(false)

  const handleSave = () => {
    Alert.alert("Success", "Profile updated successfully")
    setEditing(false)
  }

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
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Profile</Text>
        </View>

        {/* Profile Info */}
        <Card style={{ marginBottom: spacing.lg, alignItems: "center" }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: theme.primary,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: spacing.md,
            }}
          >
            <Text style={[typography.h2, { color: theme.primaryForeground, fontWeight: "700" }]}>
              {fullName.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={[typography.body, { color: theme.foreground, fontWeight: "600" }]}>{fullName}</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.xs }]}>{email}</Text>
        </Card>

        {/* Edit Profile */}
        {editing ? (
          <Card style={{ marginBottom: spacing.lg }}>
            <Input label="Full Name" value={fullName} onChangeText={setFullName} />
            <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Input label="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <Button title="Save Changes" onPress={handleSave} fullWidth />
          </Card>
        ) : (
          <Button
            title="Edit Profile"
            onPress={() => setEditing(true)}
            variant="secondary"
            fullWidth
            style={{ marginBottom: spacing.lg }}
          />
        )}

        {/* Quick Links */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Quick Links
        </Text>
        <View style={{ gap: spacing.md, marginBottom: spacing.lg }}>
          <Card>
            <TouchableOpacity onPress={() => router.push("/(tabs)/payments")}>
              <Text style={[typography.body, { color: theme.foreground }]}>Payment History</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity onPress={() => router.push("/(tabs)/access")}>
              <Text style={[typography.body, { color: theme.foreground }]}>Access Logs</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity onPress={() => router.push("/(tabs)/notifications")}>
              <Text style={[typography.body, { color: theme.foreground }]}>Notifications</Text>
            </TouchableOpacity>
          </Card>
        </View>

        {/* Account Settings */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Account
        </Text>
        <View style={{ gap: spacing.md, marginBottom: spacing.lg }}>
          <Card>
            <TouchableOpacity onPress={() => router.push("/(tabs)/settings")}>
              <Text style={[typography.body, { color: theme.foreground }]}>Settings</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity>
              <Text style={[typography.body, { color: theme.foreground }]}>Change Password</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity>
              <Text style={[typography.body, { color: theme.foreground }]}>Privacy Settings</Text>
            </TouchableOpacity>
          </Card>
        </View>

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
