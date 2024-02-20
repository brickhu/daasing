export default async function Main({session}) {
  return (
    <div>{session?session.user.email:'user unlogin'}</div>
  )
}