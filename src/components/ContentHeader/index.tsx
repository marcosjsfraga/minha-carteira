import React from 'react';
import { Container, Controllers, TitleContainer } from './styles';

const ContentHeader: React.FC = () => {
    return (
        <Container>
            <TitleContainer>
                <h2>Content Header</h2>
            </TitleContainer>
            <Controllers>
                <button type="button">Filter</button>
            </Controllers>
        </Container>
    );
};

export default ContentHeader;
