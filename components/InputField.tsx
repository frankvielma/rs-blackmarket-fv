export default function InputField({
  type = '',
  name = '',
  label = '',
  placeholder = '',
}) {
  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={type} className="text-sm md:text-base">
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
