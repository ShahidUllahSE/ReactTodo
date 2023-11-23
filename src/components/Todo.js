import React from 'react'
import images from './images.jpeg'
import { FaPlusSquare } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const Todo = () => {
  return (
    <>
    <div className='main-div'>

        <div className=' child-div ' >  
        
        <figure>
            <img src={images} alt='logo'/>
            <figcaption> <h4> Add your text here </h4> </figcaption>
        </figure>
        <div className='additem'>
    <input type='text' placeholder='type your text here to add'/>
    <FaPlusSquare />
    {/* <i class="fa-solid fa-plus add-btn" title='add item'></i> */}
  
    




        </div>

        <div className='showItems'>

<div className='eachItem'>
    <p>Apple</p>
    <FaTrash />
</div>



        </div>
        
        
        
         </div>
    </div>
    
    
    
    </>
  )
}

export default Todo
