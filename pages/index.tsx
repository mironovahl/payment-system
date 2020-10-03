import React from 'react';
import Link from 'next/link';
import operatorsData from '../data/operators';
import {
  Title, Buttons, Button, ChoiseOperator,
} from '../styles/choiseOperators-style';

const generateOperators = () => Object.entries(operatorsData).map(([key]) => (
  <Link key={key} href={`/payment/${key}`}>
    <Button><a>{operatorsData[key].name}</a></Button>
  </Link>
));

const ChoiseOperators: React.FC = () => (
  <ChoiseOperator>
    <Title>Выберите оператора мобильной связи</Title>
    <Buttons>
      {generateOperators()}
    </Buttons>
  </ChoiseOperator>
);

export default ChoiseOperators;
