
'use client'
import {Button} from "@/components/ui/button"
import { useCallback, useEffect, useState } from "react"

import { AuthContext } from '@/components/auth-provider' 
import {useContext} from "react"


export default function NotesList(){
  const context = useContext(AuthContext)
  console.log('context: ', context);
  const [notes,setNotes] = useState()
  const [loading,setLoading] = useState(true)

  const fetchNotes = useCallback(async()=>{
    setLoading(true)
    const response = await fetch('/api/note/get',{
      method:"GET"
    })
    const {data,error} = await response.json()
    if(error){
      console.log(error)
      setLoading(false)
    }
    if(data){
      console.log('data: ', data);
      setNotes(data)
      setLoading(false)
    }
  },[])

  useEffect(()=>{
    fetchNotes()
  },[fetchNotes])


  return(
    <div>
      {loading?<div>Loading notes...</div>:
        <div>
          {notes?.map(item=><div key={item.id}>{item.title}</div>)}
        </div>
      }
    </div>
  )
}