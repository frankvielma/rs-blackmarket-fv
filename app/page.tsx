import Image from 'next/image'
import Link from 'next/link'
import { inter } from '@/components/fonts'

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center text-center text-white ${inter.className}`}
    >
      <div className="mt-16">
        <Image
          src="/images/rs_logo.png"
          height={162}
          width={162}
          alt="Rs Logo"
        />
      </div>
      <div className="mt-20 text-5xl font-semibold sm:text-[6.25rem]">
        Black Market
      </div>
      <div className="mt-20 rounded-xl bg-pink-600 p-9 py-6 text-[3.4rem] sm:text-5xl">
        UI
      </div>
      <Link
        href="/login"
        className="mt-16 hover:text-blue-600 hover:underline focus:rounded-lg focus:border-2 focus:border-dashed focus:border-blue-500 focus:px-3 focus:outline-none active:text-blue-700"
      >
        Login / SignUp
      </Link>
      <div className="mt-20 text-2xl">Collaborators</div>
      <div className="mt-10 w-16 bg-[url('/images/bg_collaborator.png')] bg-no-repeat p-4 text-2xl font-semibold text-black">
        FV
      </div>
    </main>
  )
}
