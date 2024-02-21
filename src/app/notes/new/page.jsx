'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'

export default function NewNote() {
  const supabase = createClientComponentClient()
  const [submiting,setSubmiting] = useState(false)
  const [userInfo, setUserInfo] = useState()

  useEffect(()=>async()=>{
    const {data,error} = await supabase.auth.getSession()
    if(error){
      setUserInfo(null)
    }
    if(data){
      console.log(data)
      setUserInfo({user_uid:data.session.user.id})
    }
  },[])
  
  async function handleSumbit(e){
    e.preventDefault();
    if(!userInfo) {
      throw new Error('Please login before adding new note!')
    }
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues)
    
    const { data, error } = await supabase
    .from('notes')
    .insert([
      { title: formValues.title, 
        user_uid: userInfo.user_uid, 
        created_at:new Date().toISOString() 
      },
    ])
    .select()

    if(error){
      alert('添加失败')
    }

    if(data){
      redirect('/notes')
    }
        
  }

  return(
    <div className="mx-20 mt-10">
      <div className="text-3xl mb-10">Add new note</div>
      <form onSubmit={handleSumbit}>
        <div className="my-8"><Input type="text" placeholder="title" name="title" /></div>
        <div className="my-8"><Button type="submit" disabled={submiting}>submit</Button></div>
      </form>
    </div>
  )
}