import React from "react";
import { TasksProvider } from "./useTask";
import { LoadingProvider } from "./useLoading";

type Props = {
  children: React.ReactNode;
};

const ContextsGroup = ({ children }: Props) => {
  return (
    <>
      <LoadingProvider>
        <TasksProvider>{children}</TasksProvider>;
      </LoadingProvider>
    </>
  );
};

export default ContextsGroup;
