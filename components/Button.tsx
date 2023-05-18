interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'outline'
  size: 'small' | 'large'
  option: 'default' | 'disabled'
  withIcon: boolean
}

export default function Button({
  variant,
  size,
  option,
  withIcon,
  ...props
}: Props) {
  const classbutton = `h-[44px] rounded-md border text-center font-bold 
    ${
      variant === 'primary'
        ? 'bg-black text-white border-none'
        : 'bg-white text-black border-dark-violet'
    }
    ${
      option === 'disabled'
        ? 'btn-disabled outline-none cursor-not-allowed'
        : 'custom-active custom-focus btn-hover active:bg-hover'
    }
    `

  return <button type="button" {...props} className={classbutton} />
}
