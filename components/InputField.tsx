import Image from 'next/image'
import { useState, ChangeEvent } from 'react'

export default function InputField({
  type = '',
  id = '',
  label = '',
  placeholder = '',
  onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event
  },
}) {
  const [validationMessage, setValidationMessage] = useState('')

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.target
    if (!input.validity.patternMismatch) {
      input.setCustomValidity('')
    }
    setValidationMessage(input.validationMessage)
  }

  const cssStyle =
    'custom-focus h-[34px] w-auto rounded-md border border-dark-violet ps-3 placeholder:text-base placeholder:text-dark-gray hover:border-hover active:outline-none active:ring-2 active:ring-offset-2 md:h-[44px]'

  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={type} className="text-sm md:text-base">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className={`border ${
          validationMessage ? 'border-red-600 ' + cssStyle : cssStyle
        }`}
        type={type}
        required={true}
        pattern={
          type === 'email' ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$' : undefined
        }
        onBlur={handleBlur}
        onChange={onChange}
      />

      {validationMessage ? (
        <div className="flex flex-row">
          <div className="">
            <Image
              src="/icons/Exclude.svg"
              height={0}
              width={0}
              className="w-full pr-1 pt-1"
              alt=""
            />
          </div>
          <div> {validationMessage}</div>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  )
}
