"use client"

import { View, Text, StyleSheet, ScrollView, useColorScheme } from "react-native"
import { Card } from "../../components/Card"
import { colors, spacing, typography, borderRadius } from "../../lib/theme"

export default function PaymentsScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const payments = [
    {
      id: "1",
      date: "2024-01-15",
      plan: "Premium Membership",
      amount: 249,
      status: "Completed",
      method: "FPX",
    },
    {
      id: "2",
      date: "2023-10-15",
      plan: "Premium Membership",
      amount: 249,
      status: "Completed",
      method: "Credit Card",
    },
    {
      id: "3",
      date: "2023-07-15",
      plan: "Basic Membership",
      amount: 99,
      status: "Completed",
      method: "FPX",
    },
    {
      id: "4",
      date: "2023-04-15",
      plan: "Premium Membership",
      amount: 249,
      status: "Completed",
      method: "Credit Card",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#10b981"
      case "Pending":
        return theme.primary
      case "Failed":
        return "#ef4444"
      default:
        return theme.mutedForeground
    }
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Payment History</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
            Your transaction records
          </Text>
        </View>

        {/* Total Spent */}
        <Card style={{ marginBottom: spacing.lg, alignItems: "center" }}>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginBottom: spacing.sm }]}>
            Total Spent
          </Text>
          <Text style={[typography.h2, { color: theme.primary, fontWeight: "700" }]}>RM 846</Text>
          <Text style={[typography.caption, { color: theme.mutedForeground, marginTop: spacing.xs }]}>
            4 transactions
          </Text>
        </Card>

        {/* Payments List */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Transactions
        </Text>
        <View style={{ gap: spacing.md }}>
          {payments.map((payment) => (
            <Card key={payment.id}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: spacing.md,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.xs }]}
                  >
                    {payment.plan}
                  </Text>
                  <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>
                    {payment.date} • {payment.method}
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.xs }]}
                  >
                    RM {payment.amount}
                  </Text>
                  <View
                    style={{
                      backgroundColor: getStatusColor(payment.status),
                      paddingHorizontal: spacing.md,
                      paddingVertical: spacing.xs,
                      borderRadius: borderRadius.sm,
                    }}
                  >
                    <Text style={[typography.caption, { color: "white", fontWeight: "600" }]}>{payment.status}</Text>
                  </View>
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
