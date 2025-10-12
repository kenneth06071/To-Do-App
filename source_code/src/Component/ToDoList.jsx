import Todoitem from "./Todoitem";  
import style from './Todolist.module.css'
export default function Todolist({ tasks }){
    return(
        <div>
            <div className ={style.Todolist}>{tasks.map(tasks => <Todoitem key = {tasks} item={tasks} />)}</div>

        </div>
    )
}