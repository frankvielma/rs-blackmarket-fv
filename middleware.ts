import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import jwt_decode from 'jwt-decode'

export function middleware(request: NextRequest) {
  if (request.cookies.has('access_token')) {
    try {
      const token: string = request.cookies.get('access_token')?.value || ''
      jwt_decode(token)
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/dashboard',
}
