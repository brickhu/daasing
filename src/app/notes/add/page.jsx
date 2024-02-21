'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormStatus } from 'react-dom'



export default function Add() {
  const { pending,data, method, action } = useFormStatus()

  return (
    <div>
      <form action={async(formData)=>{
        console.log(pending)
        let response = await fetch('/api/note/add', {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        console.log(data,pending)
      }}>
        <div className="my-8"><Input type="text" placeholder="title" name="title" /></div>
        <div className="my-8"><Button >submit</Button></div>
      </form>
    
    </div>
    
  )
}