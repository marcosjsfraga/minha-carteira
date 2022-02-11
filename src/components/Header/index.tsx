import React, { useMemo, useState } from 'react';
import Toggle from '../../components/Toggle';
import { useTheme } from '../../hooks/themes';
import emojis from '../../utils/emojis';
import { Container, Profile, Username, Welcome } from './styles';

const Header: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => (theme.title === 'dark' ? true : false));

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length);

        return emojis[index];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    };

    return (
        <Container>
            <Toggle labelLeft="Light" labelRight="Dark" checked={darkTheme} onChange={handleChangeTheme} />

            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <Username>Jonh Doe</Username>
            </Profile>
        </Container>
    );
};

export default Header;
