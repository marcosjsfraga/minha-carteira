import React from 'react';
import { Container, Controllers, TitleContainer } from './styles';

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({ title, lineColor, children }) => {
    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h2>{title}</h2>
            </TitleContainer>
            <Controllers>{children}</Controllers>
        </Container>
    );
};

export default ContentHeader;
