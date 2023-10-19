import React from 'react'

/**
 * Creates the footer component that appears on every page of the site. It contains a copyright message
 * @return Footer component
 */
export default function Footer() {
  return (
    <footer className="py-12 md:py-16 flex justify-center items-center">
      <div className="text-gray-400 text-sm"> {/* Adds text  */}
        &copy; SimpleReads.com. All rights (not) reserved.
      </div>
    </footer>
  )
}
