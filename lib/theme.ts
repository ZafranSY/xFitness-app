// Design tokens matching the admin website
export const colors = {
  light: {
    background: "#ffffff",
    foreground: "#1a1a1a",
    card: "#ffffff",
    cardForeground: "#1a1a1a",
    primary: "#facc15",
    primaryForeground: "#1a1a1a",
    secondary: "#f5f5f5",
    secondaryForeground: "#1a1a1a",
    muted: "#f5f5f5",
    mutedForeground: "#666666",
    accent: "#f5f5f5",
    accentForeground: "#1a1a1a",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
    border: "#e5e5e5",
    input: "#e5e5e5",
    ring: "#1a1a1a",
  },
  dark: {
    background: "#1a1a1a",
    foreground: "#ffffff",
    card: "#1a1a1a",
    cardForeground: "#ffffff",
    primary: "#facc15",
    primaryForeground: "#1a1a1a",
    secondary: "#2a2a2a",
    secondaryForeground: "#ffffff",
    muted: "#2a2a2a",
    mutedForeground: "#999999",
    accent: "#2a2a2a",
    accentForeground: "#ffffff",
    destructive: "#dc2626",
    destructiveForeground: "#ffffff",
    border: "#333333",
    input: "#2a2a2a",
    ring: "#facc15",
  },
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
}

export const borderRadius = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 14,
}

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: "700" as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: "600" as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: "600" as const,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: "400" as const,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: "400" as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: "400" as const,
    lineHeight: 16,
  },
}
