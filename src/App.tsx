import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
// import light from './styles/themes/light';
import List from './pages/List';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <Layout>
                <List />
            </Layout>

            <GlobalStyle />
        </ThemeProvider>
    );
};

export default App;
