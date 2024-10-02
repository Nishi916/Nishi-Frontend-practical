import { ErrorMessage } from "formik";

export const CheckboxField = ({ label, name, options, onChange }) => (
  <div className="mb-4">
    <span className="block mb-2">{label}</span>
    {options.map((option, index) => (
      <label key={index} className="block">
        <input
          type="checkbox"
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
