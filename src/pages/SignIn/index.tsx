import React, { useState } from 'react';
import logoImg from '../../assets/finance_icon.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Container, Form, FormTitle, Logo } from './styles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
};

export default SignIn;
