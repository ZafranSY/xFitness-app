"use client"
import { View, Text, StyleSheet, ScrollView, useColorScheme } from "react-native"
import { Card } from "../../components/Card"
import { colors, spacing, typography } from "../../lib/theme"

export default function NotificationsScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  // Mock notifications
  const notifications = [
    {
      id: "1",
      title: "Membership Expiring Soon",
      message: "Your membership expires in 7 days. Renew now to avoid interruption.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      title: "New Class Available",
      message: "Check out our new HIIT class starting next Monday!",
      time: "1 day ago",
      read: true,
    },
    {
      id: "3",
      title: "Gym Maintenance",
      message: "The gym will be closed for maintenance on Sunday.",
      time: "3 days ago",
      read: true,
    },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Notifications</Text>
        </View>

        {/* Notifications List */}
        <View style={{ gap: spacing.md }}>
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              style={{
                backgroundColor: notification.read ? theme.card : theme.muted,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.xs }]}
                  >
                    {notification.title}
                  </Text>
                  <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginBottom: spacing.sm }]}>
                    {notification.message}
                  </Text>
                  <Text style={[typography.caption, { color: theme.mutedForeground }]}>{notification.time}</Text>
                </View>
                {!notification.read && (
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: theme.primary,
                      marginLeft: spacing.md,
                    }}
                  />
                )}
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
