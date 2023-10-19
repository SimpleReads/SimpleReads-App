import ReadHub from '@/components/readHub';

// Metadata
export const metadata = {
  title: 'SimpleReads',
  description: 'An Aphasia AI Reading Support',
}

/**
 * Homepage Component
 * @return homepage component
 */
export default function Home() {
  return (
    <section className="relative">
      <div className="grid grid-flow-col gap-4">
        <ReadHub/> {/* Render the ReadHub component */}
      </div>
    </section>
  )
}
