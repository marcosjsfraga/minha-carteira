import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex: 1;
    align-items: stretch;
`;

export const LetfContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;
    width: 100%;
    /* max-width: 50%; */
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;
    width: 100%;
    max-width: 50%;

    background-color: #fff;

    > img {
        width: 70%;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > span {
        color: ${props => props.theme.colors.black};
        margin-left: 10px;
        font-size: 35px;
        font-weight: 900;
    }

    > img {
        width: 70px;
    }
`;

export const Form = styled.form`
    width: 350px;
    height: 400px;

    padding: 30px;

    border-radius: 10px;

    background-color: ${props => props.theme.colors.primary};

    > button {
        background-color: ${props => props.theme.colors.blue};
        color: #fff;
        font-weight: 900;
    }

    a {
        color: #d65db1;
        font-weight: 900;
        display: block;
        margin-top: 50px;
        text-decoration: none;
        transition: color 0.2s;
    }
`;

export const FormTitle = styled.h1`
    color: ${props => props.theme.colors.black};
    margin-bottom: 40px;

    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid #d65db1;
    }
`;
