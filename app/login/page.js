'use client'

import React from 'react'
import {FormEvent} from 'react'
import { useRouter } from 'next/navigation'
import { LoginComponent } from '@/components/LoginComponent'


// import { LoginComponent } from '../../components/LoginComponent'


export default function Login() {
    const router = useRouter()

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        
        if (response.ok) {
        router.push('/dashboard')
     }
        if (!response.ok){
        alert('Falha no login')
    }
  
    }
  return (
    // <form onSubmit={handleSubmit}>
    //     <input type="email" name="email" placeholder="Email" required />
    //     <input type="password" name="password" placeholder="Password" required />
    //     <button type="submit">Login</button>
    // </form>

    <LoginComponent />
  )
}

