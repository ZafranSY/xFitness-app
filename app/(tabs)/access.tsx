"use client"
import { View, Text, StyleSheet, ScrollView, useColorScheme } from "react-native"
import { Card } from "../../components/Card"
import { colors, spacing, typography, borderRadius } from "../../lib/theme"

export default function AccessScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  // Mock data
  const accessLogs = [
    { id: "1", time: "09:30 AM", date: "Today", status: "Granted" },
    { id: "2", time: "06:15 PM", date: "Yesterday", status: "Granted" },
    { id: "3", time: "07:45 AM", date: "2 days ago", status: "Granted" },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Gym Access</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
            Your access information and history
          </Text>
        </View>

        {/* QR Code Placeholder */}
        <Card style={{ alignItems: "center", marginBottom: spacing.xl }}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: theme.muted,
              borderRadius: spacing.md,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={[typography.body, { color: theme.mutedForeground }]}>QR Code</Text>
          </View>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.md }]}>
            Show this QR code at the entrance
          </Text>
        </Card>

        {/* Access Status */}
        <Card style={{ marginBottom: spacing.lg }}>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginBottom: spacing.sm }]}>
            Current Status
          </Text>
          <Text style={[typography.h3, { color: theme.primary, fontWeight: "700" }]}>Active</Text>
        </Card>

        {/* Recent Access */}
        <View>
          <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
            Recent Access
          </Text>
          {accessLogs.map((log) => (
            <Card key={log.id} style={{ marginBottom: spacing.md }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                  <Text style={[typography.body, { color: theme.foreground, fontWeight: "600" }]}>{log.time}</Text>
                  <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.xs }]}>
                    {log.date}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: theme.primary,
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.xs,
                    borderRadius: borderRadius.sm,
                  }}
                >
                  <Text style={[typography.caption, { color: theme.primaryForeground, fontWeight: "600" }]}>
                    {log.status}
                  </Text>
                </View>
              </View>
            </Card>
          ))}
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
