import InputField from '@/components/InputField'
import Instagram from '@/components/Icons/Instagram'
import Twitter from '@/components/Icons/Twitter'
import Facebook from '@/components/Icons/Facebook'
import Linkedin from '@/components/Icons/Linkedin'
import Logo from '@/components/Icons/logo'
import Button from '@/components/Button'

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto ml-6 flex flex-wrap justify-between lg:mx-8">
        <div className="flex flex-col-reverse lg:w-3/4 lg:flex-col">
          <div className="flex flex-wrap gap-12 sm:gap-24">
        
            <div className="flex flex-col flex-grow">
              <div className="mb-4 font-bold text-base sm:text-2xl">Restored furniture</div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/entries">Entries</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/rates">Rates</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/categories">Categories</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/sale">Sale</a></div>
            </div>

            <div className="flex flex-col flex-grow">
              <div className="mb-4 font-bold text-base sm:text-2xl">Stay connected</div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/instagram">Instagram</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/twitter">Twitter</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/facebook">Facebook</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/linkedin">LinkedIn</a></div>
            </div>

            <div className="flex flex-col flex-grow">
              <div className="mb-4 font-bold text-base sm:text-2xl">Black Market</div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/history">Our history</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/staff">Staff</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/work">Work with us</a></div>
            </div>

            <div className="flex flex-col flex-grow">
              <div className="mb-4 font-bold text-base sm:text-2xl">Support</div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/chat">Chat</a></div>
              <div className="mb-2 text-base sm:text-2xl"><a href="/address">Address</a></div>
            </div>

          </div>
          <div className="mb-8 flex justify-between">
            <Logo className="mt-8 h-8 w-40 shrink-0 lg:h-8 lg:w-48" />
            <div className="mt-8 hidden sm:flex">
              <Instagram className={'mr-4 text-white'} />
              <Facebook className={'mr-4 text-white'} />
              <Twitter className={'mr-4 text-white'} />
              <Linkedin className={'mr-8 text-white lg:mr-24'} />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-base lg:w-1/4">
          <p className="font-bold lg:text-2xl">
            Subscribe to our weekly newsletter!
          </p>
          <InputField
            type={'email'}
            id={'email'}
            label={'Email'}
            placeholder={'Type your email'}
          />
          <div className="mt-3 lg:text-xl">
            <Button variant="primary" option={false} >
              Subscribe
            </Button>
          </div>
          <p className="mt-2 hidden lg:block lg:text-md">
            By subscribing you agree to receive weekly emails with our latest
            news and updates.
          </p>
        </div>
      </div>
    </footer>
  )
}
