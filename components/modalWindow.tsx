import React from 'react';
import { Title } from '../styles/payment-style';
import { ModalWindowBackground, ModalWindowStyled, ExitButton } from '../styles/modalWindow-style';

interface IModalProps {
  text: string;
  isVisible: boolean;
  changeIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWindow: React.FC<IModalProps> = ({ text, isVisible, changeIsVisible }: IModalProps) => {
  if (isVisible) {
    return (
      <ModalWindowBackground onClick={() => changeIsVisible(false)}>
        <ModalWindowStyled>
          <ExitButton
            onClick={() => changeIsVisible(false)}
          >
            x
          </ExitButton>
          <Title>Ошибка</Title>
          <p>{text}</p>
        </ModalWindowStyled>
      </ModalWindowBackground>
    );
  }
  return null;
};

export default ModalWindow;
