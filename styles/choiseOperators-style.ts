import styled from 'styled-components';

const ChoiseOperator = styled.div`
  width: 300px;
  margin: auto;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    display: block;
    width: 100%;
  }
`;

const Button = styled.button`
  margin: 5px 0;
  cursor: pointer;
  width: 100%;
  border: 2px solid  #ffa580;
  border-radius: 8px;
  padding: 10px;
  color:rgba(0,0,0,1);
  font-size:16px;
  background: white;
  outline: none;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 400;
  text-decoration: none;
  &:hover{
    background: #ffa580;
    color: white;
  }
`;

const Title = styled.h3`
  color: black;
  text-align: center;
`;

export {
  Title, Buttons, Button, ChoiseOperator,
};
