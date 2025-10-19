"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, useColorScheme, Alert } from "react-native"
import { useRouter } from "expo-router"
import { Card } from "../../components/Card"
import { Button } from "../../components/Button"
import { colors, spacing, typography } from "../../lib/theme"

export default function MembershipScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  // Mock membership plans
  const plans = [
    {
      id: "1",
      name: "Basic",
      price: 99,
      duration: "1 Month",
      features: ["Gym Access", "Basic Equipment", "Peak Hours"],
      isPopular: false,
    },
    {
      id: "2",
      name: "Premium",
      price: 249,
      duration: "3 Months",
      features: ["Gym Access", "All Equipment", "24/7 Access", "Personal Trainer"],
      isPopular: true,
      bonus: "Most Popular",
    },
    {
      id: "3",
      name: "Elite",
      price: 449,
      duration: "6 Months",
      features: ["Everything in Premium", "Nutrition Consultation", "Priority Support"],
      isPopular: false,
    },
  ]

  const handlePurchase = (planId: string) => {
    Alert.alert("Purchase", "Redirecting to payment...", [{ text: "OK" }])
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.lg }}>
        {/* Header */}
        <View style={{ marginBottom: spacing.xl }}>
          <Text style={[typography.h2, { color: theme.foreground, fontWeight: "700" }]}>Membership Plans</Text>
          <Text style={[typography.bodySmall, { color: theme.mutedForeground, marginTop: spacing.sm }]}>
            Choose the perfect plan for you
          </Text>
        </View>

        {/* Payment History Link */}
        <Button
          title="View Payment History →"
          onPress={() => router.push("/(tabs)/payments")}
          variant="secondary"
          fullWidth
          style={{ marginBottom: spacing.lg }}
        />

        {/* Plans */}
        <View style={{ gap: spacing.lg }}>
          {plans.map((plan) => (
            <Card
              key={plan.id}
              style={{
                borderColor: selectedPlan === plan.id ? theme.primary : theme.border,
                borderWidth: 2,
              }}
            >
              {plan.bonus && (
                <View
                  style={{
                    backgroundColor: theme.primary,
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.xs,
                    borderRadius: spacing.md,
                    alignSelf: "flex-start",
                    marginBottom: spacing.md,
                  }}
                >
                  <Text style={[typography.caption, { color: theme.primaryForeground, fontWeight: "600" }]}>
                    {plan.bonus}
                  </Text>
                </View>
              )}

              <Text style={[typography.h3, { color: theme.foreground, fontWeight: "700", marginBottom: spacing.sm }]}>
                {plan.name}
              </Text>

              <View style={{ marginBottom: spacing.md }}>
                <Text style={[typography.h2, { color: theme.primary, fontWeight: "700" }]}>RM {plan.price}</Text>
                <Text style={[typography.bodySmall, { color: theme.mutedForeground }]}>{plan.duration}</Text>
              </View>

              <View style={{ marginBottom: spacing.lg }}>
                {plan.features.map((feature, index) => (
                  <Text
                    key={index}
                    style={[typography.bodySmall, { color: theme.foreground, marginBottom: spacing.xs }]}
                  >
                    ✓ {feature}
                  </Text>
                ))}
              </View>

              <Button
                title="Select Plan"
                onPress={() => {
                  setSelectedPlan(plan.id)
                  handlePurchase(plan.id)
                }}
                variant={selectedPlan === plan.id ? "primary" : "secondary"}
                fullWidth
              />
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
