import React from 'react';
import Link from 'next/link';
import operatorsData from '../data/operators';
import {
  Title, Buttons, Button, ChoiseOperator,
} from '../styles/choiseOperators-style';

const generateOperators = () => Object.keys(operatorsData).map((key) => (
  <Link key={key} href="/payment/[id]" as={`/payment/${key}`}>
    <a>
      <Button>{operatorsData[key].name}</Button>
    </a>
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
