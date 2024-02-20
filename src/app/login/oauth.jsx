
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function OAuth() {

  
  const [loading,setLoading] = useState(true)



  async function handleLoginWithOAth() {
    const supabase = createClientComponentClient()
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo:"http://localhost:3000/auth/callback"
      }
    })
    console.log('登录完成')
  }

  return <Button onClick={handleLoginWithOAth}>Login with github</Button>
}


