import { chain } from './middlewares/chain'
import { withRedirectsMiddleware } from './middlewares/redirects'

export default chain([withRedirectsMiddleware])

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|revalidation|_next|favicon.ico|k16|konkav|.*\\..*).*)']
}
