import React from "react";

type Props = {
  title: string;
  active?: boolean;
  event: React.Dispatch<React.SetStateAction<any>>;
};

const Button = ({ title, active, event }: Props) => {
  return <button onClick={event}>{title}</button>;
};

export default Button;
