import Image from 'next/image'

const RsLogo = () => (
  <Image src="/images/rs_logo.png" height={162} width={162} alt="Rs Logo" />
)

const Collaborators = () => (
  <Image
    src="/images/bg_collaborator.png"
    height={144}
    width={144}
    alt="Rs Logo"
  />
)

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center font-sans text-white">
      <div className="mt-16">
        <RsLogo />
      </div>
      <div className="mt-32 text-5xl font-semibold">Black Market</div>
      <div className="mt-20 rounded-xl bg-pink-600 p-9 py-6 text-5xl">UI</div>
      <div className="mt-28 text-2xl font-normal">Collaborators</div>
      <div className="mt-14 w-16 bg-[url('/images/bg_collaborator.png')] bg-no-repeat p-4 text-2xl font-semibold text-black">
        FV
      </div>
    </main>
  )
}
