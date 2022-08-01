import { useEffect, useState } from "react"

const FormAddList = (props) => {
    console.log(props)
    const [list,setList] = useState('')
    const [formValid,setFormvalid] = useState(false)
    const lastItem = props.itemLenght.length
    
    const inputList = (event) =>{
        setList(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()
        const item = {
            id : lastItem === 0 ? 1 : props.itemLenght[lastItem-1].id+1,
            list : list
        }
        props.onAddItem(item);
        setList('');
    }

    useEffect(() =>{
        const checkItem = list.trim().length > 0
        setFormvalid(checkItem)
    },[list])

    return(
        <form className='d-flex' onSubmit={saveItem}>
            <input type="text" 
                placeholder="Enter to do list" 
                onChange={inputList} 
                value={list} className="form-control shadow-sm" 
                style={{marginRight: '1rem',
                    borderRadius:'1rem/50%'}}/>
            <button type="submit" 
                disabled={!formValid} 
                style={{padding:".5rem 2rem",
                    border:'0',
                    borderRadius:'1rem/50%', 
                    alignItem:'center',
                    backgroundImage: 'linear-gradient(#5B42F3,#00DDEB)',
                    fontSize:'1rem',
                    color:'white'}}>+</button>
        </form>
    )
}

export default FormAddList