import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  
  const requestUrl = new URL(request.url)
  console.log(requestUrl)
  const from = requestUrl.searchParams.get('from')
  const formData = await request.formData()
  const title = formData.get('title')
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })


  return NextResponse.json({result:"done",data:{title}})
}