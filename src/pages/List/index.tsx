import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

const List: React.FC = () => {
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
            <ContentHeader title="Saídas" lineColor="#d39cdf">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Compra de padaria"
                    subtitle="99/99/999"
                    amount="R$ 12,34"
                />
            </Content>
        </Container>
    );
};

export default List;
