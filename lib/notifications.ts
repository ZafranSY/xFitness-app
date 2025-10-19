import * as Notifications from "expo-notifications"
import * as Device from "expo-device"

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

  // Mock: Device token registered
  console.log("Mock: Device token registered", token)

  return token
}

export async function unregisterPushNotifications(userId: string) {
  // Mock: Device token unregistered for user
  console.log("Mock: Device token unregistered for user", userId)
}
