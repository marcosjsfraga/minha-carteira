import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import { Container, Profile, Username, Welcome } from './styles';

export const Header: React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);

        return emojis[index];
    }, []);

    return (
        <Container>
            <h1>Toggle</h1>

            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <Username>Jonh Doe</Username>
            </Profile>
        </Container>
    );
};

export default Header;
