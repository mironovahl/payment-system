import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import operatorsData from '../data/operators';

const ChoiseOperator = styled.div`
  width: 300px;
  margin: auto;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: 5px 0;
  cursor: pointer;
  border: 2px solid  #ffa580;
  border-radius: 8px;
  padding: 10px;
  color:rgba(0,0,0,1);
  font-size:16px;
  background: white;
  outline: none;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 400;
  &:hover{
    background: #ffa580;
    color: white;
  }
`;
const Title = styled.h3`
  color: black;
  text-align: center;
`;

const generateOperators = () => Object.entries(operatorsData).map(([key]) => (
  <Link href={`/payment/${key}`}>
    <Button><a>{operatorsData[key].name}</a></Button>
  </Link>
));

export default () => (
  <ChoiseOperator>
    <Title>Выберите оператора мобильной связи</Title>
    <Buttons>
      {generateOperators()}
    </Buttons>
  </ChoiseOperator>
);
