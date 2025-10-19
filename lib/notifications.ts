import * as Notifications from "expo-notifications"
import * as Device from "expo-device"
import { Platform } from "react-native"
import { supabase } from "./supabase"

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

export async function registerForPushNotifications(userId: string) {
  if (!Device.isDevice) {
    console.log("Must use physical device for Push Notifications")
    return null
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync()
  let finalStatus = existingStatus

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  if (finalStatus !== "granted") {
    console.log("Failed to get push token for push notification!")
    return null
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data

  // Save token to Supabase
  try {
    await supabase.from("device_tokens").upsert(
      {
        user_id: userId,
        token: token,
        platform: Platform.OS,
      },
      {
        onConflict: "user_id",
      },
    )
  } catch (error) {
    console.error("Error saving device token:", error)
  }

  return token
}

export async function unregisterPushNotifications(userId: string) {
  try {
    await supabase.from("device_tokens").delete().eq("user_id", userId)
  } catch (error) {
    console.error("Error removing device token:", error)
  }
}
