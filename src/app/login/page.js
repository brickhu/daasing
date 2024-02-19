export default function Login(req) {
  console.log(req)
  const {searchParams:{from}} = req
  return (
    <div>
      <form action={"/auth/login?from="+from} method="post">
        <label htmlFor="email">Email</label>
        <input name="email" /> 
        <hr/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <hr/>
        <button>登录</button>
        <hr/>
        <button formAction="/auth/signup">注册</button>
        <hr/>
        <button formAction="/auth/logout">退出</button>
      </form>
    </div>
  )
}

// 'use client'

// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export default function Login() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const router = useRouter()
//   const supabase = createClientComponentClient()

//   const handleSignUp = async () => {
//     await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         emailRedirectTo: `${location.origin}/auth/callback`,
//       },
//     })
//     router.refresh()
//   }

//   const handleSignIn = async () => {
//     await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
//     router.refresh()
//   }

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     router.refresh()
//   }

//   return (
//     <>
//       <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
//       <input
//         type="password"
//         name="password"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//       />
//       <button onClick={handleSignUp}>Sign up</button>
//       <button onClick={handleSignIn}>Sign in</button>
//       <button onClick={handleSignOut}>Sign out</button>
//     </>
//   )
// }