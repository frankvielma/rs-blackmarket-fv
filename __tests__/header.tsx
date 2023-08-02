import { render } from '@testing-library/react'
import Header from '@/components/Header'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Header', () => {
  it('renders header', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
