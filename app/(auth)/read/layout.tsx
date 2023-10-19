'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '@/components/ui/footer'

/**
 * Default layour Component - for the read pages
 * @return homepage component
 */
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init({
      once: true, // Initialize animations only once
      disable: 'phone', // Disable animations on mobile devices
      duration: 600, // Animation duration (in milliseconds)
      easing: 'ease-out-sine', // Animation easing function
    })
  })

  return (
    <>
      <main className="grow">
        {children} {/* Render the child components */}
      </main>
      <Footer /> {/* Render the Footer component at the bottom of the page */}
    </>
  )
}
