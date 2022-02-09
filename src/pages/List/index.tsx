import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
    const months = [
        { label: 'Janeiro', value: '01' },
        { label: 'Fevereiro', value: '02' },
        { label: 'Março', value: '03' },
        { label: 'Abril', value: '04' },
        { label: 'Maio', value: '05' },
        { label: 'Junho', value: '06' },
        { label: 'Julho', value: '07' },
        { label: 'Agosto', value: '08' },
        { label: 'Setembro', value: '09' },
        { label: 'Outubro', value: '10' },
        { label: 'Novembro', value: '11' },
        { label: 'Dezembro', value: '12' },
    ];

    const years = [
        { label: '2022', value: '2022' },
        { label: '2021', value: '2021' },
        { label: '2020', value: '2020' },
        { label: '2019', value: '2019' },
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#d39cdf">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>

                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

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
