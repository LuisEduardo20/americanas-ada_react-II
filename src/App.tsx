import React from "react";

import "./styles/app.css";
import ContextsGroup from "hooks";
import { CreateTask, TasksList } from "components";

function App() {
  return (
    <ContextsGroup>
      <div className='app'>
        <CreateTask />
        <TasksList />
      </div>
    </ContextsGroup>
  );
}

export default App;
