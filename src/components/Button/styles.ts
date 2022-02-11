import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border: 0;
    border-radius: 5px;

    font-weight: 500;

    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.tertiary};

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }
`;
