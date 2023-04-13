import styled from "styled-components";

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid black;

  background-color: ${({ checked }) =>
    checked ? "green" : "transparend"};
`;
