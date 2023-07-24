import { Dropdown } from 'flowbite-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export default function DropdownCustom() {
  const router = useRouter()

  const LogOut = () => {
    deleteCookie('access_token')
    router.push('/login')
  }

  return (
    <div className="custom-focus space-x-2 rounded-md border-none bg-black text-white hover:bg-hover active:bg-hover active:outline-none active:ring-2 active:ring-offset-2">
      <Dropdown label="My Account" size="lg">
        <Dropdown.Divider />
        <Dropdown.Item
          id="logout"
          onClick={LogOut}
          className="custom-focus space-x-2 rounded-md border-none bg-black px-4 text-white hover:bg-hover active:bg-hover active:outline-none active:ring-2 active:ring-offset-2"
        >
          Log out
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
