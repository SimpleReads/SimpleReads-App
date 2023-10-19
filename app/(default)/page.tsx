export const metadata = {
  title: 'SimpleReads',
  description: 'An Aphasia AI Reading Support',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'

/**
 * Home Page Layout. 
 * @returns Home page
 */
export default function Home() {
  return (
    <>
    {/** Hero contains the Title, small description and uploaded button components*/}
      <Hero /> 
    </>
  )
}
