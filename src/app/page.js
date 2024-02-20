import { getSession } from '@/lib/auth'
import dynamic from 'next/dynamic'
import Main from './main'


export default async function Home() {
  const {session} = await getSession()

  return (
    <div>
      <Main session={session}></Main>
    </div>
  )
}