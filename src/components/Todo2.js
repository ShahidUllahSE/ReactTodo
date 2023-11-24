import React, { useState } from 'react'
import images from './images.jpeg'
import { FaTrashAlt } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import { GrPowerReset } from "react-icons/gr";

const Todo2 = () => {

    const [ input, setInput ] = useState('');
    const [ items, setItems ] = useState ( [] )
    const [ input2, setInput2 ] = useState ('')
    const [ time, setTime ] = useState ( [] )

    const handleChange = (e) => {

        setInput ( e.target.value )
    }

    const handleChange2 = (e) => {
        setInput2 ( e.target.value )
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setItems ( [...items, input] )
        setTime ( [...time, input2] )
        setInput ('')
        setInput2 ('')
    }

    const handleDelete = (id) => {
        const updatedItems = items.filter((elem, ind) => {

            return ind !== id;
        })
        const updatedTime = time.filter ( ( elem, ind ) => {
            return ind !== id;
        })

        setItems ( updatedItems )
        setTime ( updatedTime )
    }

    const handleReset = () => {

        setItems ( [] )
        setTime ( [] )
    }
    return (

        <div className='main-div'>

                 <figure className='image'>
                     <img src={images} alt='logo' />
                     <figcaption> <h4> Add your Tasks here </h4> </figcaption>
                 </figure>

         <div className='child-div'>
                    <form onSubmit = { handleAdd } >
                    <span> <input className='inputData' type='text' name='enterTask' placeholder='Enter Task' value={input} onChange={handleChange} />
                        {/* <FaPlus className='trash' onClick={handleAdd} /> */}
                    </span>
                    {/* can also use Reset react icon instead of button */}
                    {/* <GrPowerReset className='trash' onClick={handleReset} /> */}

                </form>

                <div>

                    <form onSubmit = { handleAdd } >

                    <input className='inputData' title='Enter Task Duration Here' type='text' name='enterDuration' placeholder='Duration Of task in Mnts' value={input2} onChange={handleChange2} />
                </form>

                </div>

                <button className='add' onClick={handleAdd} > Add item </button>

                <button className='add' onClick={handleReset} > Reset </button>

            </div>

            {
                items.map((item, ind) => {

                    return (

                        <div className='ListItems' key={ind}>

                            <ul>
                                <li>

                                    {item} - {time[ind]} mins

                                    <FaTrashAlt className='trash' onClick={() => handleDelete(ind)} />
                                </li>
                            </ul>

                                {/* can also use button for reset instead of trash icon */}
                            {/* <h3>{item}</h3> */}
                            {/* <button className='add' onClick={() => handleDelete(ind)}> Delete Item </button> */}


                        </div>

                    )
                })}

        </div>
    )
}

export default Todo2
