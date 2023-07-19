import Image from 'next/image'

/**
 * Renders the logo header component.
 *
 * @return {JSX.Element} The logo header component.
 */
export default function LogoHeader() {
  return (
    <Image
      src="/images/logo_header.png"
      height={0}
      width={0}
      sizes="100vw"
      className="h-auto w-full"
      alt="Black Market"
    />
  )
}
