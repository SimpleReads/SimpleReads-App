'use client'

import Link from 'next/link'
import { styled } from '@mui/material/styles';

/**
 * A cointainter that houses a few components on the homepage: title, smnall dscription of what the website is about, 
 * and a pdf upload butto that links to a page where a pdf can be uploaded to.
 * @returns a container that holds the homepage title, small description and upload button
 */
export default function Hero() {

  // Style for the upload button
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-6xl" data-aos="fade-up"> {/* Title Text */}
              SimpleReads
            </h1>
            <h3 className="h3 mb-12" data-aos="fade-up"> {/* Sub title text */}
              An AI Reading Support Tool</h3>
            <hr className="h-px my-8 mb-12 border-0 dark:bg-purple-700"></hr>
            <p className="text-xl text-gray-800 mb-8" data-aos="fade-up" data-aos-delay="200"> {/* Small Description */}
              Offering support for Aphasia patients with research documents, novels, articles, and more.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400"> {/* Button that links to /read page */}
                <Link className="btn text-gray-800 bg-purple-600 hover:bg-purple-500 w-full mb-4 sm:w-auto sm:mb-0" href="/read">
                  Click Here to Upload PDF
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
