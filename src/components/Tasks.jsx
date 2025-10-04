import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { FaTrash } from "react-icons/fa";
function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-fuchsia-200 rounded-md shadow ">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2" >
       
          <button onClick={() => props.onTaskClick(task.id) } className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${task.iscompleted && "line-through"}`}>{task.title}


          </button>
          <button className="bg-slate-400  p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button className="bg-slate-400  p-2 rounded-md text-white" onClick={() => props.deleteTask(task.id)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
