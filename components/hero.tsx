'use client'

import Link from 'next/link'

/**
 * A container that houses a few components on the homepage: title, small description of what the website is about, 
 * and a pdf upload button that links to a page where a pdf can be uploaded to.
 * @return a container that holds the homepage title, small description and upload button
 */
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-32 pb-10 md:pt-40 md:pb-16">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h1 mb-4" data-aos="fade-up" style = {{fontSize: '65px'}}> {/* Adds Title */}
          SimpleReads
        </h1>
        <h3 className="h3 mb-8" data-aos="fade-up" style = {{fontSize: '40px'}}> {/* Adds a sub-title below title */}
          An AI Reading Support Tool
        </h3>
        {/* Adds a horizontal line between sub-title and small description */}
        <hr className="bg-purple-600 mb-6" data-aos="fade-up" style={{height: '5px',}}></hr>
        <p className="text-xl text-gray-800 mb-8 max-w-sm mx-auto sm:max-w-none text-center" data-aos="fade-up" data-aos-delay="200"  style = {{fontWeight:'400', fontSize: '25px'}}>
          Offering support for Aphasia patients with research documents, novels, articles, and more.
        </p>
        
        <div data-aos="fade-up" data-aos-delay="400"> {/* Adds a button that links to the read page */}
          <Link className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" href="/read" style={{borderRadius: '20px', fontWeight:'400', fontSize: '25px'}}>
            Click Here to Upload PDF
          </Link>
        </div>
      </div>
    </section>
  )
}
