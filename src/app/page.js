import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
export default async function Account() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div>{user?user.email:"user unlogin"}</div>
  )
}