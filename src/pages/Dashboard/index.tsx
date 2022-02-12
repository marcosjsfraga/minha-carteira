import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import DashCard from '../../components/DashCard';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#d39cdf">
                <div></div>
            </ContentHeader>

            <Content>
                <DashCard
                    title="saldo"
                    amount={150.0}
                    color="#f7931b"
                    description="Este é o saldo dos movimentos"
                    icon="dollar"
                />

                <DashCard
                    title="entradas"
                    amount={500.0}
                    color="#4682b4"
                    description="Este é o total das entradas"
                    icon="arrowUp"
                />

                <DashCard
                    title="saídas"
                    amount={350.0}
                    color="#e44c4e"
                    description="Este é o total das saídas"
                    icon="arrowDown"
                />
            </Content>
        </Container>
    );
};

export default Dashboard;
