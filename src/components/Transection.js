import { BsFillTrashFill } from "react-icons/bs";
import Item from './Item'

const Transection = (props) => {
    console.log(props)
    const {items,removeItem} = props
    console.log(items)
    console.log(removeItem)

    return items.map((element) => (
    <div className='d-flex justify-content-between mt-3 shadow-sm py-2 align-items-center border-0' 
        style={{borderRadius:'1rem/50%'}}>
        <Item id = {element.id} 
            list = {element.list}/>
        <button onClick={() => removeItem(element.id)} 
            className='rounded-circle border-0 py-1 px-2'
            style={{backgroundImage: 'linear-gradient(#D93E41,50%,#EB4790)'}}>
        <BsFillTrashFill style={{color:'white'}}/>
        </button>
    </div>
    ))
                

}


export default Transection