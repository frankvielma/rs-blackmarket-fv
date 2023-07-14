import { render, fireEvent, screen } from '@testing-library/react'
import InputField from '@/components/InputField'

describe('inputField', () => {
  it('renders inputField unchanged', () => {
    const { container } = render(<InputField />)
    expect(container).toMatchSnapshot()
  }),
    it('calls the onChange function', () => {
      render(<InputField label={'Email'} type={'email'} id={'email'} />)
      const inputElement = screen.getByLabelText('Email')
      fireEvent.change(inputElement, { target: { value: 'test value' } })
      expect((inputElement as HTMLInputElement).value).toBe('test value')
    }),
    it('calls the handleBlur function', () => {
      render(<InputField label={'Email'} type={'email'} id={'email'} />)
      const inputElement = screen.getByLabelText('Email')
      fireEvent.blur(inputElement)
      expect(inputElement).toHaveClass(
        'border border-red-600 custom-focus h-[34px] w-auto rounded-md border border-dark-violet ps-3 placeholder:text-base placeholder:text-dark-gray hover:border-hover active:outline-none active:ring-2 active:ring-offset-2 md:h-[44px]'
      )
    })
})
