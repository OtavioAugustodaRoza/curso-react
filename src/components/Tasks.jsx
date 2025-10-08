import clsx from 'clsx'
import { ChevronRightIcon } from 'lucide-react'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate()

  function SeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);        
    query.set("description", task.description); 
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul
      className={clsx(
        '',
        tasks.length > 0
          ? 'space-y-4 p-6 bg-fuchsia-200 rounded-md shadow transition duration-300 ease-in-out'
          : ''
      )}
    >
      {tasks.map(task => (
        <div key={task.id} className="group">
          <li className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-white text-left p-2 rounded-md cursor-pointer w-full transition duration-300 ease-in-out hover:bg-slate-500 ${
                task.iscompleted && 'line-through'
              } group-hover:bg-slate-500`}
            >
              {task.title}
            </button>

            <button
              className="bg-slate-400 p-2 rounded-md cursor-pointer text-white transition duration-300 ease-in-out group-hover:bg-slate-500"
              onClick={() => SeeDetailsClick(task)}
            >
              <ChevronRightIcon />
            </button>

            <button
              className="bg-slate-400 p-2 rounded-md text-white transition cursor-pointer duration-300 ease-in-out group-hover:bg-slate-500"
              onClick={() => deleteTask(task.id)}
            >
              <FaTrash />
            </button>
          </li>
        </div>
      ))}
    </ul>
  )
}

export default Tasks
