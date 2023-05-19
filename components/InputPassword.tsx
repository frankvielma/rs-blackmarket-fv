import Image from 'next/image'
import { useState } from 'react'

export default function InputPassword({
  id = '',
  label = '',
  placeholder = '',
}) {
  const [isActive, setActive] = useState(true)
  const toggleVisibility = () => {
    setActive(!isActive)
  }

  return (
    <div className="relative my-4">
      <label htmlFor="password" className="text-sm md:text-base">
        {label}
      </label>
      <div className="flex flex-col">
        <input
          className="custom-focus h-[34px] w-auto rounded-md border border-dark-violet ps-3 placeholder:text-base placeholder:text-dark-gray hover:border-hover active:outline-none active:ring-2 active:ring-offset-2 md:h-[44px]"
          id={id}
          placeholder={placeholder}
          type={isActive ? 'password' : 'text'}
        />
        <div
          className="absolute right-4 pt-2 md:pt-4"
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
