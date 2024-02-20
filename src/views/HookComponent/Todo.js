import { useState } from "react"
import './Todo.scss'
import ListUser from './ListUser'
const Todo = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [listUser, setListUser] = useState([]);
    const [render, setRender] = useState(false);


    const handleData = () => {
        // if (!name) { toast.error('Title Missing'); return };
        // let newtodo = { id: '1', title: name }
        // set lại state của listUser bằng copy lại listuser và thêm vào state email.
        setListUser([...listUser, email]);
        setEmail('');
        setRender(true);
    }
    const handleRe = () => {
        alert('props is this');
    }
    // console.log("data", email);
    console.log('list user', listUser);
    console.log('render', render);
    return (
        <>
            <div className="h-[675px] bg1 flex justify-center items-center ">
                <div className="w-[400px] h-[500px] bg2 rounded-2xl flex flex-col ">
                    <div className="text-white justify-center flex text-3xl py-9 ">Add New User</div>
                    <div className="flex justify-center ">
                        <div className="relative mb-3 w-80" data-te-input-wrapper-init>
                            <input
                                onChange={(ev) => { setEmail(ev.target.value) }}
                                type="email"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            />
                            <label
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email
                            </label>
                        </div>
                    </div>
                    {/* <div className="flex justify-center ">
                        <div className="relative mb-3 w-80" data-te-input-wrapper-init>
                            <input
                                onChange={(ev) => { setPassword(ev.target.value) }}
                                type="password"
                                className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            />
                            <label
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Password
                            </label>
                        </div>
                    </div> */}
                    <div className="w-full  flex justify-center mt-7">
                        <button onClick={() => handleData()} className="text-black w-72 py-2 rounded-xl bg-white text-center">Add</button>
                    </div>

                    {/* <div className="flex justify-center">
                        <p className="text-white">Dont have account?</p>
                        <p className="text-white font-bold">Register</p>
                    </div> */}
                </div>
            </div>
            {
                render && <ListUser listUser={listUser} render={handleRe} />
            }

        </>
    )
}
export default Todo