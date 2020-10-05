import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from '../styles/payment-style';
import { ModalWindowBackground, ModalWindowStyled, ExitButton } from '../styles/modalWindow-style';

const ModalWindow = ({ isShowing, hide, modalData }) => (isShowing ? ReactDOM.createPortal(
  <ModalWindowBackground onClick={hide}>
    <ModalWindowStyled>
      <ExitButton
        onClick={hide}
      >
        x
      </ExitButton>
      <Title>{modalData.title}</Title>
      <p>{modalData.text}</p>
    </ModalWindowStyled>
  </ModalWindowBackground>, document.body,
) : null);

export default ModalWindow;
