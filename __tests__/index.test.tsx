import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const title = screen.getByText(/Get started by editing/i)

    expect(title).toBeInTheDocument()
  })
})
