import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import {v4} from "uuid";
import clsx from "clsx";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar developer",
      iscompleted: false,
    },
    {
      id: 2,
      title: "Ler livros",
      description: "Ler livros de desenvolvimento pessoal",
      iscompleted: false,
    },
    {
      id: 3,
      title: "Exercitar-se",
      description: "Fazer exercícios físicos regularmente",
      iscompleted: false,
    },
  ]);

 
  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar essa tarefa
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      } else {
        //não preciso atualizar essa tarefa
        return task;
      }
    });
    setTasks(newTasks);


  
  }
  
  function onADDTasksSubmit (newTask) {
    const newTasks = {
    id: v4(),
    title:newTask.title,
    description:newTask.description,
    iscompleted:false ,
  };
  setTasks([...tasks, newTasks]);
  }

  return (
    <div className={clsx( "bg-slate-500 flex justify-center p-6", tasks.length <= 8 ? "w-screen h-screen": "w-full h-full")} >
      <div className="w-[500px] space-y-4">
        <h1 className={clsx ("text-3xl text-slate-100 font-bold text-center")}>
          Gerenciador de Tarefas
        </h1>
        <AddTask 
        onADDTasksSubmit={onADDTasksSubmit}
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
