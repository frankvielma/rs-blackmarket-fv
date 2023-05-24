import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/images/bm_logo.png"
      height={0}
      width={0}
      sizes="100vw"
      className="w-full h-auto"
      alt="Black Market Logo"
    />
  )
}
