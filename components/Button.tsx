interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'outline'
  disabled?: boolean
  bold?: boolean
}

/**
 * Renders a Button component with a given variant, option, and other props.
 *
 * @param {Object} props - The props object containing:
 *   @param {string} variant - The variant type of the button. Possible values are "primary" or anything else.
 *   @param {boolean} option - The option type of the button. If true, the button is disabled. Otherwise, the button is active.
 *   @param {Object} ...props - The remaining props to be passed to the button.
 * @return {JSX.Element} A button component with the given props and variant.
 */
export default function Button({ variant, disabled, bold, ...props }: Props) {
  const classbutton = `h-[44px] rounded-md border text-center text-base
    ${bold === true ? 'font-bold' : 'font-normal'}
    ${
      variant === 'primary'
        ? 'bg-black text-white border-none'
        : 'bg-white text-black border-dark-violet'
    }
    ${
      disabled === true
        ? 'bg-light-gray text-dark-gray outline-none cursor-not-allowed'
        : 'active:ring-2 active:ring-offset-2 active:outline-none custom-focus hover:bg-hover active:bg-hover'
    }
  `

  return <button type="button" {...props} className={classbutton} />
}
