import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/' || path === '/stocks' || path === '/mutual-funds'

  const token = request.cookies.get('indclone-token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
    
}

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