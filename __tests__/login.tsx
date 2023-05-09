import { render } from '@testing-library/react'
import Login from '@/pages/login'

it('renders homepage unchanged', () => {
  const { container } = render(<Login />)
  expect(container).toMatchSnapshot()
})
