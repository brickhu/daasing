// import AuthForm from "@/components/auth-form"
// import Login from "@/components/auth"
"use client"
import { SessionProvider} from '@/components/session-context';
import dynamic from 'next/dynamic'

const Main = dynamic(()=> import('@/components/lazy-function'),{ssr:false,loading:()=><p>loading Main</p>})


export default function Home() {
  return (
    <SessionProvider>
      <Main />
    </SessionProvider>
  )
}