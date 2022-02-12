import styled from 'styled-components';

interface IContainderProps {
    color: string;
}

export const Container = styled.div<IContainderProps>`
    width: 32%;
    height: 150px;

    margin: 10px 0;

    overflow: hidden;

    background-color: ${props => props.color};
    color: #fff;

    border-radius: 7px;
    padding: 10px 20px;

    position: relative;

    > span {
        font-size: 24px;
        font-weight: bold;
    }

    > h1 {
        font-size: 40px;
        font-weight: bold;
    }

    > small {
        font-size: 15px;
        font-weight: bold;

        position: absolute;
        bottom: 10px;
    }

    > svg {
        font-size: 190px;
        font-weight: bold;

        opacity: 0.3;

        position: absolute;

        top: -20px;
        right: -20px;
    }
`;
