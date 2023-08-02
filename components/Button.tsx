import classnames from 'classnames'

export enum Variants {
  Primary = 'primary',
  Outline = 'outline',
}

export enum Sizes {
  Default = 'default',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants
  size: Sizes
  disabled?: boolean
  bold?: boolean
}

/**
 * Renders a button component with customizable variant, size, and other props.
 *
 * @param {Props} param - An object containing the props for the button component.
 * @param {string} param.variant - The variant of the button (e.g., 'primary', 'outline').
 * @param {string} param.size - The size of the button (e.g., 'default', 'small', 'medium', 'large').
 * @param {boolean} param.disabled - Specifies if the button is disabled.
 * @param {boolean} param.bold - Specifies if the button text should be bold.
 * @param {...any} param.props - Additional props to be spread on the button element.
 * @return {JSX.Element} - The rendered button component.
 */
export default function Button({
  variant,
  size,
  disabled,
  bold,
  ...props
}: Props) {
  const classbutton = classnames(
    'h-[44px] rounded-md border text-center text-base',
    {
      'bg-black text-white border-white': variant === Variants.Primary,
      'bg-white text-black border-dark-violet': variant === Variants.Outline,
      'bg-light-gray text-dark-gray outline-none cursor-not-allowed':
        disabled === true,
      'active:ring-2 active:ring-offset-2 active:outline-none custom-focus hover:bg-hover active:bg-hover':
        disabled === false,
      'font-bold': bold === true,
      'font-normal': bold === false,
      'w-32': size === Sizes.Default,
      'h-7 w-14 rounded': size === Sizes.Small,
      'w-44': size === Sizes.Medium,
      'w-72': size === Sizes.Large,
    }
  )

  return <button type="button" {...props} className={classbutton} />
}
