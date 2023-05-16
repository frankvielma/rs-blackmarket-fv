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
        className="custom-input custom-focus custom-hover custom-active md:h-[44px]"
        type={type}
      />
    </div>
  )
}
