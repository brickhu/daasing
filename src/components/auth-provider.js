'use client';

import { createContext, useEffect,useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext();

const AuthProvider = ({ accessToken, children }) => {
  const [user,setUser] = useState()
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener }
    } = supabase.auth.onAuthStateChange((event, session) => {
      
      if (session?.access_token !== accessToken) {
        router.refresh();
      }else{
        setUser(session?.user)
      }
    });


    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return (
    <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
  )
  
  
};

export default AuthProvider;