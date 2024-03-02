import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { CustomMiddleware } from './chain'
// import { ensureTrailingSlash } from '../utils'

export const withRedirectsMiddleware = (middleware: CustomMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next()

    return middleware(request, event, response)
  }
}
