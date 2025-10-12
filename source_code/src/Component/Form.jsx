import {useState} from "react"
import style from './form.module.css'
export default function Form({ tasks, setTasks }) {
    const [task, setTask] = useState("");
    function handlesubmit(e){
        e.preventDefault();
        setTasks([...tasks, task])

    }
    return(
        <div>
            <form className={style.todoform} onSubmit = {handlesubmit}>
                <div className={style.inputcontainer}>
                    <input className={style.input} onChange = {(e)=>setTask(e.target.value)} type= "text" value = {task} placeholder="Enter To-do item"/>
                    <button className={style.button}>Add</button>
                </div>
            </form>

        </div> 
    ) 
    
}