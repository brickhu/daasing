import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'

export default async function NodeList(){
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data:notes, error } = await supabase
    .from('notes')
    .select('*')

  if(error){
    throw new Error(error)
  }

  return (
    <div>{notes&&notes.map(item=><div key={item.id}>{item.title}</div>)}</div>
  )
}