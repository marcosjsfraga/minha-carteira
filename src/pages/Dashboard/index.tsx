import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#d39cdf">
                <div></div>
            </ContentHeader>
        </Container>
    );
};

export default Dashboard;
