import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MaskedInput from 'react-text-mask';
import operatorsData from '../../data/operators';
import { IOperatorData } from '../../interfaces/operators-interfaces';

interface IProps {
  operatorData: IOperatorData;
}
const Title = styled.h3`
    margin: 0 0 24px;
    font-size: 32px;
    color: #8672d6;  
`;

const PaymentCard = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
  background: #f8f4e5;
  padding: 50px 100px;
  border: 2px solid #000000;
  box-shadow: 15px 15px 1px #ffa580, 15px 15px 1px 2px  #000000;
`;

const Input = styled(MaskedInput)`
  display: block;
  font-family: 'Montserrat Alternates', sans-serif;
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 5px;
  border-bottom: 5px solid #000000;
  min-width: 250px;
  outline: none;
  background: #f8f4e5;
  margin: 0 0 24px;
  color:  #000000;
  &:focus {
    border-bottom: 5px solid #ffa580;
  }
  &::selection {
    background: #ffc8ff;
  }
`;

const Label = styled.label`

  `;

const Button = styled.button`
  display: block;
  font-family: 'Montserrat Alternates', sans-serif;
  cursor: pointer;
  font-size: 20px;
  margin: 16px auto;
  padding: 10px 20px;
  background: #ffa580;
  letter-spacing: 2px;
  transition: .2s all ease-in-out;
  outline: none;
  border: 1px solid  #000000;
  box-shadow: 3px 3px 1px #95a4ff, 3px 3px 1px 1px  #000000;
  
  &:hover {
    background: #000000;
    color: #ffa580;
    border: 1px solid  #000000;
  }
  
`;

const Operator = ({ operatorData }: IProps) => (
  <PaymentCard>
    <Title>{operatorData.name}</Title>
    <form action="">
      <Label htmlFor="phoneNumber"> Номер телефона </Label>
      <Input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        required
        placeholder="Phone number"
        mask={['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />
      <Label htmlFor="amount"> Сумма </Label>
      <Input
        type="tel"
        id="amount"
        required
        name="amount"
        placeholder="Amount"
        mask={['₽', /\d/, /\d/, /\d/, /\d/]}
      />
      <Button type="submit">Оплатить</Button>

    </form>
    <Link href="/"><a>Выбрать другого оператора</a></Link>
  </PaymentCard>
);

export async function getStaticPaths() {
  const paths = Object.entries(operatorsData).map(
    ([key]) => ({
      params: {
        id: key,
      },
    }),
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const operatorData = operatorsData[params.id];
  return {
    props: {
      operatorData,
    },
  };
}
export default Operator;
