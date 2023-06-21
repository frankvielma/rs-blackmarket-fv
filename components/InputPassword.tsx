import Image from 'next/image'
import { useState, ChangeEvent } from 'react'

/**
 * Renders a password input field with a label and validation message.
 *
 * @param {string} id - The ID of the input element.
 * @param {string} label - The label text for the input element.
 * @param {string} placeholder - The placeholder text for the input element.
 * @param {function} onChange - The callback function to handle input change.
 * @return {JSX.Element} The password input field with label and validation message.
 */
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
    <div className="relative my-4">
      <label htmlFor="password" className="text-sm md:text-base">
        {label}
      </label>
      <div className="flex flex-col">
        <input
          className={`border ${
            validationMessage ? 'border-red-600 ' + cssStyle : cssStyle
          }`}
          id={id}
          placeholder={placeholder}
          type={isActive ? 'password' : 'text'}
          onChange={onChange}
          pattern=".{8,}"
          required={true}
          onBlur={handleBlur}
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
