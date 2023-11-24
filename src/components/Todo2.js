import React, { useState } from 'react'
import images from './images.jpeg'

const Todo2 = () => {

    const [input, setInput] = useState('');
    const [items, setItems] = useState([])
    const handleChange = (e) => {

        setInput(e.target.value)

    }

    const handleAdd = (e) => {
        setItems([...items, input])
        setInput('')


    }

    const handleDelete = (id) => {
        const updatedItems = items.filter((elem, ind) => {

            return ind !==id;
        })

        setItems(updatedItems)
    }

    return (

        <div className='main-div'>

            <figure>
                <img src={images} alt='logo' />
                <figcaption> <h4> Add your text here </h4> </figcaption>
            </figure>

            <div className='child-div'>


                <span> <input className='inputData' type='text' name='enterTask' placeholder='Enter Task' value={input} onChange={handleChange} />   </span>
                <button className='add' onClick={handleAdd} > Add item </button>
               



            </div>





            {

      items.map((item, ind) => {
                    
                    
                    
                    return ( 
                        <div key={ind}> 
          
                    
                    <h3>{item}</h3>
                    {/* // <i className='far fa-trash-alt add-btn' title='deleteItem' onClick={()=>handleDelete(ind)}></i> */}
                     <button className='add' onClick={() => handleDelete(ind)}> Delete Item </button>
                    </div>

                    )


                })

            }



        </div>
    )
}

export default Todo2
