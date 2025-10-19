import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, useColorScheme } from "react-native"
import { colors, spacing, borderRadius, typography } from "../lib/theme"

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: "primary" | "secondary" | "destructive"
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

export function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  fullWidth = false,
}: ButtonProps) {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  const getBackgroundColor = () => {
    if (disabled) return theme.muted
    switch (variant) {
      case "primary":
        return theme.primary
      case "secondary":
        return theme.secondary
      case "destructive":
        return theme.destructive
      default:
        return theme.primary
    }
  }

  const getTextColor = () => {
    if (disabled) return theme.mutedForeground
    switch (variant) {
      case "primary":
        return theme.primaryForeground
      case "secondary":
        return theme.secondaryForeground
      case "destructive":
        return theme.destructiveForeground
      default:
        return theme.primaryForeground
    }
  }

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: getBackgroundColor() }, fullWidth && styles.fullWidth]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
  },
  fullWidth: {
    width: "100%",
  },
  text: {
    ...typography.body,
    fontWeight: "600",
  },
})
