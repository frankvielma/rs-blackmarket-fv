'use client'
import Link from 'next/link'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Renders a sign up form with input fields for email, password and confirm password,
 * and a submit button. Validates the form input and sends a POST request to register a new user.
 *
 * @return {JSX.Element} A JSX element with the sign up form.
 */
export default function SignUp() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValid] = useState(true)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false)
  const [responseData, setResponseData] = useState({})
  const router = useRouter()

  const validForm =
    password === confirmPassword &&
    isValidPassword == true &&
    isValidConfirmPassword == true &&
    isValidEmail == true

  /**
   * Updates the password state when user types in the input field and
   * updates the validation state based on the input's validity.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event object from the input field
   * @return {void} This function does not return anything
   */
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsValidPassword(event.target.checkValidity())
  }

  /**
   * Updates the confirm password state and its validity based on the given input change event.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event of the input element.
   */
  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value)
    setIsValidConfirmPassword(event.target.checkValidity())
  }

  /**
   * Updates the isValid state based on the validity of the email input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setIsValid(event.target.checkValidity())
  }

  /**
   * Handles the submission of a form that contains user registration data.
   *
   * @param {React.FormEvent} event - The event that triggered the form submission.
   * @return {void} This function does not return anything.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const data = {
      email: email,
      password1: password,
      password2: confirmPassword,
    }

    fetch(
      'https://black-market-juan-rs.herokuapp.com/dj-rest-auth/registration/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (Object.values(data)[0] === 'Verification e-mail sent.') {
          setTimeout(() => {
            router.push('/login')
          }, 2000)
        }
        setResponseData(data)
      })
      .catch((error) => console.error('Error: ', error))
  }

  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[496px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[572px] md:max-w-[360px]">
        <h1 className="sr-only">Sign up</h1>
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
          <span className="text-red-700">{Object.values(responseData)}</span>
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
