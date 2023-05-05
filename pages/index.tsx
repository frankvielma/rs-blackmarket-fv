import Image from 'next/image'

const RsLogo = () => (
  <div className="flex justify-center mt-24">
    <Image src="/images/rs_logo.png" height={162} width={162} alt="Rs Logo" />
  </div>
)

const Collaborators = () => (
  <div className="flex justify-center mt-10">
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
    <main className="h-[100vh] bg-black flex flex-col items-center text-white">
      <RsLogo />
      <div className="flex mt-36 text-5xl font-semibold">Black Market</div>
      <div className="mt-20 rounded-xl flex p-9 py-6 justify-center text-5xl bg-pink-600">
        UI
      </div>
      <div className="flex mt-28 font-normal text-2xl">Collaborators</div>
      <div className="mt-16 bg-[url('/images/bg_collaborator.png')] bg-no-repeat w-16 text-black p-4 font-semibold text-2xl">
        FV
      </div>
    </main>
  )
}
