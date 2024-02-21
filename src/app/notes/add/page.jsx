'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { supabase } from "@/lib/supabase-clientside"



export default function Add() {
  const [submiting,setSubmiting] = useState(false)
  const [session,setSession] = useState()

  useEffect(()=>async()=>{
    const {data,error} = await supabase.auth.getSession()
    setSession(error?null:data.session)
  },[])



   async function CreateNote({formData}){
    let response = await fetch('/api/note/add', {
      method: 'POST',
      body: formData,
    })
    const result = await response.json()
    return result
   }

  return (
    <div>
      <form action={(formData)=>{
        setSubmiting(true)
        CreateNote({formData}).then(res=>{
          console.log(res)
          setSubmiting(false)
        })
      }}>
        <div className="my-8"><Input type="text" placeholder="title" name="title" /></div>
        {session?
        <div className="my-8"><Button disabled={submiting} type="submit">{submiting?'submiting...':'submit'}</Button></div>:
        <div className="my-8"><Button >登录后添加</Button></div>
        }
        
      </form>
    </div>
    
  )
}