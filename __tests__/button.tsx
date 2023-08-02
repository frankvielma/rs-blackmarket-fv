import { render } from '@testing-library/react'
import Button, { Variants, Sizes } from '@/components/Button'

describe('Button', () => {
  it('renders button with primary variant, disabled and bold label', () => {
    const { container } = render(
      <Button
        variant={Variants.Primary}
        size={Sizes.Default}
        disabled={true}
        bold={true}
      />
    )
    expect(container).toMatchSnapshot()
  }),
    it('renders button with primary variant, enabled and not bold label', () => {
      const { container } = render(
        <Button
          variant={Variants.Primary}
          size={Sizes.Medium}
          disabled={false}
          bold={false}
        />
      )
      expect(container).toMatchSnapshot()
    }),
    it('renders button with outline variant, disabled and not bold label', () => {
      const { container } = render(
        <Button
          variant={Variants.Primary}
          size={Sizes.Large}
          disabled={true}
          bold={false}
        />
      )
      expect(container).toMatchSnapshot()
    })
})
