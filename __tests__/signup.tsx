import { render } from '@testing-library/react'
import Signup from '@/app/signup/page'

it('renders signup unchanged', () => {
  const { container } = render(<Signup />)
  expect(container).toMatchSnapshot()
})
