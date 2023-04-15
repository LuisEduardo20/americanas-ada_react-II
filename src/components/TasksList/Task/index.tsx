import React, { useState } from "react";

import * as S from "../styles";
import Spacer from "../../Spacer";

type Props = {
  taskText: string;
};

const Task = ({ taskText }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheck = () => setChecked((oldValue) => !oldValue);

  return (
    <>
      <S.Task>
        <S.StyledCheckbox
          checked={checked}
          onClick={handleChangeCheck}
        />
        <S.TaskText checked={checked}>{taskText}</S.TaskText>
      </S.Task>

      <Spacer height={2} />
    </>
  );
};

export default Task;
