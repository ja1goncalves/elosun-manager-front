import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TypeLoadProps } from './load-icon-types';
import { StyledLoadIcon } from './load-icon-styles';

export default ({ loading, style }: TypeLoadProps) => {
    return (
        <>
            {loading && (
                <StyledLoadIcon icon={faSpinner} style={style} />
            )}
        </>
    )
}