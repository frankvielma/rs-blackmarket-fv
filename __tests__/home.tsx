import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders black market', () => {
    render(<Home />)

    const title = screen.getByText(/Black Market/i)

    expect(title).toBeInTheDocument()
  }),
    it('renders collaboratos', () => {
      render(<Home />)

      const title = screen.getByText(/collaborators/i)

      expect(title).toBeInTheDocument()
    }),
    it('renders homepage unchanged', () => {
      const { container } = render(<Home />)
      expect(container).toMatchSnapshot()
    })
})
