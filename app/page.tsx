export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "96px",
            backgroundColor: "#facc15",
            borderRadius: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
            fontSize: "48px",
            fontWeight: "bold",
            color: "#1a1a1a",
          }}
        >
          XF
        </div>

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          XFitness Mobile App
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#a1a1a1",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          This is a React Native Expo application. To run the mobile app:
        </p>

        <div
          style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "8px",
            padding: "24px",
            marginBottom: "32px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#facc15",
            }}
          >
            Getting Started
          </h2>

          <ol
            style={{
              margin: 0,
              paddingLeft: "20px",
              color: "#d1d1d1",
            }}
          >
            <li style={{ marginBottom: "12px" }}>
              <strong>Install dependencies:</strong>
              <code
                style={{
                  display: "block",
                  backgroundColor: "#1a1a1a",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  fontSize: "14px",
                  overflow: "auto",
                }}
              >
                npm install
              </code>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Start the development server:</strong>
              <code
                style={{
                  display: "block",
                  backgroundColor: "#1a1a1a",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  fontSize: "14px",
                  overflow: "auto",
                }}
              >
                expo start
              </code>
            </li>
            <li>
              <strong>Scan the QR code</strong> with Expo Go app on your phone
            </li>
          </ol>
        </div>

        <div
          style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "8px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#facc15",
            }}
          >
            Features
          </h2>

          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              color: "#d1d1d1",
              textAlign: "left",
            }}
          >
            <li style={{ marginBottom: "8px" }}>✓ Member Authentication</li>
            <li style={{ marginBottom: "8px" }}>✓ Membership Management</li>
            <li style={{ marginBottom: "8px" }}>✓ Workout Tracking</li>
            <li style={{ marginBottom: "8px" }}>✓ Class Booking</li>
            <li style={{ marginBottom: "8px" }}>✓ Progress Analytics</li>
            <li style={{ marginBottom: "8px" }}>✓ Notifications</li>
            <li style={{ marginBottom: "8px" }}>✓ Access Logs</li>
            <li>✓ User Profile Management</li>
          </ul>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "#707070",
          }}
        >
          This is a UI mockup with dummy data. No backend integration required.
        </p>
      </div>
    </div>
  )
}
