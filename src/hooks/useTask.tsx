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
  handleDeleteTask: (taskName: string) => void;
};

const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleCreateTask = useCallback(
    (task: string) => {
      if (!tasks.includes(task)) {
        setTasks((oldTasks) => [task, ...oldTasks]);
      } else {
        console.error("Task exist on array");
      }
    },
    [tasks]
  );

  const handleDeleteTask = (taskName: string) => {
    const tasksArrayWithoutClickedTask = tasks.filter(
      (task) => task !== taskName
    );

    setTasks(tasksArrayWithoutClickedTask);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, handleCreateTask, handleDeleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTask = () => {
  const context = useContext(TasksContext);

  return context;
};

export default useTask;
