import { render } from '@testing-library/react'
import DropdownSmall from '@/components/DropdownSmall'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Dropdown Small', () => {
  it('renders Dropdpwn Small', () => {
    const { container } = render(<DropdownSmall />)
    expect(container).toMatchSnapshot()
  })
})
