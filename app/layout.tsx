import '@/styles/globals.css'
import { dmsans } from '@/components/fonts'

export const metadata = {
  title: 'RS Blackmarket',
  description: 'The e-commerce platform for Rootstrap employees',
}

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
