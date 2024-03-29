import Image from 'next/image'
import Link from 'next/link'
import { inter } from '@/components/fonts'

/**
 * Renders the Home component with the UI for the Black Market landing page.
 *
 * @return {JSX.Element} The Home component UI.
 */
export default function Home() {
  return (
    <main
      className={`flex flex-col items-center text-center text-white ${inter.className}`}
    >
      <div className="mt-16">
        <Image
          src="/images/rs_logo.png"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
          alt="Rs Logo"
        />
      </div>
      <div className="mt-20 text-5xl font-semibold sm:text-[6.25rem]">
        Black Market
      </div>
      <div className="mt-20 rounded-xl bg-[#FA2D83] p-9 py-6 text-[3.4rem] sm:text-5xl">
        UI
      </div>
      <Link
        href="/login"
        className="mt-16 hover:text-links hover:underline focus:rounded-lg focus:border-2 focus:border-dashed focus:border-focus focus:px-3 focus:outline-none active:text-active"
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
