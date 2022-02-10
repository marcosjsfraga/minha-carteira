import React from 'react';
import { MdArrowDownward, MdArrowUpward, MdDashboard, MdExitToApp } from 'react-icons/md';
import logoImg from '../../assets/finance_icon.png';
import { Container, Header, Logo, MenuContainer, MenuLink, Title } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt="Logo" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuLink href="/dashboard">
                    <MdDashboard /> Dashboard
                </MenuLink>
                <MenuLink href="/list/gains">
                    <MdArrowDownward /> Entradas
                </MenuLink>
                <MenuLink href="/list/expenses">
                    <MdArrowUpward /> Saídas
                </MenuLink>
                <MenuLink href="#">
                    <MdExitToApp /> Sair
                </MenuLink>
            </MenuContainer>
        </Container>
    );
};

export default Aside;
