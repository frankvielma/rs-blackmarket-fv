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
          className="custom-input custom-focus custom-hover custom-active md:h-[44px]"
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
