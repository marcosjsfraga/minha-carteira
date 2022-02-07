import React, { useMemo } from 'react';
import Toggle from '../../components/Toggle';
import emojis from '../../utils/emojis';
import { Container, Profile, Username, Welcome } from './styles';

const Header: React.FC = () => {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);

        return emojis[index];
    }, []);

    return (
        <Container>
            <Toggle></Toggle>

            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <Username>Jonh Doe</Username>
            </Profile>
        </Container>
    );
};

export default Header;
