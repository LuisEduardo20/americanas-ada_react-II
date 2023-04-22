import React from "react";
import { ButtonStyled } from "./styles";

type Props = {
  title: string;
  event: React.Dispatch<React.SetStateAction<any>>;
};

const Button = ({ title, event }: Props) => {
  return <ButtonStyled onClick={event}>{title}</ButtonStyled>;
};

export default Button;
