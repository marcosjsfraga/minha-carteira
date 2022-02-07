import React from 'react';
import Aside from '../../components/Aside';
import Content from '../../components/Content';
import Header from '../../components/Header';
import { Grid } from './styles';

export const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <Header />
            <Aside />
            <Content>{children}</Content>
        </Grid>
    );
};

export default Layout;
