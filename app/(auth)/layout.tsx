/**
 * Auth Layout Component
 * @param {object} children - React children elements to render.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">
      {children} {/* Render the children elements */}
    </main>
  )
}
