import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import * as S from "../styles";
import Spacer from "../../Spacer";
import useTask, { Task } from "hooks/useTask";

type Props = {
  task: Task;
};

const TaskContainer = ({ task }: Props) => {
  const { handleDeleteTask, handleCheckTask } = useTask();

  return (
    <>
      <S.Task>
        <div>
          <S.StyledCheckbox
            checked={task.checked}
            onClick={() => handleCheckTask(task.id)}
          />
          <S.TaskText checked={task.checked}>{task.text}</S.TaskText>
        </div>

        <button>
          <FiTrash2
            onClick={() => handleDeleteTask(task.id)}
            size={20}
          />
        </button>
      </S.Task>

      <Spacer height={2} />
    </>
  );
};

export default TaskContainer;
