import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { FaTrash } from "react-icons/fa";
function Tasks({tasks, onTaskClick, deleteTask}) {
  return (
    <ul className="space-y-4 p-6 bg-fuchsia-200 rounded-md shadow ">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2" >
       
          <button onClick={() => onTaskClick(task.id) } className={`bg-slate-400 text-white text-left p-2 rounded-md w-full transition duration-300 ease-in-out hover:bg-slate-500 ${task.iscompleted && "line-through"}`}>{task.title}


          </button>
          <button className="bg-slate-400  p-2 rounded-md text-white transition duration-300 ease-in-out hover:bg-slate-500">
            <ChevronRightIcon />
          </button>
          <button className="bg-slate-400  p-2 rounded-md text-white transition duration-300 ease-in-out hover:bg-slate-500" onClick={() => deleteTask(task.id)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
