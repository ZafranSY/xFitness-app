import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { colors } from "../../lib/theme"

export default function TabsLayout() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? colors.dark : colors.light

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.mutedForeground,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          tabBarLabel: "Workouts",
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: "Classes",
          tabBarLabel: "Classes",
        }}
      />
      <Tabs.Screen
        name="membership"
        options={{
          title: "Membership",
          tabBarLabel: "Membership",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
        }}
      />
      {/* Hidden screens accessible via navigation */}
      <Tabs.Screen
        name="progress"
        options={{
          href: null,
          title: "Progress",
        }}
      />
      <Tabs.Screen
        name="access"
        options={{
          href: null,
          title: "Access",
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
          title: "Notifications",
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          href: null,
          title: "Payments",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null,
          title: "Settings",
        }}
      />
    </Tabs>
  )
}
