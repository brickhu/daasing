import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const title = formData.get('title')
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    const session = await supabase.auth.getSession()
    if(session.error) {
      throw new Error(session.error)
    }
    const {user} = session.data.session
    const { data, error } = await supabase
      .from('notes')
      .insert([
        { title,
          user_uid: user.id, 
          created_at: new Date().toISOString() 
        },
      ])
      .select()
  
    if(error){
      throw new Error(error)
    }
  
    return NextResponse.json({status:301,data})
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: 501,
    })
  }

}