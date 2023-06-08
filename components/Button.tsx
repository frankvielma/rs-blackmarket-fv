interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'outline'
  option: boolean
}

export default function Button({ variant, option, ...props }: Props) {
  const classbutton = `h-[44px] rounded-md border text-center font-bold 
    ${
      variant === 'primary'
        ? 'bg-black text-white border-none'
        : 'bg-white text-black border-dark-violet'
    }
    ${
      option === true
        ? 'bg-light-gray font-bold text-dark-gray outline-none cursor-not-allowed'
        : 'active:ring-2 active:ring-offset-2 active:outline-none custom-focus hover:bg-hover active:bg-hover'
    }
    `

  return <button type="button" {...props} className={classbutton} />
}
