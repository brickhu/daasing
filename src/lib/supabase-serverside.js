import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const cookieStore = cookies()
const supabase = createServerComponentClient({ cookies:()=>cookieStore });

const useSession = async function(){
  const {data,error} = await supabase.auth.getSession()
  return {session:data?.session,error}
}

export {
  supabase,
  useSession
}