
'use client'
import {Button} from "@/components/ui/button"
import { useEffect, useState } from "react"





export default function Notes(){

  const [notes,setNotes] = useState()
  const [loading,setLoading] = useState(true)

  useEffect(() => async () => {
    const response = await fetch('/api/note/get',{
      method:"GET"
    })
    const {data,error} = await response.json()
    if(error){
      console.log(error)
    }
    if(data){
      console.log('data: ', data);
      setNotes(data)
    }
    setLoading(false)
  },[])

  async function fetchNotes({cache}){
    const response = await fetch('/api/note/get',{
      method:"GET"
    })
    const {data,error} = await response.json()
    if(error){
      console.log(error)
    }
    if(data){
      console.log('data: ', data);
      setNotes(data)
    }

    setLoading(false)
  }
        
  return(
    <div>
      <Button onClick={()=>fetchNotes({})}>add new note</Button>
      {loading?<div>Loading notes...</div>:
        <div>
          {notes.map(item=><div key={item.id}>{item.title}</div>)}
        </div>
      }
    </div>
  )
}