import styled from "styled-components";

export const NumbersList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
`;
