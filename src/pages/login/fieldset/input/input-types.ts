import React from 'react';

export type TypeElementForm = {
    error?: boolean;
    placeholder?: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
}

export type TypeInputForm = TypeElementForm & {
    type: string;
    mask?: Array<RegExp|string>
}