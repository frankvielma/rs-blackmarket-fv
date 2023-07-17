import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import Signup from '@/app/signup/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

const router = {
  push: jest.fn(),
}

const mockResponse = ['Verification e-mail sent.']

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })
)

describe('Signup', () => {
  it('renders signup unchanged', () => {
    const { container } = render(<Signup />)
    expect(container).toMatchSnapshot()
  }),
    it('should enable sign up button', () => {
      render(<Signup />)
      const emailInput = screen.getByLabelText('Email')
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText('Confirm password')

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.change(passwordInput, { target: { value: 'MyPassword123' } })
      fireEvent.change(confirmPasswordInput, {
        target: { value: 'MyPassword123' },
      })

      const buttonElement = screen.getByRole('button', { name: 'Sign up' })
      expect(buttonElement).toHaveClass(
        'active:ring-2 active:ring-offset-2 active:outline-none custom-focus hover:bg-hover active:bg-hover'
      )
    }),
    it('displays fetched data', () => {
      render(<Signup />)
      const emailInput = screen.getByLabelText('Email')
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText('Confirm password')

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.change(passwordInput, { target: { value: 'MyPassword123' } })
      fireEvent.change(confirmPasswordInput, {
        target: { value: 'MyPassword123' },
      })

      const buttonElement = screen.getByRole('button', { name: 'Sign up' })

      fireEvent.click(buttonElement)

      waitFor(
        () => {
          expect(
            screen.getByText('Verification e-mail sent.')
          ).toBeInTheDocument()
          expect(router.push).toHaveBeenCalledWith('/login')
        },
        { timeout: 2100 }
      )
    })
})
