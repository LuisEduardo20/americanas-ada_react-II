import React from "react";

import * as S from "./styles";
import Task from "./Task";
import useTask from "hooks/useTask";

const TasksList = () => {
  const { tasks } = useTask();

  return (
    <S.TasksListContainer>
      <h3>Tasks:</h3>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => <Task task={task} />)
        ) : (
          <S.EmptyTasksMessage>Não há tasks</S.EmptyTasksMessage>
        )}
      </ul>
    </S.TasksListContainer>
  );
};

export default TasksList;
