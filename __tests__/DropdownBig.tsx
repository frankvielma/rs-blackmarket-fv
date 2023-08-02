import { render } from '@testing-library/react'
import DropdownBig from '@/components/DropdownBig'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Dropdpwn Big', () => {
  it('renders Dropdpwn Big', () => {
    const { container } = render(<DropdownBig />)
    expect(container).toMatchSnapshot()
  })
})
