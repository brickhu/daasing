import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getSession = async()=>{
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const {data:{session},error} = await supabase.auth.getSession()
  return ({session,error})
}

const getUser = async()=>{
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const {data:{user},error} = await supabase.auth.getUser()
  return ({user,error})
}

export {
  getSession,
  getUser
}