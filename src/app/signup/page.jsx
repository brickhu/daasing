
import { Button } from "@/components/ui/button"
import { useSession } from "@/lib/supabase-serverside"
import { redirect } from 'next/navigation'

export default async function Signup(req) {
  const {session,error} = await useSession()
  const {searchParams:{from}} = req
  if(session) {
    redirect('/account')
    return
  }
  
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
