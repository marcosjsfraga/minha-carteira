import React from 'react';
import { MdArrowDownward, MdArrowUpward, MdDashboard, MdExitToApp } from 'react-icons/md';
import logoImg from '../../assets/finance_icon.png';
import { useAuth } from '../../hooks/auth';
import { Container, Header, Logo, MenuButton, MenuContainer, MenuLink, Title } from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt="Logo" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuLink href="/">
                    <MdDashboard /> Dashboard
                </MenuLink>
                <MenuLink href="/list/gains">
                    <MdArrowDownward /> Entradas
                </MenuLink>
                <MenuLink href="/list/expenses">
                    <MdArrowUpward /> Saídas
                </MenuLink>
                <MenuButton onClick={signOut}>
                    <MdExitToApp /> Sair
                </MenuButton>
            </MenuContainer>
        </Container>
    );
};

export default Aside;
