'use client';
import React from 'react';
import { signOut } from 'next-auth/react';
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <Button onClick={handleSignOut}>
      Logout
    </Button>
  );
}