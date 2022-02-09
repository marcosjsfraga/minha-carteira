import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
};

export default App;
