import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByValue, increment, reset } from './counterSlice'


const CounterView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()


  return (
    <div>
      <h1 className='mb-6'>Count : {count}</h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
      <button onClick={()=>{dispatch(increaseByValue(5))}}> + 5 </button>
    </div>
  )
}

export default CounterView
