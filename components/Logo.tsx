import Image from 'next/image'

export default function Logo() {
  return (
    <div className="pb-5 pt-[40px] md:p-[47px] md:pb-12">
      <Image
        className="m-auto"
        src="/images/bm_logo.png"
        height={173}
        width={173}
        alt="Black Market Logo"
      />
    </div>
  )
}
