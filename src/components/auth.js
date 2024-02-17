'use client'

import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation'


const userInfo = {
  email: 'brickhu@gmail.com',
  password: 'hf1985HF'
}

export default function Login({ session}){
  session = Session || null
  const supabase = createClientComponentClient()
  const router = useRouter()

  const test = async () => {
    console.log(`${location.origin}/auth/callback`)
  }
  
  const handleEmailSignup = async () => {
    let { data, error } = await supabase.auth.signUp({
      email: userInfo.email,
      password: userInfo.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    })

    if(error) {
      console.log(error)
    }

    if(data) {
      console.log(data)
      router.refresh()
    }
  }

  const handleEmailLogin = async () => {
		const { data,error } = await supabase.auth.signInWithPassword({
			email: userInfo.email,
			password: userInfo.password
		});

		if (error) {
			console.log({ error });
		}

    if(data) {
      console.log(data)
      session = data.session
    }
	};

  const handleGitHubLogin = async () => {
		const { data,error } = await supabase.auth.signInWithOAuth({
			provider: 'github'
		});

		if (error) {
			console.log({ error });
		}

    if (data) {
      console.log(data)
    }
 
	};

  const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log({ error });
		}
	};

  return session ? (
		<button onClick={handleLogout}>Logout</button>
	) : (
		<>
      <button onClick={handleEmailSignup}>注册</button><br/>
			<button onClick={handleEmailLogin}>Email Login</button><br/>
			<button onClick={handleGitHubLogin}>GitHub Login</button><br/>
      <button onClick={test}> test </button>
		</>
	);

}