import { AdminDashboard } from "@/components/AdminDashboard"
import { ProtectedRoute } from "@/components/ProtectedRoute"

export default function AdminDashboardPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  )
}
