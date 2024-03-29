import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  
  const requestUrl = new URL(request.url)
  const from = requestUrl.searchParams.get('from')
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return NextResponse.redirect(from==="undefined"?requestUrl.origin:from, {
    status: 301,
  })
}