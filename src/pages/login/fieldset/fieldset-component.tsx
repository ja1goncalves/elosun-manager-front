import React from 'react';
import { ErrorMessage } from 'formik';
import { InputForm } from './input';
import { FieldCheckComponent } from './field-check';
import { TypeFormFieldsetProps } from './fieldset-types';

export default ({ type, name, placeholder, label, id, onChange, value, error, showError }: TypeFormFieldsetProps) => (
    <fieldset className="form-group d-flex position-relative">
        {label && <label className="text-left" htmlFor={id}>{label}</label>}
        <InputForm
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            error={error} />
        <FieldCheckComponent invalid={error} show={showError} />
        {/* <p className="text-danger mb-0">
            <ErrorMessage name={name} />
        </p> */}
    </fieldset>
)