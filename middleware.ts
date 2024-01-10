// import { getToken } from "next-auth/jwt"
// import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

// export default withAuth(
//   async function middleware(req) {
//     const token = await getToken({ req })
//     const isAuth = !!token
//     const isAuthPage = req.nextUrl.pathname.startsWith("/login")

//     // Redirect auth pages (/login) to dashboard when logged in
//     // if (isAuthPage) {
//     //   if (isAuth) {
//     //     return NextResponse.redirect(new URL("/", req.url))
//     //   }

//     //   return null
//     // }

//     if (!isAuth) {
//       return NextResponse.redirect(
//         new URL(`/`, req.url)
//       );
//     } else {
//       // Redirect / to /dashboard when logged in
//       if (req.nextUrl.pathname == '/') {
//         return NextResponse.redirect(new URL('/dashboard', req.url));
//       }
//     }
//   },
//   {
//     callbacks: {
//       async authorized() {
//         return true
//       },
//     },
//   }
// )

// export const config = {
//   matcher: [
//     '/',
//     '/dashboard',
//     '/login'
//   ],
// }
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*"] }