import styled from 'styled-components';

export const StyledReactPaginateBox = styled.div`
    .pagination {
        text-decoration: none;
        width: fit-content;
        margin: none;
        padding: 0 8px;
        height: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        border: thin solid #aaa;

        li a {
            text-decoration: none;
            cursor: pointer;
            color: ${({ theme }) => theme.blue.terciaryColor};
            margin: 0 5px;
            outline: 0;
            user-select: none;
        }

        .active {
            border-radius: 3px;
            border: thin solid #aaa;
        }
    }
`;