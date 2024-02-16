import AuthForm from "@/components/auth-form"
import Login from "@/components/auth"

export default function Home() {
  return (
    <div className="row">
      <div className="col-6 auth-widget">
        <Login />
      </div>
    </div>
  )
}