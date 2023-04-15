import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type Props = {
  children: React.ReactNode;
};

type TasksContextProps = {
  tasks: string[];
  handleCreateTask: (task: string) => void;
};

const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleCreateTask = useCallback((task: string) => {
    console.log("tasks:", tasks);

    if (!tasks.includes(task)) {
      setTasks((oldTasks) => [task, ...oldTasks]);
    } else {
      console.error("Task exist on array");
    }
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, handleCreateTask }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTask = () => {
  const context = useContext(TasksContext);

  return context;
};

export default useTask;
