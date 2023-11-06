import './inputPanel.css'
const InputPanel = ({updateData, data}) => {
    const a = (e) => {
        updateData(e.target.value) ;
    }
    const b = () => updateData('')
    return (
        <>
        <label htmlFor="editor">Панель вводу</label>
            <textarea name="" id="editor" cols="30" rows="10" onClick={b} onChange={a} defaultValue={data} >

            </textarea>
        </>


    )

}
export default InputPanel