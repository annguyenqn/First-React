import { useState } from "react"
import { toast } from 'react-toastify';

import AddHook from "./AddHook"
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
        // console.log(name);
    }
    // phần tử đầu tiên là giá trị của biến, phần tử thứ 2 là funtion xử lý khi biến có sự thay đổi
    return (
        <>
            <div className="flex flex-col ">
                <div className="flex justify-center  gap-2 mt-2">
                    <input className="caret-black rounded text-base text-black" value={name} type="text" onChange={(e) => { handleInput(e) }} />
                    <button className="bg-teal-400 text-base rounded text-center w-20" onClick={(e) => handleOnclickme(e)}>Summit</button>
                </div>
                <div className="flex justify-center h-56 w-full  self-center ">
                    <div className="flex flex-col items-start mt-4 w-36  mr-32 ">
                        {toDos.map(todo => {
                            return (
                                <li className=" " key={todo.id}> {todo.title} </li>
                            )
                        })}
                    </div>

                </div>
            </div>
            {/* <AddHook /> */}
        </>
    )
}
export default HookCom