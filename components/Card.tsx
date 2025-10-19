import type React from "react"
import { View, StyleSheet, useColorScheme } from "react-native"
import { colors, spacing, borderRadius } from "../lib/theme"

interface CardProps {
  children: React.ReactNode
  style?: any
}

export function Card({ children, style }: CardProps) {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
  },
})
