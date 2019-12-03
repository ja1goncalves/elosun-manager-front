import React from 'react';
import { TypeInputForm } from './input-types';
import { StyledInputForm } from './input-styles';

export const InputForm: React.FC<TypeInputForm> = (attrs) => {
    return <StyledInputForm className="form-control" {...attrs} />
}