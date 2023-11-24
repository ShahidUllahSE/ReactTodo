import React, { useState } from 'react'
import images from './images.jpeg'

const Todo2 = () => {

    const [input, setInput] = useState('');
    const [items, setItems] = useState([])

    const handleChange = (e) => {

        setInput(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setItems([...items, input])
        setInput('')
    }

    const handleDelete = (id) => {
        const updatedItems = items.filter((elem, ind) => {

            return ind !== id;
        })

        setItems(updatedItems)
    }

    const handleReset = () => {

        setItems([])
    }

    return (

        <div className='main-div'>

            <figure>
                <img src={images} alt='logo' />
                <figcaption> <h4> Add your text here </h4> </figcaption>
            </figure>

            <div className='child-div'>
                <form onSubmit={handleAdd}>
                <span> <input className='inputData' type='text' name='enterTask' placeholder='Enter Task' value={input} onChange={handleChange} />   </span>
                <button className='add' onClick={handleAdd} > Add item </button>
                <button className='add' onClick={handleReset} > Reset </button>

                </form>
              
            </div>

            {

                items.map((item, ind) => {

                    return (

                        <div key={ind}>
                            <h3>{item}</h3>
                            <button className='add' onClick={() => handleDelete(ind)}> Delete Item </button>
                        </div>

                    )
                })

            }

        </div>
    )
}

export default Todo2
