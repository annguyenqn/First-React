const AddHook = () => {
    const handleOnclickme = (e) => {


        // khi sử dụng class com thì ta dùng setstate còn ở hook com thì t set'tên biến'  để re-render
    }
    const handleInput = (e) => {

    }
    return (
        <>
            <input value={''} type="text" onChange={(e) => { handleInput(e) }} />
            <button onClick={(e) => handleOnclickme(e)}>Sumbit</button>

        </>
    )
}
export default AddHook