import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Title, PaymentCard, Button, NumberInput, Input,
} from '../../styles/payment-style';
import operatorsData from '../../data/operators';
import { IOperatorData } from '../../interfaces/operators-interfaces';
import ModalWindowStyled from '../../components/modalWindow';

interface IOperatorProps {
  operatorData: IOperatorData;
}

const Operator: React.FC<IOperatorProps> = ({ operatorData }: IOperatorProps) => {
  const [numberPhone, SetNumberPhone] = useState<string>();
  const [amount, SetAmount] = useState<string>();
  const [isError, SetIsError] = useState<boolean>(false);
  const router = useRouter();

  const HandleFormSubmit = async (event) => {
    event.preventDefault();
    const res: Response = await fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberPhone,
        amount,
      }),
    });

    if (!res.ok) {
      SetIsError(true);
    } else {
      router.push('/');
    }
  };
  return (
    <>
      <PaymentCard>
        <Title>{operatorData.name}</Title>
        <form onSubmit={HandleFormSubmit}>
          <label htmlFor="phoneNumber"> Номер телефона </label>
          <NumberInput
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            placeholder="+7(___) ___-____"
            value={numberPhone}
            onChange={({ value }) => SetNumberPhone(value)}
            mask={['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          />
          <label htmlFor="amount"> Сумма в рублях </label>
          <Input
            type="number"
            min={1}
            max={1000}
            autoComplete="off"
            id="amount"
            required
            name="amount"
            placeholder="1 - 1000 руб."
            value={amount}
            onChange={({ target }) => SetAmount(target.value)}
          />
          <Button
            type="submit"
          >
            Оплатить
          </Button>
        </form>
        <Link href="/"><a>Выбрать другого оператора</a></Link>
      </PaymentCard>
      <ModalWindowStyled text="Ошибка при оплате" isVisible={isError} changeIsVisible={SetIsError} />
    </>
  );
};

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
