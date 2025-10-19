"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, useColorScheme, Alert } from "react-native"
import { useRouter } from "expo-router"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { colors, spacing, typography } from "../../lib/theme"

export default function WorkoutsScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [exercise, setExercise] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")

  const workoutHistory = [
    {
      id: "1",
      date: "Today",
      exercises: [
        { name: "Bench Press", sets: 4, reps: 8, weight: 80 },
        { name: "Incline Dumbbell", sets: 3, reps: 10, weight: 30 },
      ],
      duration: "45 min",
    },
    {
      id: "2",
      date: "Yesterday",
      exercises: [
        { name: "Squats", sets: 4, reps: 6, weight: 120 },
        { name: "Leg Press", sets: 3, reps: 10, weight: 200 },
      ],
      duration: "50 min",
    },
    {
      id: "3",
      date: "2 days ago",
      exercises: [
        { name: "Deadlifts", sets: 3, reps: 5, weight: 140 },
        { name: "Barbell Rows", sets: 4, reps: 8, weight: 100 },
      ],
      duration: "55 min",
    },
  ]

  const handleAddWorkout = () => {
    if (!exercise || !sets || !reps) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }
    Alert.alert("Success", "Workout logged successfully!")
    setExercise("")
    setSets("")
    setReps("")
    setWeight("")
    setShowForm(false)
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Workouts</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
            Track your fitness journey
          </Text>
        </View>

        {/* Progress Link */}
        <Button
          title="View Your Progress →"
          onPress={() => router.push("/(tabs)/progress")}
          variant="secondary"
          fullWidth
          style={{ marginBottom: spacing.lg }}
        />

        {/* Add Workout Form */}
        {showForm ? (
          <Card style={{ marginBottom: spacing.lg }}>
            <Input label="Exercise Name" value={exercise} onChangeText={setExercise} placeholder="e.g., Bench Press" />
            <Input label="Sets" value={sets} onChangeText={setSets} keyboardType="number-pad" />
            <Input label="Reps" value={reps} onChangeText={setReps} keyboardType="number-pad" />
            <Input label="Weight (kg)" value={weight} onChangeText={setWeight} keyboardType="decimal-pad" />
            <View style={{ gap: spacing.md, marginTop: spacing.md }}>
              <Button title="Log Workout" onPress={handleAddWorkout} fullWidth />
              <Button title="Cancel" onPress={() => setShowForm(false)} variant="secondary" fullWidth />
            </View>
          </Card>
        ) : (
          <Button
            title="+ Log New Workout"
            onPress={() => setShowForm(true)}
            fullWidth
            style={{ marginBottom: spacing.lg }}
          />
        )}

        {/* Workout History */}
        <Text style={[typography.body, { color: theme.foreground, fontWeight: "600", marginBottom: spacing.md }]}>
          Recent Workouts
        </Text>
        <View style={{ gap: spacing.md }}>
          {workoutHistory.map((workout) => (
            <Card key={workout.id}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: spacing.md,
                }}
              >
                <Text style={[typography.body, { color: theme.foreground, fontWeight: "600" }]}>{workout.date}</Text>
                <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>{workout.duration}</Text>
              </View>
              {workout.exercises.map((ex, idx) => (
                <View key={idx} style={{ marginBottom: spacing.sm }}>
                  <Text style={[typography.bodySmall, { color: theme.foreground }]}>
                    {ex.name} • {ex.sets}x{ex.reps} @ {ex.weight}kg
                  </Text>
                </View>
              ))}
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
