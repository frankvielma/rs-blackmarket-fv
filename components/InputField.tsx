export default function InputField({
  type = '',
  name = '',
  label = '',
  placeholder = '',
}) {
  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={type} className="px-[34px] text-sm text-slate-950">
        {label}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        className="mx-[34px] h-[34px] w-auto rounded-md border border-slate-950 ps-3 placeholder:text-base placeholder:text-neutral-500"
        type={type}
      />
    </div>
  )
}
