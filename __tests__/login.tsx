import { render, fireEvent, screen } from '@testing-library/react'
import Login from '@/app/login/page'

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
    })
})
