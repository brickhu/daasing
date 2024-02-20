'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Button from "@/components/button";
export default function About() {
  const supabase = createClientComponentClient()
  const user = {id:"0184973f-5641-4cdb-8c4e-4f89d53cde57"}
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [])

  async function updateProfile({ username, website, avatar_url }) {
    console.log('更新')
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!',error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      {
        loading?
        <div>loading...</div>:
        <div>
          <div>{fullname}</div>
          <div>
          <button onClick={() => updateProfile({ fullname, username, website, avatar_url })}>更新</button>
          </div>
        </div>
      }
      
    </section>
  );
}
