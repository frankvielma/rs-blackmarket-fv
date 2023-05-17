import Link from 'next/link'

export default function Button({ name = '', link = '' }) {
  return (
    <Link href={link} className="focus:outline-none">
      <div className="custom-focus custom-active custom-hover btn-hover mx-[34px] mt-4 h-[44px] w-auto rounded-md border border-dark-violet bg-white p-2 text-center font-bold text-black active:bg-hover">
        <button className="focus:outline-none">{name}</button>
      </div>
    </Link>
  )
}
