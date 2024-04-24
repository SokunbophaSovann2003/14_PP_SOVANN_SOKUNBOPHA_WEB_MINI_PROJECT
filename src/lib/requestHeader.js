// import React from 'react'
import { authOption } from "@/app/api/auth/[...nextauth]/route"

import { getServerSession } from "next-auth"

export const requestHeader = async() => {

  const session = await getServerSession(authOption)
  const header = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${session.user.token}`
  }
  return header;
}
