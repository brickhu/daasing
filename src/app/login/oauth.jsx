
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button";
import { useState,useEffect } from 'react';
import {useRouter} from 'next/navigation';

export default function OAuth({href}) {

  
  const [loading,setLoading] = useState(false)
  const [origin,setOrigin] = useState()

  useEffect(() => {
    setOrigin(window.location.origin)
  }, []);


  async function handleLoginWithOAth() {
    
    const supabase = createClientComponentClient()
    const {error}=await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo:origin+"/auth/callback"
      }
    })
    setLoading(true)
    if(error){
      setLoading(false)
    }
  }

  return <Button onClick={handleLoginWithOAth} disabled={loading}>Login with github</Button>
}


