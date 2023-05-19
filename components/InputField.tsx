export default function InputField({
  type = '',
  id = '',
  label = '',
  placeholder = '',
}) {
  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={type} className="text-sm md:text-base">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="custom-focus h-[34px] w-auto rounded-md border border-dark-violet ps-3 placeholder:text-base placeholder:text-dark-gray hover:border-hover active:outline-none active:ring-2 active:ring-offset-2 md:h-[44px]"
        type={type}
      />
    </div>
  )
}
