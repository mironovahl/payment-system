import styled from 'styled-components';

const ModalWindowBackground = styled.div`
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;

const ModalWindowStyled = styled.div`
width: 280px;
height:150px;
position: absolute;
top: calc(50% - 75px);
left: calc(50% - 140px);
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid #000000;
box-shadow: 5px 5px 1px #ffc8ff, 5px 5px 1px 2px  #000000;
`;

const ExitButton = styled.button`
position: absolute;
top: 5px;
right: 5px;
cursor: pointer;
padding: 5px 9px;
letter-spacing: 2px;
transition: .2s all ease-in-out;
outline: none;
border: 1px solid  #000000;
&:hover {
  background-color:#ffa580;
}
`;

export { ModalWindowBackground, ModalWindowStyled, ExitButton };
