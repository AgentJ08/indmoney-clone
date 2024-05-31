import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

var loggedin = false;

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log(path);

  const isPublicPath = path === '/login' || path === '/signup' || path === '/' || path === '/stocks' || path === '/mutual-funds'

  const token = request.cookies.get('indclone-token')?.value || ''

  if(token!='') loggedin=true;

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
    
}

console.log('loggedin from middleware: ', loggedin)
export const user = loggedin;


export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/dashboard',
    '/stocks',
    '/mutual-funds',
    '/investments/stocks',
    '/investments/mutual-funds'
  ]
}