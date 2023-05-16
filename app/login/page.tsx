'use client'
import Image from 'next/image'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import { dmsans } from '@/components/fonts'

export default function Login() {
  return (
    <main
      className={`flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-slate-950 md:px-28 ${dmsans.className}`}
    >
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white md:h-[425px] md:max-w-[360px]">
        <div className="pb-9 pt-[40px] md:p-[47px] md:pb-12">
          <Image
            className="m-auto"
            src="/images/bm_logo.png"
            height={173}
            width={173}
            alt="Black Market Logo"
          />
        </div>
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
              className="custom-focus custom-active mx-[34px] h-[44px] w-auto rounded-md border border-slate-950 bg-slate-950 font-bold text-white"
            />
          </div>
        </form>
        <div className="pt-4 text-center md:pt-9">
          <a
            href="/forgot-password"
            className="custom-focus mt-10 font-bold text-blue-600 hover:underline active:text-blue-900 "
          >
            I forgot my password.
          </a>
        </div>
      </div>
      <div className="mt-4 h-[121px] max-w-[328px] rounded-lg border-black bg-white md:h-[130px] md:max-w-[360px]">
        <div className="mt-5 text-center">Don&apos;t have an account?</div>

        <div className="custom-focus custom-active mx-[34px] mt-4 h-[44px] w-auto rounded-md border border-slate-950 bg-white p-2 text-center font-bold text-black ">
          <button className="focus:outline-none">Sign up</button>
        </div>
      </div>
    </main>
  )
}
