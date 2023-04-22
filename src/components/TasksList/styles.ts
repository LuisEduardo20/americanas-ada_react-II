import styled from "styled-components";

export const TasksListContainer = styled.section`
  width: 35%;
  margin-top: 2rem;

  border: 1px solid black;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-weight: 500;
    font-size: 1.25rem;
  }

  ul {
    width: 100%;
  }
`;

export const EmptyTasksMessage = styled.p`
  width: 100%;
  text-align: center;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid black;

  background-color: ${({ checked }) =>
    checked ? "green" : "transparend"};
`;

export const TaskText = styled.p<{ checked: boolean }>`
  text-decoration: ${({ checked }) =>
    checked ? "line-through" : "none"};
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
