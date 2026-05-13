import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export const TodoList = ({ data , DeleteFunc,checked, CheckedFunc})=>{
    return(
        <li>
                <span className={checked? "checkList" : "notCheck"}>{data}</span>
                <div className="actions">
                <button><MdCheck className="check" onClick={()=>CheckedFunc(data)} /></button>
                <button className="delete" onClick={() => DeleteFunc(data)}><MdDeleteForever /></button>
                </div>
                </li>
    )
}