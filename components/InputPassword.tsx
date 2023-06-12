import Image from 'next/image'
import { useState, ChangeEvent } from 'react'

export default function InputPassword({
  id = '',
  label = '',
  placeholder = '',
  onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event
  },
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
          onChange={onChange}
          pattern=".{8,}"
          required={true}
        />

        <button
          className="custom-focus absolute right-4 mt-2 md:mt-4"
          type="button"
          onClick={toggleVisibility}
        >
          <Image
            src={`/icons/visibility_${isActive ? 'off' : 'on'}.svg`}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-4"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}
