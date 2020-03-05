import styled from 'styled-components';

export const FormContainer = styled.div`
  box-shadow: 0 1px 2px 2px rgb(193, 193, 193);
  border-radius: 5px;
  background-color: white;
  width: 450px;
  font-size: 1em;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 60vh;
  padding: 1em 0;

  form {
    width: 90%;
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
