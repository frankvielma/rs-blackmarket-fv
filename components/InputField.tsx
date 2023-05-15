export default function InputField({
  type = '',
  name = '',
  label = '',
  placeholder = '',
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={type}
        className="px-[34px] text-sm text-slate-950 md:text-base"
      >
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="mx-[34px] h-[34px] w-auto rounded-md border border-slate-950 ps-3 placeholder-gray-500 placeholder:text-base placeholder:text-neutral-500 md:h-[44px]"
        type={type}
      />
    </div>
  )
}
