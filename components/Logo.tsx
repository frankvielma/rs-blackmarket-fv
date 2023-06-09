import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/images/bm_logo.png"
      height={0}
      width={0}
      sizes="100vw"
      className="h-auto w-full"
      alt="Black Market Logo"
    />
  )
}
