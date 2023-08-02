import LogoHeader from '@/components/LogoHeader'
import Link from 'next/link'
import Cart from '@/components/Cart'
import Button, { Variants, Sizes } from '@/components/Button'
import DropdownBig from '@/components/DropdownBig'
import DropdownSmall from '@/components/DropdownSmall'

export default function Header() {
  return (
    <header className="h-14 w-screen bg-black px-4 lg:h-24">
      <div className="mx-auto flex h-14 items-center justify-between px-4 lg:h-24">
        <div className="custom-focus rounded-md border-none bg-black text-white">
          <Link href="/dashboard">
            <LogoHeader />
          </Link>
        </div>
        <div className="custom-focus hidden rounded-md border-none bg-black text-black hover:bg-hover active:bg-hover active:outline-none active:ring-2 active:ring-offset-2 lg:block">
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
        <DropdownBig />

        <div className="hidden lg:block">
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
        </div>

        <div className="flex items-center justify-end space-x-2 pr-4 lg:hidden">
          <div>
            <button className="disabled:bg-light-grey disabled:text-dark-grey h-9 w-14 rounded-lg border border-white bg-dark-violet font-normal text-white hover:bg-hover focus:outline-dashed focus:outline-focus active:bg-active active:text-white active:outline active:outline-2 active:outline-active-outline disabled:outline-none">
              <svg
                className="inline text-white"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.65385 13.2273C6.65385 13.572 6.53205 13.8703 6.28846 14.1222C6.04487 14.3741 5.75641 14.5 5.42308 14.5C5.08974 14.5 4.80128 14.3741 4.55769 14.1222C4.3141 13.8703 4.19231 13.572 4.19231 13.2273C4.19231 12.8826 4.3141 12.5843 4.55769 12.3324C4.80128 12.0805 5.08974 11.9545 5.42308 11.9545C5.75641 11.9545 6.04487 12.0805 6.28846 12.3324C6.53205 12.5843 6.65385 12.8826 6.65385 13.2273ZM15.2692 13.2273C15.2692 13.572 15.1474 13.8703 14.9038 14.1222C14.6603 14.3741 14.3718 14.5 14.0385 14.5C13.7051 14.5 13.4167 14.3741 13.1731 14.1222C12.9295 13.8703 12.8077 13.572 12.8077 13.2273C12.8077 12.8826 12.9295 12.5843 13.1731 12.3324C13.4167 12.0805 13.7051 11.9545 14.0385 11.9545C14.3718 11.9545 14.6603 12.0805 14.9038 12.3324C15.1474 12.5843 15.2692 12.8826 15.2692 13.2273ZM16.5 2.40909V7.5C16.5 7.65909 16.4471 7.79995 16.3413 7.92258C16.2356 8.04522 16.1058 8.11648 15.9519 8.13636L5.91346 9.34943C5.99679 9.74716 6.03846 9.97917 6.03846 10.0455C6.03846 10.1515 5.96154 10.3636 5.80769 10.6818H14.6538C14.8205 10.6818 14.9647 10.7448 15.0865 10.8707C15.2083 10.9967 15.2692 11.1458 15.2692 11.3182C15.2692 11.4905 15.2083 11.6397 15.0865 11.7656C14.9647 11.8916 14.8205 11.9545 14.6538 11.9545H4.80769C4.64103 11.9545 4.49679 11.8916 4.375 11.7656C4.25321 11.6397 4.19231 11.4905 4.19231 11.3182C4.19231 11.2453 4.21795 11.1409 4.26923 11.005C4.32051 10.8691 4.37179 10.7498 4.42308 10.647C4.47436 10.5443 4.54327 10.4117 4.62981 10.2493C4.71635 10.0869 4.76603 9.98911 4.77885 9.95597L3.07692 1.77273H1.11538C0.948718 1.77273 0.804487 1.70975 0.682692 1.58381C0.560897 1.45786 0.5 1.30871 0.5 1.13636C0.5 0.964015 0.560897 0.814867 0.682692 0.68892C0.804487 0.562973 0.948718 0.5 1.11538 0.5H3.57692C3.67949 0.5 3.77083 0.521544 3.85096 0.564631C3.93109 0.607718 3.99359 0.659091 4.03846 0.71875C4.08333 0.778409 4.125 0.859612 4.16346 0.962358C4.20192 1.0651 4.22756 1.15128 4.24038 1.22088C4.25321 1.29048 4.27083 1.38826 4.29327 1.5142C4.31571 1.64015 4.33013 1.72633 4.33654 1.77273H15.8846C16.0513 1.77273 16.1955 1.8357 16.3173 1.96165C16.4391 2.08759 16.5 2.23674 16.5 2.40909Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <DropdownSmall />
        </div>
      </div>
      <div className="mt-4 flex flex-col rounded-md bg-white lg:hidden">
        <input
          type="text"
          placeholder="Search for products"
          className="h-10 rounded-md bg-white px-3 py-2 "
          style={{
            backgroundImage: `url("/images/search.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'calc(100% - 1rem) center',
          }}
        />
      </div>
    </header>
  )
}
