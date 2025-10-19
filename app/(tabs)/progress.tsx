"use client"

import { View, Text, StyleSheet, ScrollView, useColorScheme } from "react-native"
import { Card } from "../../components/Card"
import { colors, spacing, typography, borderRadius } from "../../lib/theme"

export default function ProgressScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const stats = [
    { label: "Total Workouts", value: "24", change: "+3 this week" },
    { label: "Total Duration", value: "32h", change: "+2h this week" },
    { label: "Avg Weight Lifted", value: "85kg", change: "+5kg this month" },
    { label: "Current Streak", value: "8 days", change: "Keep it up!" },
  ]

  const progressData = [
    { week: "Week 1", workouts: 3, duration: 4 },
    { week: "Week 2", workouts: 4, duration: 5 },
    { week: "Week 3", workouts: 5, duration: 6 },
    { week: "Week 4", workouts: 6, duration: 7 },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Progress</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
            Your fitness achievements
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={{ gap: spacing.md, marginBottom: spacing.xl }}>
          {stats.map((stat, idx) => (
            <Card key={idx}>
              <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginBottom: spacing.sm }]}>
                {stat.label}
              </Text>
              <Text style={[typography.h2, { color: theme.primary, fontWeight: "700", marginBottom: spacing.xs }]}>
                {stat.value}
              </Text>
              <Text style={[typography.caption, { color: theme.mutedForeground }]}>{stat.change}</Text>
            </Card>
          ))}
        </View>

        {/* Weekly Progress */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Weekly Activity
        </Text>
        <Card style={{ marginBottom: spacing.lg }}>
          {progressData.map((week, idx) => (
            <View key={idx} style={{ marginBottom: spacing.md }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: spacing.sm,
                }}
              >
                <Text style={[typography.bodySmall, { color: theme.foreground }]}>{week.week}</Text>
                <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>
                  {week.workouts} workouts • {week.duration}h
                </Text>
              </View>
              <View
                style={{ height: 8, backgroundColor: theme.muted, borderRadius: borderRadius.sm, overflow: "hidden" }}
              >
                <View
                  style={{
                    height: "100%",
                    width: `${(week.workouts / 6) * 100}%`,
                    backgroundColor: theme.primary,
                  }}
                />
              </View>
            </View>
          ))}
        </Card>

        {/* Achievements */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Achievements
        </Text>
        <View style={{ gap: spacing.md }}>
          <Card style={{ alignItems: "center" }}>
            <Text style={[typography.h3, { color: theme.primary, fontWeight: "700" }]}>🔥</Text>
            <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginTop: spacing.sm }]}>
              7-Day Streak
            </Text>
            <Text style={[typography.caption, { color: theme.mutedForeground, marginTop: spacing.xs }]}>
              Completed 7 consecutive workouts
            </Text>
          </Card>
          <Card style={{ alignItems: "center" }}>
            <Text style={[typography.h3, { color: theme.primary, fontWeight: "700" }]}>💪</Text>
            <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginTop: spacing.sm }]}>
              Strength Master
            </Text>
            <Text style={[typography.caption, { color: theme.mutedForeground, marginTop: spacing.xs }]}>
              Lifted 1000kg total
            </Text>
          </Card>
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
