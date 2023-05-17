'use client'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import Logo from '@/components/Logo'

export default function SignUp() {
  return (
    <main className="flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-dark-violet md:px-28">
      <div className="h-[496px] max-w-[328px] rounded-lg border-black bg-white px-[34px] md:h-[572px] md:max-w-[360px]">
        <Logo />
        <form>
          <InputField
            type={'email'}
            name={'email'}
            label={'Email'}
            placeholder={'Type your email'}
          />
          <InputField
            type={'text'}
            name={'text'}
            label={'Full Name'}
            placeholder={'Type your full name'}
          />
          <InputPassword
            name={'password'}
            label={'Password'}
            placeholder={'Type your password'}
          />
        </form>
        <div className="btn-disabled mt-4 h-[44px] w-auto rounded-md pt-2 text-center">
          Sign up
        </div>

        <div className="mt-5 text-center">
          By signing up, you accept the{' '}
          <a href="#" className="link-focus link-hover link-active">
            Data Policy
          </a>{' '}
          and the{' '}
          <a href="#" className="link-focus link-hover link-active">
            Cookies Policy.
          </a>
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
