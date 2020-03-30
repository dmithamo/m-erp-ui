import styled from 'styled-components';
import { colors, shadows } from '../../../common/styles';

export const FormContainer = styled.div`
  box-shadow: ${shadows.modalShadow};
  border-radius: 5px;
  background-color: ${colors.white};
  width: 450px;
  font-size: 1em;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 55vh;

  span.logo {
    margin: 1em 0;
    width: 100%;
    padding: 2em;
    font-size: 2rem;
  }

  form {
    transition: all ease-in-out 0.5s;
    width: 85%;
    button {
      box-shadow: ${shadows.modalShadow};
    }

    button:active {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 500px) {
    width: 95%;
    form {
      width: 90%;
    }
  }
`;

export const FormHeader = styled.p`
  margin-bottom: 1em;
  color: inherit;
  font-weight: 700;
`;
