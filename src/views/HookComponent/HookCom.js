import { useState } from "react"
import { toast } from 'react-toastify';
import AddHook from "./AddHook";
const HookCom = () => {
    let [toDos, setToDo] = useState([
        {
            id: '1', title: 'LearnReactJs'
        },
        {
            id: '2', title: 'LearnAngular'
        }
    ])
    const handleOnclickme = (e) => {
        if (!name) { toast.error('Title Missing'); return };
        let newtodo = { id: '1', title: name }
        setToDo([...toDos, newtodo])
        setName('')
        // khi sử dụng class com thì ta dùng setstate còn ở hook com thì t set'tên biến'  để re-render
    }
    let [name, setName] = useState('')
    const handleInput = (e) => {
        setName(e.target.value)
    }
    // phần tử đầu tiên là giá trị của biến, phần tử thứ 2 là funtion xử lý khi biến có sự thay đổi
    return (
        <>
            <div className="todo-Container">
                {toDos.map(todo => {
                    return (
                        <li className="todo-Child" key={todo.id}> {todo.title} </li>
                    )
                })}
                <input value={name} type="text" onChange={(e) => { handleInput(e) }} />
                <button onClick={(e) => handleOnclickme(e)}>Sumbit</button>

            </div>
            {/* <AddHook /> */}
        </>
    )
}
export default HookCom