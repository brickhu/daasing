
"use client"
// import { SessionProvider} from '@/components/session-context';
// import dynamic from 'next/dynamic'

// const Main = dynamic(()=> import('@/components/lazy-function'),{ssr:false,loading:()=><p>loading Main</p>})
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"

const supabase = createClientComponentClient()

export default function Home() {
  const [session,setSession] = useState()
  useEffect(()=>async()=>{
    const {data,error} = await supabase.auth.getSession()
    console.log('data: ', data);
    if(data){
      setSession(data.session)
    }
  },[])
  return (
    <div>
      {session?<div>{session.user.email}</div>:<div>not login</div>}
    </div>
  )
}