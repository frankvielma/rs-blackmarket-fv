import '@/styles/globals.css'
import { dmsans } from '@/components/fonts'

export const metadata = {
  title: 'RS Blackmarket',
  description: 'The e-commerce platform for Rootstrap employees',
}

/**
 * Renders a root layout component with the given children.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child nodes to render.
 * @return {JSX.Element} The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  )
}
