import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })


    const {data,error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      },
    })
    if(data){console.log(data)}
    if(error) {throw new Error(error)}

    return NextResponse.redirect(requestUrl.origin+"/signup/email-verify?email="+email, {
      status: 301,
    })
    
  } catch (error) {
    return NextResponse.redirect(requestUrl.origin+"/signup", {
      status: 501,
    })
  }
  
}