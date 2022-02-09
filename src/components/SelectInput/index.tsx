import React from 'react';
import { Container } from './styles';

interface ISelectInputProps {
    options: {
        label: string;
        value: string | number;
    }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
    return (
        <Container>
            <select>
                {options.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </Container>
    );
};

export default SelectInput;
