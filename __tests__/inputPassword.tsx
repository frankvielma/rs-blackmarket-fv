import { render, fireEvent, screen } from '@testing-library/react'
import InputPassword from '@/components/InputPassword'

describe('InputPassword', () => {
  it('renders InputPassword unchanged', () => {
    const { container } = render(<InputPassword />)
    expect(container).toMatchSnapshot()
  }),
    it('calls the onChange function', () => {
      render(<InputPassword label={'Password'} id={'password'} />)
      const inputElement = screen.getByLabelText('Password')
      fireEvent.change(inputElement, { target: { value: 'test value' } })
      expect((inputElement as HTMLInputElement).value).toBe('test value')
    }),
    it('calls the handleBlur function', () => {
      render(<InputPassword label={'Password'} id={'password'} />)
      const inputElement = screen.getByLabelText('Password')
      fireEvent.blur(inputElement)
      expect(inputElement).toHaveClass(
        'border border-red-600 custom-focus h-[34px] w-auto rounded-md border border-dark-violet ps-3 placeholder:text-base placeholder:text-dark-gray hover:border-hover active:outline-none active:ring-2 active:ring-offset-2 md:h-[44px]'
      )
    }),
    it('calls onClick and updates the visibility icon', () => {
      render(<InputPassword label={'Password'} id={'password'} />)
      const imgElement = screen.getByAltText('Visibility');
      fireEvent.click(imgElement)
      expect(imgElement).toHaveAttribute('src', '/icons/visibility_on.svg');
    })
})
