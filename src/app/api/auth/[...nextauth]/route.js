import { loginService } from "@/service/auth.service";
import { workspaceService } from "@/service/workspace.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
export const authOption = {
  providers: [
    //login by email password
    CredentialsProvider({
      async authorize(userInfo) {
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        // call login services
        const login = await loginService(newUserInfo);
        return login;
      },
    }),
  ],
  // callback function
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
};

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
