import React from "react";

import * as S from "./styles";
import Task from "./Task";
import useTask from "hooks/useTask";

const TasksList = () => {
  const { tasks } = useTask();

  return (
    <S.NumbersList>
      <h3>Tasks:</h3>

      <ul>
        {tasks.map((task) => (
          <Task taskText={task} />
        ))}
      </ul>
    </S.NumbersList>
  );
};

export default TasksList;
