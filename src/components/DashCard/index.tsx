import React from 'react';
import CountUp from 'react-countup';
import { RiArrowDownCircleLine, RiArrowUpCircleLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Container } from './styles';

interface IDashCardProps {
    title: string;
    amount: number;
    description: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const DashCard: React.FC<IDashCardProps> = ({ title, amount, description, icon, color }) => {
    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp end={amount} prefix="R$ " separator="." decimal="," decimals={2} />
            </h1>
            <small>{description}</small>
            {icon === 'dollar' ? <RiMoneyDollarCircleLine /> : null}
            {icon === 'arrowUp' ? <RiArrowUpCircleLine /> : null}
            {icon === 'arrowDown' ? <RiArrowDownCircleLine /> : null}
        </Container>
    );
};

export default DashCard;
