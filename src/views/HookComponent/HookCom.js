import { useState } from "react"
const HookCom = () => {
    const handleOnclickme = () => {
        setName(nameinput)
        // khi sử dụng class com thì ta dùng setstate còn ở hook com thì t set'tên biến'  để re-render
    }
    const handleInput = (e) => {
        setNameInput(e.target.value)
    }
    let [name, setName] = useState('')
    let [nameinput, setNameInput] = useState('')


    // phần tử đầu tiên là giá trị của biến, phần tử thứ 2 là funtion xử lý khi biến có sự thay đổi
    return (
        <>
            <h1>hello {name}</h1>
            <input value={nameinput} type="text" onChange={(e) => { handleInput(e) }} />
            <button onClick={() => handleOnclickme()}>Sumbit</button>
        </>
    )
}
export default HookCom