import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex; /**vai forçar que um elemento fique do lado do outro */

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #f1f1f1;
    background-color: #f1f1f1;
    /**Cor branca porque é a mesma cor que o input tem em background, logo não dá pra notar que a borda existe */
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #f1f1f1;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block; /**o padrão é "in-line" */
    text-decoration: none; /**pra tirar efeito sublinhado do texto */

    display: flex; /**para os lementos ficarem lado a lado */
    align-items: center; /**pra alinhar no centro */
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px); /**distanciar 10px no eixo x */
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; /**Usar isso toda vez que quiser que a imagem fique 100% arredondada */
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
        margin-top: 4px;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto; /**Pegar todo espaço disponível e colocar como margin a esquerda */
      color: #000;
    }
  }
`;
