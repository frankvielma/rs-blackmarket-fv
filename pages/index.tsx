import Image from 'next/image'

const RsLogo = () => (
  <div className="mt-24 flex justify-center">
    <Image src="/images/rs_logo.png" height={162} width={162} alt="Rs Logo" />
  </div>
)

const Collaborators = () => (
  <div className="mt-10 flex justify-center">
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
    <main className="flex h-[100vh] flex-col items-center bg-black text-white">
      <RsLogo />
      <div className="mt-36 flex text-5xl font-semibold">Black Market</div>
      <div className="mt-20 flex justify-center rounded-xl bg-pink-600 p-9 py-6 text-5xl">
        UI
      </div>
      <div className="mt-28 flex text-2xl font-normal">Collaborators</div>
      <div className="mt-16 w-16 bg-[url('/images/bg_collaborator.png')] bg-no-repeat p-4 text-2xl font-semibold text-black">
        FV
      </div>
    </main>
  )
}
