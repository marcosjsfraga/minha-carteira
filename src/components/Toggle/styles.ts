import Switch, { ReactSwitchProps } from 'react-switch';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.black};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
    onColor: theme.colors.primary,
    offColor: theme.colors.gray,
}))<ReactSwitchProps>`
    margin: 0 7px;
`;
