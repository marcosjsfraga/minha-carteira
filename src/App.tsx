import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
// import light from './styles/themes/light';
import Dashboard from './pages/Dashboard';
import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <Layout>
                <Dashboard />
            </Layout>

            <GlobalStyle />
        </ThemeProvider>
    );
};

export default App;
