import styled from 'styled-components';

export const StyledDistributorInfoContainer = styled.div`
    > div {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;

        > :first-child {
            width: 150px;
        }
        > :last-child {
            border: thin solid #aaa;
            border-radius: 5px;
            padding: 3px 6px;
            width: 250px;
        }
    }
`;