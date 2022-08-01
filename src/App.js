import './App.css';
import { Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import Transection from './components/Transection';
import FormAddList from './components/FormAddList';


function App() {
  const initState = [
    {id : 1, list : "MetaverseXR Todo List 1"},
    {id : 2, list : "MetaverseXR Todo List 2"},
    {id : 3, list : "MetaverseXR Todo List 3"}
  ]

  const [items, setItem] = useState(initState)
  const onAddNewItem = (newItem) => {
    setItem((prevItem) => {
      return [...prevItem,newItem]
    })
  }


  const removeItem = (id) => {
    console.log(id)
    const remove = [...items].filter(items => items.id !== id);

    setItem(remove)
  }

  const clearAll = () =>{
    setItem([])
  }

 

  
  

  return (
      <Container className='shadow p-3 rounded mt-3' 
        style={{width: '450px'}}>
        <div>
          <FormAddList onAddItem = {onAddNewItem} 
            itemLenght = {items}/>
          <div className='border-top mt-3 mb-3'>
              <Transection items = {items} 
                removeItem = {removeItem}/>
          </div>
          <div className='clear'>
              <Button onClick={clearAll} 
                className='mt-3 w-100 border-0' 
                style={{backgroundImage: 'linear-gradient(#D93E41,50%,#EB4790)',
                  borderRadius:'1rem/50%'}}>Clear all</Button>
          </div>
        </div>
      </Container>
  );
}

export default App;
