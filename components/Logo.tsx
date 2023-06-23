import Image from 'next/image'

/**
 * Renders the Black Market logo as an Image component.
 *
 * @return {JSX.Element} The Black Market logo as an Image component.
 */
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
