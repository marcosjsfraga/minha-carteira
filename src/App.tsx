import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';
// import light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <Layout />

            <GlobalStyle />
        </ThemeProvider>
    );
};

export default App;
