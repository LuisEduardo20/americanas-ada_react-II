import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 35%;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CreateTaskContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-weight: 500;
  }

  input {
    padding: 0.5rem;

    border-radius: 8px;
    border: none;
    border: 1px solid black;

    &:focus {
      outline: none;
    }
  }
`;
