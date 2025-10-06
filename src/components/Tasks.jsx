import clsx from "clsx";
import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { FaTrash } from "react-icons/fa";
function Tasks({ tasks, onTaskClick, deleteTask }) {
  return (
    <ul className={clsx (" ", tasks.length > 0 ? "space-y-4 p-6 bg-fuchsia-200 rounded-md shadow transition duration-300 ease-in-out": "" )}>
      {tasks.map((task) => (
        <div className="group">
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={` bg-slate-400 text-white text-left p-2 rounded-md w-full transition duration-300 ease-in-out hover:bg-slate-500 ${
                task.iscompleted && "line-through"
              } group-hover:bg-slate-500`}
            >
              {task.title}
            </button>
            <button className="  bg-slate-400  p-2 rounded-md text-white transition duration-300 ease-in-out  group-hover:bg-slate-500">
              <ChevronRightIcon />
            </button>
            <button
              className="bg-slate-400  p-2 rounded-md text-white transition duration-300 ease-in-out  group-hover:bg-slate-500"
              onClick={() => deleteTask(task.id)}
            >
              <FaTrash />
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
}
export default Tasks;
