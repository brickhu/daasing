import { supabaseRouteClient } from '@/app/api/utils/supabase';
import { NextResponse } from 'next/server'

export async function GET(request, context) {
  try {
    const supabase = supabaseRouteClient()
    const { data, error } = await supabase
    .from('notes')
    .select('*')

    if(error){
      throw new Error(error)
    }
    return NextResponse.json({data,status: 301})
  } catch (error) {
    return NextResponse.json({error,status: 501})
  }
  

  
  // try {
  //   const formData = await request.formData()
  //   const title = formData.get('title')
  //   const cookieStore = cookies()
  //   const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  //   const userInfo = await supabase.auth.getUser()
  //   if(userInfo.error) {
  //     throw new Error(error)
  //   }
  //   const {user} = userInfo.data
  //   const { data, error } = await supabase
  //     .from('notes')
  //     .insert([
  //       { title,
  //         user_uid: user.id, 
  //         created_at: new Date().toISOString() 
  //       },
  //     ])
  //     .select()
  
  //   if(error){
  //     throw new Error(error)
  //   }
  
  //   return NextResponse.json({status:301,data})
  // } catch (error) {
  //   return NextResponse.json({
  //     error: error.message,
  //     status: 501,
  //   })
  // }

}