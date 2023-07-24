import LogoHeader from '@/components/LogoHeader'
import Link from 'next/link'
import Cart from '@/components/Cart'
import Button, { Variants, Sizes } from '@/components/Button'
import Dropdown from '@/components/DropdownCustom'

export default function Header() {
  return (
    <header className="flex h-14 flex-row items-center justify-center space-x-40 bg-black lg:h-24">
      <div className="custom-focus rounded-md border-none bg-black text-white">
        <Link href="/dashboard">
          <LogoHeader />
        </Link>
      </div>
      <div className="custom-focus rounded-md border-none bg-black text-black hover:bg-hover active:bg-hover active:outline-none active:ring-2 active:ring-offset-2">
        <input
          type="text"
          placeholder="Search for products"
          className="h-10 w-[28.5rem] rounded-md bg-white px-3 py-2"
          style={{
            backgroundImage: `url("/images/search.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'calc(100% - 1rem) center',
          }}
        />
      </div>
      <Dropdown />
      <Link
        href="/cart"
        className="custom-focus rounded-md border-none bg-black text-white hover:bg-hover active:bg-hover active:outline-none active:ring-2 active:ring-offset-2"
      >
        <Button
          variant={Variants.Primary}
          size={Sizes.Medium}
          disabled={false}
          bold={false}
        >
          Shopping Cart
          <Cart />
        </Button>
      </Link>
    </header>
  )
}
