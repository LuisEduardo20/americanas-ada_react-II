import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLoading } from "./useLoading";

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
  const { setLoading } = useLoading();

  const [tasks, setTasks] = useState<string[]>([]);

  const handleCreateTask = useCallback(
    (task: string) => {
      if (!tasks.includes(task)) {
        setTasks((oldTasks) => {
          const updatedTasks = [task, ...oldTasks];
          localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Adicionando a task no local storage
          return updatedTasks;
        });
      } else {
        console.error("Task exists in array");
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

  useEffect(() => {
    setLoading(true);

    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

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
