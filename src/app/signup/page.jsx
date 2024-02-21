
import { Button } from "@/components/ui/button"
export default function Signup(req) {
  const {searchParams:{from}} = req
  return (
    <div>
      <div className="w-full">
      <form action={"/auth/signup?type=email&from="+from} method="post">
        <label htmlFor="email">Email</label>
        <input name="email" /> 
        <hr/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <hr/>
        <Button>注册新用户</Button>
        
      </form>
      </div>
      <div><a href="/login">登录</a></div>
    </div>
  )
}
