import styled from 'styled-components';

export const StyledCard = styled.div`
    box-shadow: 1px 1px 4px #aaa;
    border-radius: 10px;
    padding: 20px;
    font-size: 0.8rem;

    h2 {
        font-size: 1.3rem;
    }

    > * {
        margin-right: 0;
        margin-left: 0;
    }

    .pesquisar {
        border: thin solid #aaa;
        border-radius: 5px;
        padding: 3px 6px;
        width: 250px;
        margin-left: 5px;
    }

    .enviar {
    padding: 3px 20px;
    margin-left: 5px;
    background-color: #1B4965;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    }
`;