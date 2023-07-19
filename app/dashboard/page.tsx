'use client'
import Logo from '@/components/Logo'

export default function Dashboard() {
  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[425px] md:max-w-[360px]">
        <h1 className="sr-only">Login</h1>
        <div className="pb-5 pt-[40px] md:p-[47px] md:pb-7">
          <Logo />
        </div>
        <div className="text-center">/dashboard</div>
      </div>
    </main>
  )
}
