import {useState} from "react"

export default function Todo() {
    const [task, setTask] = useState("");
    return( 
    <div>
        <form>
            <input onChange = {(e)=>setTask(e.target.value)} type= "text" value = {task} />
            <button>Add</button>
        </form>

    </div>
    )

}