import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

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
  a {
    color: black;
    margin-top: 24px;
    &:hover {
      color: #8672d6;  
    }
  }
  @media(max-width: 768px) {
    max-width: 300px;
    width: calc(95% - 165px);
    padding: 50px 75px;
    box-shadow: 7px 7px 1px #ffa580, 7px 7px 1px 2px  #000000;
  }
  @media(max-width: 425px) {
    width: calc(95% - 70px);
    padding: 50px 25px;
  }
`;

const Input = styled.input`
  display: block;
  font-family: 'Montserrat Alternates', sans-serif;
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 0;
  border-bottom: 5px solid #000000;
  outline: none;
  background: #f8f4e5;
  margin: 5px 0 24px;
  color:  #000000;
  &:focus {
    border-bottom: 5px solid #ffa580;
  }
  &::selection {
    background: #ffc8ff;
  }
`;

const NumberInput = styled(MaskedInput)`
  display: block;
  font-family: 'Montserrat Alternates', sans-serif;
  width: 100%;
  border: none;
  padding: 0;
  font-size: 24px;
  border-bottom: 5px solid #000000;
  outline: none;
  background: #f8f4e5;
  margin: 5px 0 24px;
  color:  #000000;
  &:focus {
    border-bottom: 5px solid #ffa580;
  }
  &::selection {
    background: #ffc8ff;
  }
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
  background-image: linear-gradient(45deg, white 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
&:hover {
  background-position: 0;
  transition: 500ms ease-in-out;
}


`;

export {
  Title, PaymentCard, Button, NumberInput, Input,
};
