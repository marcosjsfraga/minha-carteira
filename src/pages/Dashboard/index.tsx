import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    const months = [
        { label: 'Janeiro', value: 'Janeiro' },
        { label: 'Fevereiro', value: 'Fevereiro' },
        { label: 'Março', value: 'Março' },
        { label: 'Abril', value: 'Abril' },
        { label: 'Maio', value: 'Maio' },
        { label: 'Junho', value: 'Junho' },
        { label: 'Julho', value: 'Julho' },
        { label: 'Agosto', value: 'Agosto' },
        { label: 'Setembro', value: 'Setembro' },
        { label: 'Outubro', value: 'Outubro' },
        { label: 'Novembro', value: 'Novembro' },
        { label: 'Dezembro', value: 'Dezembro' },
    ];

    const years = [
        { label: '2019', value: '2019' },
        { label: '2020', value: '2020' },
        { label: '2021', value: '2021' },
        { label: '2022', value: '2022' },
        { label: '2023', value: '2023' },
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#d39cdf">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
        </Container>
    );
};

export default Dashboard;
