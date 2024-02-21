import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

const useSession = async function(){
  const {data,error} = await supabase.auth.getSession()
  return {session:data.session,error}
}

export {
  supabase,
  useSession
}