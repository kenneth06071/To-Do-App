import Form from "./Form.jsx";
import Todolist from "./ToDoList.jsx";
import {useState} from "react"

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    return(
        <div> 
            <Form tasks={tasks} setTasks={setTasks}/>
            <Todolist tasks = {tasks}/>
        </div>    

    )

}