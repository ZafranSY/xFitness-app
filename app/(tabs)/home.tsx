"use client"
import { View, Text, StyleSheet, ScrollView, useColorScheme, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { useAuth } from "../../contexts/AuthContext"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { colors, spacing, typography } from "../../lib/theme"

export default function HomeScreen() {
  const { user } = useAuth()
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  // Mock data
  const memberData = {
    status: "Active",
    plan: "Premium",
    daysRemaining: 45,
    joinDate: "2024-01-15",
  }

  const stats = [
    { label: "Check-ins", value: "24" },
    { label: "Workouts", value: "18" },
    { label: "Days Left", value: "45" },
  ]

  const recentNotifications = [
    { id: "1", title: "Membership Expiring Soon", time: "2 hours ago" },
    { id: "2", title: "New Class Available", time: "1 day ago" },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>Welcome back,</Text>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>
            {user?.fullName || "Member"}
          </Text>
        </View>

        {/* Status Card */}
        <Card style={{ marginBottom: spacing.lg }}>
          <View style={{ marginBottom: spacing.md }}>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>Membership Status</Text>
            <Text style={[typography.h3, { color: theme.foreground, fontWeight: "700", marginTop: spacing.xs }]}>
              {memberData.status}
            </Text>
          </View>
          <View style={{ marginBottom: spacing.md }}>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>Current Plan</Text>
            <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginTop: spacing.xs }]}>
              {memberData.plan}
            </Text>
          </View>
          <View>
            <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>Days Remaining</Text>
            <Text style={[typography.h3, { color: theme.primary, fontWeight: "700", marginTop: spacing.xs }]}>
              {memberData.daysRemaining} days
            </Text>
          </View>
        </Card>

        {/* Stats */}
        <View style={{ flexDirection: "row", gap: spacing.md, marginBottom: spacing.lg }}>
          {stats.map((stat, index) => (
            <Card key={index} style={{ flex: 1, alignItems: "center" }}>
              <Text style={[typography.h2, { color: theme.primary, fontWeight: "700" }]}>{stat.value}</Text>
              <Text style={[typography.caption, { color: theme.mutedForeground, marginTop: spacing.xs }]}>
                {stat.label}
              </Text>
            </Card>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={{ gap: spacing.md, marginBottom: spacing.lg }}>
          <Button
            title="View Access QR Code"
            onPress={() => router.push("/(tabs)/access")}
            variant="primary"
            fullWidth
          />
          <Button title="Log Workout" onPress={() => router.push("/(tabs)/workouts")} variant="secondary" fullWidth />
          <Button title="View Progress" onPress={() => router.push("/(tabs)/progress")} variant="secondary" fullWidth />
          <Button title="Browse Classes" onPress={() => router.push("/(tabs)/classes")} variant="secondary" fullWidth />
        </View>

        {/* Recent Notifications */}
        <View style={{ marginBottom: spacing.lg }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: spacing.md,
            }}
          >
            <Text style={[typography.body, { color: theme.foreground, fontWeight: "600" }]}>Recent Notifications</Text>
            <TouchableOpacity onPress={() => router.push("/(tabs)/notifications")}>
              <Text style={[typography.bodySmall, { color: theme.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>
          {recentNotifications.map((notif) => (
            <Card key={notif.id} style={{ marginBottom: spacing.sm }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={[typography.bodySmall, { color: theme.foreground, flex: 1 }]}>{notif.title}</Text>
                <Text style={[typography.caption, { color: theme.mutedForeground }]}>{notif.time}</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Membership & Payments */}
        <View style={{ gap: spacing.md }}>
          <Button
            title="Renew Membership"
            onPress={() => router.push("/(tabs)/membership")}
            variant="primary"
            fullWidth
          />
          <Button
            title="Payment History"
            onPress={() => router.push("/(tabs)/payments")}
            variant="secondary"
            fullWidth
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
