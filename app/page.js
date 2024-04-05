'use client'
import React from 'react'
import {signIn} from 'next-auth/react'
import { Button } from "@/components/ui/button"
import LoginComponent  from '@/components/LoginComponent'


export default function Home() {

  const handleSignIn = async () => {
    await signIn("github", {callbackUrl: "http://localhost:3000/orders"})
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2> Orders - book </h2>
      <LoginComponent />
      <Button onClick={handleSignIn}>
        Sign in with GitHub
      </Button>
    </main>
  );
}