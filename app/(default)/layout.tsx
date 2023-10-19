'use client'

import { useEffect } from 'react'
import AOS from 'aos' // Import AOS (Animate on Scroll) library
import 'aos/dist/aos.css' // Import AOS CSS
import Footer from '@/components/ui/footer'

/**
 * Default Layout Component
 * @param {object} children - React children elements to render.
 */
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      once: true, // Animation should only trigger once
      disable: 'phone', // Disable animations on phone-sized screens
      duration: 600, // Animation duration in milliseconds
      easing: 'ease-out-sine', // Animation easing function
    })
  })

  return (
    <>
      <main className="grow">
        {children} {/* Render the children elements */}
      </main>
      <Footer /> {/* Render the Footer component */}
    </>
  )
}
