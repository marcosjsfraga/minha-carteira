import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
// import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
};

export default App;
