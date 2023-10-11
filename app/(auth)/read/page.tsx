export const metadata = {
  title: 'SimpleReads',
  description: 'An Aphasia AI Reading Support',
}

import Scrollbox from '@/components/ScrollBox2'
import ReadHub from '@/components/readHub';

export default function Home() {
    const buttons = ["Footnotes", "Commentary", "Commentary", "References", "BioMedcentral"];
    
    
  return (
    <section className="relative">
      <div className="grid grid-flow-col gap-4">
        <ReadHub/>
      </div>
    </section>
  )
}
