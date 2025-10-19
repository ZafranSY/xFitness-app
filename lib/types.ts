export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
}

export interface Member {
  id: string
  user_id: string
  full_name: string
  email: string
  phone?: string
  status: "Active" | "Expired" | "Pending"
  plan_id?: string
  start_date?: string
  end_date?: string
  created_at: string
}

export interface MembershipPlan {
  id: string
  name: string
  price: number
  duration_days: number
  features: string[]
  is_popular: boolean
  bonus_text?: string
  created_at: string
}

export interface Payment {
  id: string
  member_id: string
  plan_id: string
  amount: number
  method: "FPX" | "Manual"
  status: "Success" | "Pending" | "Failed"
  transaction_id?: string
  created_at: string
}

export interface Notification {
  id: string
  title: string
  message: string
  target_group: "All" | "Active" | "Expired"
  created_at: string
  read: boolean
}

export interface AccessLog {
  id: string
  member_id: string
  status: "Granted" | "Denied"
  timestamp: string
}

export interface DeviceToken {
  id: string
  user_id: string
  token: string
  platform: "ios" | "android"
  created_at: string
  updated_at: string
}

export interface ClassEnrollment {
  id: string
  member_id: string
  class_id: string
  created_at: string
}

export interface Class {
  id: string
  name: string
  trainer_id?: string
  schedule: string
  capacity: number
  duration_minutes: number
  description?: string
  created_at: string
}

export interface Trainer {
  id: string
  full_name: string
  email: string
  phone?: string
  specialization?: string
  bio?: string
  avatar_url?: string
  created_at: string
}
