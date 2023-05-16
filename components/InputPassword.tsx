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
    <div className="relative my-4">
      <label
        htmlFor="password"
        className="px-[34px] text-sm text-slate-950 md:text-base"
      >
        {label}
      </label>
      <div className="flex flex-col">
        <input
          className="active:outline-double active:outline-4 active:outline-offset-0 active:outline-blue-900 mx-[34px] h-[34px] w-auto rounded-md border border-slate-950 ps-3 placeholder:text-base placeholder:text-neutral-500  hover:border-indigo-700 focus:outline-dashed focus:outline-2 focus:outline-offset-2 focus:outline-blue-700 md:h-[44px]"
          name={name}
          placeholder={placeholder}
          type={isActive ? 'password' : 'text'}
        />
        <div
          className="absolute right-12 pt-2 md:pt-4"
          onClick={toggleVisibility}
        >
          <Image
            className="w-4"
            src={`/icons/visibility_${isActive ? 'off' : 'on'}.svg`}
            height={16}
            width={16}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
