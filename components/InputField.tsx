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
        className="active:outline-double active:outline-4 active:outline-offset-0 active:outline-blue-900 mx-[34px] h-[34px] w-auto rounded-md border border-slate-950 ps-3 placeholder:text-base placeholder:text-neutral-500  hover:border-indigo-700 focus:outline-dashed focus:outline-2 focus:outline-offset-2 focus:outline-blue-700 md:h-[44px]"
        type={type}
      />
    </div>
  )
}
