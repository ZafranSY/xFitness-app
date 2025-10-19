"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, useColorScheme, Alert } from "react-native"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { colors, spacing, typography, borderRadius } from "../../lib/theme"

export default function ClassesScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light
  const [bookedClasses, setBookedClasses] = useState<string[]>(["1"])

  const classes = [
    {
      id: "1",
      name: "HIIT Training",
      trainer: "Alex Johnson",
      time: "06:00 AM",
      duration: "45 min",
      capacity: "20/25",
      level: "Intermediate",
    },
    {
      id: "2",
      name: "Yoga Flow",
      trainer: "Sarah Williams",
      time: "09:00 AM",
      duration: "60 min",
      capacity: "15/20",
      level: "Beginner",
    },
    {
      id: "3",
      name: "Strength Training",
      trainer: "Mike Chen",
      time: "05:00 PM",
      duration: "50 min",
      capacity: "18/20",
      level: "Advanced",
    },
    {
      id: "4",
      name: "Spin Class",
      trainer: "Emma Davis",
      time: "06:30 PM",
      duration: "45 min",
      capacity: "25/25",
      level: "Intermediate",
    },
  ]

  const handleBookClass = (classId: string) => {
    if (bookedClasses.includes(classId)) {
      setBookedClasses(bookedClasses.filter((id) => id !== classId))
      Alert.alert("Cancelled", "Class booking cancelled")
    } else {
      setBookedClasses([...bookedClasses, classId])
      Alert.alert("Booked", "Class booked successfully!")
    }
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Classes</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
            Today's available classes
          </Text>
        </View>

        {/* Classes List */}
        <View style={{ gap: spacing.md }}>
          {classes.map((cls) => {
            const isBooked = bookedClasses.includes(cls.id)
            const isFull = cls.capacity === "25/25"
            return (
              <Card
                key={cls.id}
                style={{ borderColor: isBooked ? theme.primary : theme.border, borderWidth: isBooked ? 2 : 1 }}
              >
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
                      style={[
                        typography.body,
                        { color: theme.foreground, fontWeight: "600", marginBottom: spacing.xs },
                      ]}
                    >
                      {cls.name}
                    </Text>
                    <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>
                      {cls.trainer} • {cls.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor:
                        cls.level === "Beginner" ? "#10b981" : cls.level === "Intermediate" ? theme.primary : "#ef4444",
                      paddingHorizontal: spacing.md,
                      paddingVertical: spacing.xs,
                      borderRadius: borderRadius.sm,
                    }}
                  >
                    <Text style={[typography.caption, { color: "white", fontWeight: "600" }]}>{cls.level}</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: spacing.md }}>
                  <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>{cls.duration}</Text>
                  <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>{cls.capacity}</Text>
                </View>

                <Button
                  title={isBooked ? "Cancel Booking" : isFull ? "Class Full" : "Book Class"}
                  onPress={() => handleBookClass(cls.id)}
                  variant={isBooked ? "destructive" : "primary"}
                  fullWidth
                  disabled={isFull && !isBooked}
                />
              </Card>
            )
          })}
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
