import Logo from '@/components/Logo'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { Dropdown } from 'flowbite-react'

export default function Header() {
  const router = useRouter()

  const LogOut = () => {
    deleteCookie('access_token')
    router.push('/login')
  }

  return (
    <header className="h-14 w-screen bg-black px-4 lg:h-24">
      <div className="mx-auto flex h-14 items-center justify-between px-4 lg:h-24">
        <div>
          <Logo source="bm_logo2" />
        </div>
        <div className="hidden lg:block">
          <input
            type="text"
            placeholder="Search for products"
            className="mr-6 h-10 w-[28.5rem] rounded-md bg-white px-3 py-2 text-black"
          />
        </div>
        <Dropdown
          label="My Account"
          className="custom-focus rounded-md border-none bg-black text-white hover:bg-hover active:bg-hover active:outline-none active:ring-2 active:ring-offset-2 "
        >
          <Dropdown.Item id="logout" onClick={LogOut}>
            Log out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </header>
  )
}
