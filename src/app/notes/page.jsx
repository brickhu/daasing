
import Button from "@/components/button"
import dynamic from "next/dynamic"

const NodeList = dynamic(() => import('./note-list'), {
  loading: () => <p>Loading notes...</p>,
})

export default function Notes(){
        
  return(
    <div>
      <Button>add new note</Button>
      <NodeList/>
    </div>
  )
}