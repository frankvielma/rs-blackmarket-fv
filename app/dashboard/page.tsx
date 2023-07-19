'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Dashboard() {
  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: '#E0E0E0', height: 'calc(100vh - 100px)' }}
      />
      <Footer />
    </>
  )
}
