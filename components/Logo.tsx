import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      className="m-auto"
      src="/images/bm_logo.png"
      height={173}
      width={173}
      alt="Black Market Logo"
    />
  )
}
