import Image from 'next/image'

interface LogoProps {
  source: string
}

/**
 * Renders the Black Market logo as an Image component.
 *
 * @return {JSX.Element} The Black Market logo as an Image component.
 */
export default function Logo({ source }: LogoProps) {
  return (
    <Image
      src={`/images/${source}.png`}
      height={0}
      width={0}
      sizes="100vw"
      className="h-auto w-full"
      alt="Black Market Logo"
    />
  )
}
