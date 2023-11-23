import React from 'react'
import images from './images.jpeg'

const Todo2 = () => {
    return (
        <div className='main-div'>

            <figure>
                <img src={images} alt='logo' />
                <figcaption> <h4> Add your text here </h4> </figcaption>
            </figure>

            <div className='child-div'>


                <span> <input className='inputData' type='text' name='enterTask' placeholder='Enter Task' />   </span>
                <button className='add'> Add item </button>

            </div>




        </div>
    )
}

export default Todo2
