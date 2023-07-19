'use client'
import Link from 'next/link'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

/**
 * Renders the login form and manages its state.
 *
 * @return {JSX.Element} The login form.
 */
export default function Login() {
  const [isValidEmail, setIsValid] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const validForm = isValidPassword == true && isValidEmail == true
  const [responseData, setResponseData] = useState({})
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  /**
   * Handles the change event for the email input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event object.
   * @return {void} This function does not return anything.
   */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setIsValid(event.target.checkValidity())
  }

  /**
   * Handles the change in the password input field by updating the password state
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - the event triggered by a change in the password input field
   * @return {void} This function does not return anything
   */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsValidPassword(event.target.checkValidity())
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const data = {
      email: email,
      password: password,
    }

    fetch('https://black-market-juan-rs.herokuapp.com/dj-rest-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data['access_token'] !== undefined) {
          setCookie('access_token', data.access_token)
          router.push('/dashboard')
        } else {
          if (
            data['non_field_errors'] ==
            'Unable to log in with provided credentials.'
          ) {
            data['non_field_errors'] = 'Your email or password are incorrect.'
          }
          setResponseData(data)
        }
      })
      .catch((error) => console.error('Error: ', error))
  }

  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[425px] md:max-w-[360px]">
        <h1 className="sr-only">Login</h1>
        <div className="pb-5 pt-[40px] md:p-[47px] md:pb-7">
        <Logo source="bm_logo" />
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
        <div className="pt-2 text-red-700 md:pt-4">
          {Object.values(responseData)}
        </div>
        <div className="pt-2 text-center md:pt-4">
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
