import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};

    padding: 15px;

    border-radius: 25px 0px 0px 0px;
    border-color: ${props => props.theme.colors.primary};
`;
