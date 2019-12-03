import React from 'react';
import { FieldCheckProps } from './field-check-types';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { StyledCheckIcon } from './field-check-styles';

export default ({ invalid, show }: FieldCheckProps) => {
    return (
        <>
            {show && (
                invalid ?
                    <StyledCheckIcon className="text-danger" icon={faTimes} /> :
                    <StyledCheckIcon className="text-success" icon={faCheck} />
                )
            }
        </>
    )
}