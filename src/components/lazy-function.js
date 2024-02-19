
import { SessionContext } from '@/components/session-context';
import { useContext } from 'react';

export default async function LazyFc(){
  const session = useContext(SessionContext)
  return(
    <div>{session?session.user.email:'Not login'}</div>
  )
  
}