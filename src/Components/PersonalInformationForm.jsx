import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import { TextAreaField } from "./TextAreaField";
import { DropdownField } from "./DropdownField";
import { RadioField } from "./RadioField";
import { CheckboxField } from "./CheckboxField";
import { SliderField } from "./SliderField";

const createValidationSchema = (fields) => {
    console.log(fields)
  const shape = {};
  fields.forEach((field) => {
    console.log(field.required)
    if (field.required) {
     shape[field.name] = Yup.string().required(`${field.label} is required`);
    }
  });
  return Yup.object().shape(shape);
};

const PersonalInformationForm = ({ formData }) => {
  const { title, fields } = formData;
  const initialValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = "";
  });

  const validationSchema = createValidationSchema(fields);
  console.log(validationSchema)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        localStorage.setItem('formData',JSON.stringify(values))
      }}
    >
      {({ handleChange }) => (
        <Form className="max-w-lg p-4">
          <h1 className="font-bold mb-4">{title}</h1>
          <div className="grid grid-cols-1 gap-4">
            {fields.map((field, i) => {
              const commonProps = {
                name: field.name,
                label: field.label,
                required: field.required,
                onChange: handleChange,
              };

              switch (field.type) {
                case "text":
                  return (
                    <TextField
                      key={i}
                      {...commonProps}
                      placeholder={field.placeholder}
                    />
                  );
                case "textarea":
                  return (
                    <TextAreaField
                      key={i}
                      {...commonProps}
                      placeholder={field.placeholder}
                    />
                  );
                case "dropdown":
                  return (
                    <DropdownField
                      key={i}
                      {...commonProps}
                      options={field.options}
                    />
                  );
                case "radio":
                  return (
                    <RadioField
                      key={i}
                      {...commonProps}
                      options={field.options}
                    />
                  );
                case "checkbox":
                  return (
                    <CheckboxField
                      key={i}
                      {...commonProps}
                      options={field.options}
                    />
                  );
                case "slider":
                  return (
                    <SliderField
                      key={i}
                      {...commonProps}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                    />
                  );
                default:
                  return null;
              }
            })}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInformationForm;
