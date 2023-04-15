import React from "react";
import { TasksProvider } from "./useTask";

type Props = {
  children: React.ReactNode;
};

const ContextsGroup = ({ children }: Props) => {
  return <TasksProvider>{children}</TasksProvider>;
};

export default ContextsGroup;
