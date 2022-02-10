import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    /* ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.primary};
    } */

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};

    padding: 25px;

    border-radius: 10px 0px 0px 0px;
    border-color: ${props => props.theme.colors.primary};
`;
