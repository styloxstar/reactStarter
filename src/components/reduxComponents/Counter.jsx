import React from 'react'
import CounterMapStateToProps from './CounterMapStateToProps'
import CounterUseSelector from './CounterUseSelector'

const Counter = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-4'>
          <div className='basis-1/2 box-shadow-inner p-3 h-[calc(85vh-16px)] rounded-lg flex flex-col  items-center '>
              <p className='text-2xl font-bold underline m-2 animate-bounce-slow'>Redux Counter using useSelector and useDispatch</p>
              <CounterUseSelector/>
          </div>
          
          <div className='basis-1/2 box-shadow-inner p-3 h-[calc(85vh-16px)] rounded-lg flex flex-col  items-center'>
              <p className='text-2xl font-bold underline m-2 animate-bounce-slow'>Redux Counter using mapStateToProps and mapDispatchToProps</p>
              <CounterMapStateToProps/>
        </div>
    </div>
  )
}

export default Counter
