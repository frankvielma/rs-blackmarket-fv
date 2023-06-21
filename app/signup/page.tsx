'use client'
import Link from 'next/link'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useState } from 'react'

export default function SignUp() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValidEmail, setIsValid] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false)

  const validForm =
    password === confirmPassword &&
    isValidPassword == true &&
    isValidConfirmPassword == true &&
    isValidEmail == true

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsValidPassword(event.target.checkValidity())
  }

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value)
    setIsValidConfirmPassword(event.target.checkValidity())
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(event.target.checkValidity())
  }

  const handleSubmit = (event: React.FormEvent) => {
    console.log(event.target)
    //event.preventDefault()
  }

  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[496px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[572px] md:max-w-[360px]">
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
            id={'password1'}
            label={'Password'}
            placeholder={'Type your password'}
            onChange={handlePasswordChange}
          />
          <InputPassword
            id={'password2'}
            label={'Confirm password'}
            placeholder={'Confirm your password'}
            onChange={handleConfirmPasswordChange}
          />

          <div className="flex flex-col">
            <Button
              variant="primary"
              option={!validForm}
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </div>
        </form>

        <div className="mt-5 text-center">
          By signing up, you accept the{' '}
          <Link
            href="/data_policy"
            className="link-focus link-hover link-active"
          >
            Data Policy
          </Link>{' '}
          and the{' '}
          <Link
            href="/cookies_policy"
            className="link-focus link-hover link-active"
          >
            Cookies Policy.
          </Link>
        </div>
        <div className="mt-5 text-center">
          Already have an account?{' '}
          <a href="/login" className="link-focus link-hover link-active">
            Log in
          </a>
        </div>
      </div>
    </main>
  )
}
