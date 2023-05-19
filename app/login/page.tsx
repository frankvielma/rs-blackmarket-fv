'use client'
import Link from 'next/link'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default function Login() {
  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[425px] md:max-w-[360px]">
        <div className="pb-5 pt-[40px] md:p-[47px] md:pb-7">
          <Logo />
        </div>

        <form>
          <InputField
            type={'email'}
            id={'email'}
            label={'Email'}
            placeholder={'Type your email'}
          />
          <InputPassword
            id={'password'}
            label={'Password'}
            placeholder={'Type your password'}
          />
          <div className="flex flex-col">
            <Button type="submit" variant="primary" option="default">
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
            <Button variant="outline" option="default">
              Sign up
            </Button>
          </div>
        </Link>
      </div>
    </main>
  )
}
