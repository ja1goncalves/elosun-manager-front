import React from 'react';

export type TypeFormFieldsetProps = {
    type: 'text' | 'email' | 'tel' | 'password';
    name: string;
    placeholder?: string;
    label?: string;
    id: string;
    onChange: any;
    value: string;
    error: boolean;
    showError: boolean;
}