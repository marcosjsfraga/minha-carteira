import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    const people = [
        { label: 'Marcos', value: 'Marcos' },
        { label: 'Laila', value: 'Laila' },
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#d39cdf">
                <SelectInput options={people} />
            </ContentHeader>
        </Container>
    );
};

export default Dashboard;
