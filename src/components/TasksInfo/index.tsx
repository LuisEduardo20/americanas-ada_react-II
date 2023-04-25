import React, { useMemo } from "react";
import { Container } from "./styles";
import useTask from "hooks/useTask";

type Props = {};

const TasksInfo = (props: Props) => {
  const { tasks } = useTask();

  const tasksQuantity = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return <Container>Quantidade de tasks: {tasksQuantity}</Container>;
};

export default TasksInfo;
