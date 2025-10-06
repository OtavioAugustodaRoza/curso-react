import { useState } from "react";
function AddTask({onADDTasksSubmit}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  return (
    <div className="space-y-4 p-6 bg-fuchsia-200 rounded-md shadow flex flex-col transition duration-300 ease-in-out hover:transform hover:scale-105  ">
      <input
        type="text" 
        placeholder="Digite o título da tarefa"
        required
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(Event) => setTitle(Event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        required
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(Event) => setDescription(Event.target.value)}
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out hover:bg-slate-600" onClick={() =>{
        if(title.trim() === "" || description.trim() === "") {
          alert("Por favor, preencha todos os campos");
          return;
        }else{
        onADDTasksSubmit({title, description});
        setTitle("");
        setDescription("");
      }}}>
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTask;
