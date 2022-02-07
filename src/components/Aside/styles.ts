import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    /* color: ${props => props.theme.colors.black}; */
    padding-left: 20px;
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    color: ${props => props.theme.colors.black};
    font-weight: 900;
    font-size: 20px;
    margin-left: 10px;
`;

export const Logo = styled.img`
    width: 40px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuLink = styled.a`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.black};
    text-decoration: none;

    margin: 10px 0;

    font-size: 16px;
    font-weight: 900;

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 20px;
        margin-right: 20px;
    }
`;
