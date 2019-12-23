import React from 'react';
import { InputForm } from './input';
import { FieldCheckComponent } from './field-check';
import { TypeFormFieldsetProps } from './fieldset-types';

export default ({ error, showError, label, id, ...inputAttrs }: TypeFormFieldsetProps) => (
    <fieldset className="form-group d-flex position-relative">
        {label && <label className="text-left" htmlFor={id}>{label}</label>}
        <InputForm
            {...inputAttrs}
            error={error}
            id={id} />
        <FieldCheckComponent invalid={error} show={showError} />
    </fieldset>
)