import Image from 'next/image'
import InputField from '@/components/InputField'
import InputPassword from '@/components/InputPassword'
import { dmsans } from '@/components/fonts'

export default function Login() {
  return (
    <main
      className={`flex h-[100vh] flex-col bg-[url('/images/bm_wallpaper.jpg')] bg-cover bg-center bg-no-repeat px-6 py-16 text-base text-slate-950 sm:px-28 ${dmsans.className}`}
    >
      <div className="h-[366px] max-w-[328px] rounded-lg border-black bg-white">
        <div className="py-[40px] pb-4">
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
              className="mx-[34px] h-[44px] w-auto rounded-md border border-slate-950 bg-slate-950 font-bold text-white"
            />
          </div>
        </form>
        <div className="py-4 text-center">
          <a
            href="/forgot-password"
            className="mt-10 text-blue-600 hover:underline focus:rounded-lg focus:border-2 focus:border-dashed focus:border-blue-500 focus:px-3 focus:outline-none active:text-blue-700"
          >
            I forgot my password
          </a>
        </div>
      </div>
      <div className="mt-4 h-[121px] max-w-[328px] rounded-lg border-black bg-white">
        <div className="mt-5 text-center">Don&apos;t have an account?</div>

        <div className="mx-[34px] mt-4 h-[44px] w-auto rounded-md border border-slate-950 bg-white p-2 text-center font-bold text-black ">
          <a
            href="/sign-up"
            className="focus:rounded-lg focus:border-2 focus:border-dashed focus:border-blue-500 focus:px-3 focus:outline-none active:text-blue-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </main>
  )
}
