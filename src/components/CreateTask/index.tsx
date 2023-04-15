import React, { useState } from "react";

import * as S from "./styles";
import Button from "components/Button";
import useTask from "hooks/useTask";

const CreateTask = () => {
  const { handleCreateTask } = useTask();
  const [taskName, setTaskName] = useState("");

  const handleChangeTaskName = (name: string) => setTaskName(name);

  return (
    <S.Container>
      <h2>To-Do List</h2>

      <section>
        <label htmlFor=''>Task name</label>
        <input
          type='text'
          placeholder='Ex.: Buy food'
          onChange={(e) => handleChangeTaskName(e.target.value)}
        />
      </section>

      <Button
        event={() => handleCreateTask(taskName)}
        title='Create task'
      />
    </S.Container>
  );
};

export default CreateTask;
