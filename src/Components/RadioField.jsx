import { ErrorMessage } from "formik";

export const RadioField = ({ label, name, options, required, onChange }) => (
  <div className="mb-4">
    <span className="block mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </span>
    {options.map((option, index) => (
      <label key={index} className="block">
        <input
          type="radio"
          name={name}
          value={option.value}
          className="mr-2"
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1 block"
    />
  </div>
);
