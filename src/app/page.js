import { getSession } from '@/lib/auth'
import dynamic from 'next/dynamic'
import Main from './main'


export default async function Home() {
  return (
    <div>
      <Main></Main>
    </div>
  )
}