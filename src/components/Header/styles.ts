import styled from 'styled-components';

export const Container = styled.div`
    grid-area: HR;

    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;
`;

export const Profile = styled.div`
    /* display: flex; */
    /* flex-direction: row; */
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;
