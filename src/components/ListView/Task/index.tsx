import React, { useState } from "react";

import * as S from "../styles";
import Spacer from "../../Spacer";

type Props = {
  listNumber: number;
};

const Task = ({ listNumber }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheck = () => setChecked((oldValue) => !oldValue);

  return (
    <>
      <li>
        <S.StyledCheckbox
          checked={checked}
          onClick={handleChangeCheck}
        />
        <p>{listNumber}</p>
      </li>

      <Spacer height={2} />
    </>
  );
};

export default Task;
