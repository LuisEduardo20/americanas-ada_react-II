import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import * as S from "../styles";
import Spacer from "../../Spacer";
import useTask from "hooks/useTask";

type Props = {
  taskText: string;
};

const Task = ({ taskText }: Props) => {
  const { handleDeleteTask } = useTask();

  const [checked, setChecked] = useState(false);

  const handleChangeCheck = () => setChecked((oldValue) => !oldValue);

  return (
    <>
      <S.Task>
        <div>
          <S.StyledCheckbox
            checked={checked}
            onClick={handleChangeCheck}
          />
          <S.TaskText checked={checked}>{taskText}</S.TaskText>
        </div>

        <button>
          <FiTrash2
            onClick={() => handleDeleteTask(taskText)}
            size={20}
          />
        </button>
      </S.Task>

      <Spacer height={2} />
    </>
  );
};

export default Task;
