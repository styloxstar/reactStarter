import React from 'react'
import useExample from '../../hooks/contextHooks/useExample'

const ContextComponent1 = () => {

    const { name, age, enablePost, postData } = useExample();
  return (
    <div className=' p-2 w-[100%] shadow-md h-[calc(100%-2rem)]'>
          <h2 className='my-2'>Context Component 1</h2>
          <p className="text-lg mx-2"><b>Name:</b> {name}</p>
          <p className="text-lg mx-2"><b>Age:</b> {age}</p>       
    </div>
  )
}

export default ContextComponent1
