import { ErrorMessage } from "formik";

export const TextAreaField = ({
  label,
  name,
  placeholder,
  required,
  onChange,
}) => (
  <div className="mb-4 flex-1">
    <label className="block mb-2" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      placeholder={placeholder}
      className="border border-gray-300 p-2 w-full shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
