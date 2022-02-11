import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/themes';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
};

export default App;
