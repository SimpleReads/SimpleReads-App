export const metadata = {
    title: 'Upload - SimpleReads',
    description: 'Upload a PDF to be Simplified',
  }

  import FileDrop from '@/components/fileDrop'
  
  import Link from 'next/link'

  export default function SignUp() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
  
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Upload Page where PDF will be displayed</h1>
            </div>
            <FileDrop/>
          </div>
        </div>
      </section>
    )
  }