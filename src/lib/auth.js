import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
const cookieStore = cookies()
const supabase = createServerComponentClient({ cookies: () => cookieStore })

const getSession = async()=>{
  const {data:{session},error} = await supabase.auth.getSession()
  return ({session,error})
}

const getUser = async()=>{
  const {data:{user},error} = await supabase.auth.getUser()
  return ({user,error})
}

export {
  getSession,
  getUser
}