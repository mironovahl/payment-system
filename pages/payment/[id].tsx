import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Title, PaymentCard, Button, NumberInput, Input,
} from '../../styles/payment-style';
import operatorsData from '../../data/operators';
import { IOperatorData } from '../../interfaces/operators-interfaces';
import ModalWindowStyled from '../../components/modalWindow';
import useModal from '../../components/useModal';
import { IModalData } from '../../interfaces/modal-interfaces';

interface IOperatorProps {
  operatorData: IOperatorData;
}

const Operator: React.FC<IOperatorProps> = ({ operatorData }: IOperatorProps) => {
  const [numberPhone, setNumberPhone] = useState<string>();
  const [amount, setAmount] = useState<string>('');
  const { isShowing, toggle } = useModal();
  const [modalData, setModalData] = useState<IModalData>();
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
      setModalData({
        title: 'Ошибка',
        text: 'Ошибка при оплате',
      });
      toggle();
    } else {
      setModalData({
        title: 'Завершено',
        text: 'Оплата прошла успешно',
      });

      toggle();
      setTimeout(() => router.push('/'), 1500);
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
            onChange={({ target }) => setNumberPhone(target.value)}
            pattern="\+7[\(][0-9]{3}[\)]\s?\d{3}[-]{0,1}\d{4}"
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
            onChange={({ target }) => setAmount(target.value)}
          />
          <Button
            type="submit"
          >
            Оплатить
          </Button>
        </form>
        <Link href="/"><a>Выбрать другого оператора</a></Link>
      </PaymentCard>
      <ModalWindowStyled
        isShowing={isShowing}
        hide={toggle}
        modalData={modalData}
      />
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
