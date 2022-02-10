import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.colors.secondary};

    list-style: none;

    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    cursor: pointer;
    transition: all 0.3s;

    position: relative;

    &:hover {
        opacity: 0.7;
        transform: translate(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }

    > div span {
        font-weight: 900;
        font-size: 22px;
    }
`;

export const Tag = styled.div<ITagProps>`
    position: absolute;
    left: 0;

    background-color: ${props => props.color};

    width: 5px;
    height: 60%;
`;
