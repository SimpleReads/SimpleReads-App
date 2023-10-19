import Link from 'next/link'

import HomeIcon from '@mui/icons-material/Home';

/**
 * Creates the header component that appears on every page of the site. It contains the site logo and a home button that both 
 * return back to the root page (home page)
 * @returns Header component with logo and home
 */
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <> {/* Home button */}
            <div className="btn-sm text-gray-900 bg-purple-600 hover:bg-purple-500" style={{ borderRadius: '20px', fontWeight:'400', fontSize: '25px', display: 'flex', alignItems: 'center' }}>
              <Link href="/" > 
                <HomeIcon style={{ fontSize: '35px'}} />
                Home 
              </Link>
            </div>
          </>

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img src="/images/simple reads.jpg" width={230} height={150}/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
