
import { Button } from "@/components/ui/button"
import { useSession } from "@/lib/supabase-serverside"
import { redirect } from 'next/navigation'

export default async function EmailVerify({searchParams}) {
  console.log('searchParams: ', searchParams);
  const {session,error} = await useSession()
  const {user=null} = session || {}
  return (
    <div>
      <div className="w-full">
        {user?.aud==="authenticated"?`${user?.email}已确认`:`前往${searchParams?.email}确认后完成注册`}
      </div>
    </div>
  )
}
