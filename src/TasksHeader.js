import { useSelector } from "react-redux";

const TasksHeader = () => {
  const tasks = useSelector((state) => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        <strong>{undoneTasks.length}</strong> tâches à faire
      </p>
    </header>
  );
};

export default TasksHeader;
