import { TextInput, Text, View, StyleSheet, useColorScheme } from "react-native"
import { colors, spacing, borderRadius, typography } from "../lib/theme"

interface InputProps {
  label?: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"
  autoCapitalize?: "none" | "sentences" | "words" | "characters"
  error?: string
}

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  error,
}: InputProps) {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: theme.foreground }]}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.background,
            borderColor: error ? theme.destructive : theme.border,
            color: theme.foreground,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.mutedForeground}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {error && <Text style={[styles.error, { color: theme.destructive }]}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.bodySmall,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  input: {
    ...typography.body,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    minHeight: 48,
  },
  error: {
    ...typography.caption,
    marginTop: spacing.xs,
  },
})
