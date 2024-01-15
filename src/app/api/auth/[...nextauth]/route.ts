import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              identifier: credentials?.email,
              password: credentials?.password
            })
          }
        )

        const data = await response.json()

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],

  pages: {
    signIn: "/signin"
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token.user as any
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
