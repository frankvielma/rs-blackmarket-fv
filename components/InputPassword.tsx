import Image from 'next/image'
import { useState } from 'react'

export default function InputPassword({
  name = '',
  label = '',
  placeholder = '',
}) {
  const [isActive, setActive] = useState(true)
  const toggleVisibility = () => {
    setActive(!isActive)
  }

  return (
    <div className="my-4 flex flex-col">
      <label
        htmlFor="password"
        className="px-[34px] text-sm text-slate-950 md:text-base"
      >
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="mx-[34px] h-[34px] w-auto rounded-md border border-slate-950 ps-3 placeholder:text-base placeholder:text-neutral-500 md:h-[44px]"
        type={isActive ? 'password' : 'text'}
      />
      <div
        className="absolute mt-8 w-auto ps-[16.5rem] md:absolute md:mt-10 md:ps-[18.5rem]"
        onClick={toggleVisibility}
      >
        <Image
          className="w-4"
          src={`/images/visibility_${isActive ? 'off' : 'on'}.png`}
          height={32}
          width={32}
          alt=""
        />
      </div>
    </div>
  )
}
