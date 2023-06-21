'use client'
import Link from 'next/link'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useState } from 'react'

/**
 * Renders the login form and manages its state.
 *
 * @return {JSX.Element} The login form.
 */
export default function Login() {
  const [isValidEmail, setIsValid] = useState(true)
  const [isValidPassword, setPassword] = useState(false)
  const validForm = isValidPassword == true && isValidEmail == true

  /**
 * Handles the change event for the email input field.
 *
 * @param {React.ChangeEvent<HTMLInputElement>} event - The event object.
 * @return {void} This function does not return anything.
 */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(event.target.checkValidity())
  }

/**
 * Handles the change in the password input field by updating the password state
 *
 * @param {React.ChangeEvent<HTMLInputElement>} event - the event triggered by a change in the password input field
 * @return {void} This function does not return anything
 */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.checkValidity())
  }

  const handleSubmit = () => {
    //event.preventDefault()
  }

  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[425px] md:max-w-[360px]">
        <div className="pb-5 pt-[40px] md:p-[47px] md:pb-7">
          <Logo />
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            type={'email'}
            id={'email'}
            label={'Email'}
            placeholder={'Type your email'}
            onChange={handleEmailChange}
          />
          <InputPassword
            id={'password'}
            label={'Password'}
            placeholder={'Type your password'}
            onChange={handlePasswordChange}
          />
          <div className="flex flex-col">
            <Button type="submit" variant="primary" option={!validForm}>
              Log in
            </Button>
          </div>
        </form>
        <div className="pt-4 text-center md:pt-8">
          <Link
            href="/forgot-password"
            className="link-focus link-hover link-active mt-10"
          >
            I forgot my password.
          </Link>
        </div>
      </div>
      <div className="mt-4 h-[121px] max-w-[328px] rounded-lg border-black bg-white md:h-[130px] md:max-w-[360px]">
        <div className="m-4 text-center">Don&apos;t have an account?</div>
        <Link href="/signup" tabIndex={-1}>
          <div className="mx-[34px] flex flex-col">
            <Button variant="outline" option={false}>
              Sign up
            </Button>
          </div>
        </Link>
      </div>
    </main>
  )
}
