import { useState } from "react"
const ListUser = (props) => {
    console.log('this props', props);
    const handleRen = () => {
        props.render();
    }
    return (
        <>
            <h1>{props.listUser}</h1>
            <button onClick={handleRen}>close</button>
        </>
    )
}
export default ListUser