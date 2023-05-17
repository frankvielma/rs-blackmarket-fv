'use client'

import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

export default function Login() {
  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[425px] md:max-w-[360px]">
        <Logo />
        <form>
          <InputField
            type={'email'}
            name={'email'}
            label={'Email'}
            placeholder={'Type your email'}
          />
          <InputPassword
            name={'password'}
            label={'Password'}
            placeholder={'Type your password'}
          />
          <div className="flex flex-col">
            <input
              type="submit"
              value="Log in"
              className="custom-focus custom-active btn-hover mx-[34px] h-[44px] w-auto rounded-md border border-dark-violet bg-dark-violet font-bold text-white"
            />
          </div>
        </form>
        <div className="pt-4 text-center md:pt-9">
          <a
            href="/forgot-password"
            className="link-focus link-hover link-active mt-10"
          >
            I forgot my password.
          </a>
        </div>
      </div>
      <div className="mt-4 h-[121px] max-w-[328px] rounded-lg border-black bg-white md:h-[130px] md:max-w-[360px]">
        <div className="mt-5 text-center">Don&apos;t have an account?</div>
        <Button name={'Sign Up'} link={'/signup'} />
      </div>
    </main>
  )
}
