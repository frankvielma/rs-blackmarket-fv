import { render, fireEvent, screen, act, waitFor } from '@testing-library/react'
import Login from '@/app/login/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Login', () => {
  it('renders login unchanged', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  }),
    it('should enable login button', () => {
      render(<Login />)
      const emailInput = screen.getByLabelText('Email')
      const passwordInput = screen.getByLabelText('Password')

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.change(passwordInput, { target: { value: 'MyPassword123' } })

      const buttonElement = screen.getByRole('button', { name: 'Log in' })
      expect(buttonElement).toHaveClass(
        'active:ring-2 active:ring-offset-2 active:outline-none custom-focus hover:bg-hover active:bg-hover'
      )
    }),
    it('should display the error message if the form is invalid.', async () => {
      const mockResponse = ['Unable to log in with provided credentials.']
      fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse),
        })
      )
      render(<Login />)
      const emailInput = screen.getByLabelText('Email')
      const passwordInput = screen.getByLabelText('Password')

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.change(passwordInput, { target: { value: 'MyPassword123' } })

      const buttonElement = screen.getByRole('button', { name: 'Log in' })

      act(() => {
        fireEvent.click(buttonElement)
      })

      await waitFor(async () => {
        expect(
          screen.getByText('Unable to log in with provided credentials.')
        ).toBeInTheDocument()
      })
    })
})
