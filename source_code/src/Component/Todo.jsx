import {useState} from "react"
import Todoitem from "./Todoitem";  

export default function Todo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    function handlesubmit(e){
        e.preventDefault();
        setTasks([...tasks, task])

    }
    return( 
    <div>
        <form onSubmit = {handlesubmit}>
            <input onChange = {(e)=>setTask(e.target.value)} type= "text" value = {task} />
            <button>Add</button>
            {tasks.map(tasks => <Todoitem key = {tasks} item={tasks} />)}
        </form>

    </div>
    )

}