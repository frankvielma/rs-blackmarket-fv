import { Image } from 'next/Image'
import { render } from '@testing-library/react'
import Login from '@/app/login/page'

it('renders homepage unchanged', () => {
  const { container } = render(<Login />)
  expect(container).toMatchSnapshot()
})
