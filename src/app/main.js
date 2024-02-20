import {Button} from "@/components/ui/button"
export default async function Main({session}) {
  return (
    <div>{session?session.user.email:'user unlogin'}
    <Button className="w-600 h=[1.5em]">登录</Button>
    </div>
    
  )
}