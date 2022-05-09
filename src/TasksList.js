import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {
  return (
    <>
      {useSelector((state) => state.todo).map((t) => (
        <TaskItem
          task={t}
          key={t.id}
        />
      ))}
    </>
  );
};

export default TasksList;
