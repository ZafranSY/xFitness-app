"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Redirect to the Expo app info
    if (typeof window !== "undefined") {
      document.body.style.margin = "0"
      document.body.style.padding = "0"
      document.body.style.fontFamily = "system-ui, -apple-system, sans-serif"
      document.body.style.background = "#1a1a1a"
      document.body.style.color = "#ffffff"
    }
  }, [])

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
    >
      <div style={{ maxWidth: "600px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "#facc15" }}>XFitness</h1>
        <h2 style={{ fontSize: "28px", marginBottom: "30px", fontWeight: "600" }}>Member Mobile App</h2>

        <p style={{ fontSize: "18px", marginBottom: "30px", lineHeight: "1.6", color: "#cccccc" }}>
          This is a React Native Expo application designed for mobile devices.
        </p>

        <div
          style={{
            background: "#2a2a2a",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          <h3 style={{ marginTop: "0", color: "#facc15" }}>To run the app:</h3>
          <ol style={{ lineHeight: "2", color: "#cccccc" }}>
            <li>
              Download and install <strong>Expo Go</strong> on your mobile device
            </li>
            <li>
              Run <code style={{ background: "#1a1a1a", padding: "4px 8px", borderRadius: "4px" }}>npm install</code>
            </li>
            <li>
              Run <code style={{ background: "#1a1a1a", padding: "4px 8px", borderRadius: "4px" }}>expo start</code>
            </li>
            <li>Scan the QR code with Expo Go</li>
          </ol>
        </div>

        <div style={{ background: "#2a2a2a", padding: "30px", borderRadius: "12px", marginBottom: "30px" }}>
          <h3 style={{ marginTop: "0", color: "#facc15" }}>Features:</h3>
          <ul style={{ textAlign: "left", lineHeight: "2", color: "#cccccc" }}>
            <li>✓ Member Authentication (Login/Signup)</li>
            <li>✓ Membership Management</li>
            <li>✓ Workout Tracking</li>
            <li>✓ Class Booking</li>
            <li>✓ Progress Tracking</li>
            <li>✓ Gym Access Logs</li>
            <li>✓ Notifications</li>
            <li>✓ Payment History</li>
          </ul>
        </div>

        <div
          style={{
            background: "#facc15",
            color: "#1a1a1a",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "0", fontSize: "16px", fontWeight: "600" }}>
            📱 Download Expo Go to preview this app on your phone
          </p>
        </div>

        <p style={{ color: "#999999", fontSize: "14px" }}>Built with Expo 54, React Native, and Supabase</p>
      </div>
    </div>
  )
}
