export const metadata = {
  title: 'SimpleReads',
  description: 'An Aphasia AI Reading Support',
}

import Scrollbox from '@/components/scrollbox'

export default function Home() {
  const buttons = ["Abstract", "Introduction", "Methods", "Results", "Discussion"];

  return (
    <section className="relative">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div className="row-span-2">
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            {/* Side Buttons */}
            <div className="max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mt-6 ml-2">
                  {buttons.map((label, index) => (
                    <div className="w-full px-3 mb-7">
                      <button className="btn text-gray-900 bg-purple-600 hover:bg-purple-700 w-full">{label}</button>
                    </div>
                  ))}
                </div>
              </form>
            </div>

          </div>
        </div>
        <div className = "row-span-4 col-span-4">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <Scrollbox/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
