import { createContext,useEffect,useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const SessionContext = createContext()
const supabase = createClientComponentClient()

const SessionProvider = ({children}) => {
  const [session,setSession] = useState()
  useEffect(()=>async()=>{
    const {data,error} = await supabase.auth.getSession()
    setSession(data?data.session:null)
  },[])
  
  
  return (
    <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
  )
}

export { SessionContext,SessionProvider }