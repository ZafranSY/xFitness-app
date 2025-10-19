"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface User {
  id: string
  email: string
  fullName: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const MOCK_USER: User = {
  id: "user_123",
  email: "member@xfitness.com",
  fullName: "John Doe",
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Mock authentication - accept any credentials for demo
    setUser(MOCK_USER)
    setLoading(false)
  }

  const signUp = async (email: string, password: string, fullName: string) => {
    setLoading(true)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Mock registration - create user with provided info
    setUser({
      id: "user_" + Date.now(),
      email,
      fullName,
    })
    setLoading(false)
  }

  const signOut = async () => {
    setLoading(true)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    setUser(null)
    setLoading(false)
  }

  const resetPassword = async (email: string) => {
    setLoading(true)
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Mock password reset - just show success
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
