import { render } from '@testing-library/react'
import Login from '@/app/login/page'

it('renders login unchanged', () => {
  const { container } = render(<Login />)
  expect(container).toMatchSnapshot()
})
