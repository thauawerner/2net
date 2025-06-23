'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ColorDemo } from '@/components/ColorDemo'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page on app start
    router.push('/login')
  }, [router])

  return (
    <ColorDemo />
  )
}
