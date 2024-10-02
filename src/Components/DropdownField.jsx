import { ErrorMessage } from "formik";

export const DropdownField = ({ label, name, options, required, onChange }) => (
  <div className="mb-4 flex-1">
    <label className="block mb-2" htmlFor={name}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      className="border border-gray-300 p-2 w-full shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={onChange}
    >
      <option value="">Select...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
