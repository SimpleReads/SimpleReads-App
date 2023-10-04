export const metadata = {
  title: 'SimpleReads',
  description: 'An Aphasia AI Reading Support',
}

import Scrollbox from '@/components/scrollbox'
import Sidebar from '@/components/sidebar'

export default function Home() {
  return (
    <section className="relative">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="row-span-2">
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            {/* Side Buttons */}
            <Sidebar />
          </div>
        </div>
        <div className = "row-span-4 col-span-4">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <Scrollbox />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
