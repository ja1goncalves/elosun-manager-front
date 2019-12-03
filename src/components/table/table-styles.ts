import styled from 'styled-components';

export const StyledReactPaginateBox = styled.div`
    .pagination {
        text-decoration: none;
        width: fit-content;
        margin: none;
        padding: none;
        color: #fff;
        background-color: ${({ theme }) => theme.blue.terciaryColor};
        height: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        li a {
            text-decoration: none;
            cursor: pointer;
            color: #fff;
            margin: 0 5px;
            outline: 0;
        }

        .active {
            border-radius: 3px;
            border: thin solid #fff;
        }
    }
`;