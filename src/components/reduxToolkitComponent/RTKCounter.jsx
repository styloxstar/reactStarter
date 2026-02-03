import React from 'react'
import RTKComponent1 from './RTKComponent1'

const RTKCounter = () => {
  return (
    <div>
            <div className='flex flex-row justify-center items-center gap-4'>
          <div className='basis-1/2 box-shadow-inner p-3 h-[calc(85vh-16px)] rounded-lg flex flex-col  items-center '>
              {/* <p className='text-2xl font-bold underline m-2 animate-bounce-slow'>Redux Counter using useSelector and useDispatch</p> */}
              <RTKComponent1/>
          </div>
          
          {/* <div className='basis-1/2 box-shadow-inner p-3 h-[calc(85vh-16px)] rounded-lg flex flex-col  items-center'>
              <p className='text-2xl font-bold underline m-2 animate-bounce-slow'>Redux Counter using mapStateToProps and mapDispatchToProps</p>
              <CounterMapStateToProps/>
        </div> */}
    </div>
    </div>
  )
}

export default RTKCounter
