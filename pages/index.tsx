import Image from 'next/image'

const RsLogo = () => (
  <div className="mt-16 sm:mt-28">
    <Image src="/images/rs_logo.png" height={162} width={162} alt="Rs Logo" />
  </div>
)

const Collaborators = () => (
  <div className="mt-10">
    <Image
      src="/images/bg_collaborator.png"
      height={144}
      width={144}
      alt="Rs Logo"
    />
  </div>
)

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center text-white">
      <RsLogo />
      <div className="mt-32 text-5xl font-semibold sm:mt-40">Black Market</div>
      <div className="mt-20 rounded-xl bg-pink-600 p-9 py-6 text-5xl sm:mt-32">
        UI
      </div>
      <div className="mt-28 text-2xl font-normal sm:mt-32">Collaborators</div>
      <div className="mt-14 w-16 bg-[url('/images/bg_collaborator.png')] bg-no-repeat p-4 text-2xl font-semibold text-black">
        FV
      </div>
    </main>
  )
}
