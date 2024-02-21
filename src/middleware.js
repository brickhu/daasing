import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { createContext } from 'react'

export async function middleware(req) {
  
  const res = NextResponse.next()
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  const {data:{session},error} = await supabase.auth.getSession()
  if(!session) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('from',req.url)
    return NextResponse.redirect(redirectUrl)
  }
  return res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    // '/((?!_next/static|_next/image|favicon.ico|login).*)'
    '/dashboard/:path',
    '/account/:path',
    '/notes/new/:path'
  ],
}