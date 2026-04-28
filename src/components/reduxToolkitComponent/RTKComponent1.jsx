import React from 'react'
import { increment, decrement, incrementByAmount, reset } from '../../redux-toolkit/slices/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { enableStatus, fetchUsers } from '../../redux-toolkit/slices/UserSlice';

const RTKComponent1 = () => {
    var amount;
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const users = useSelector((state) => state.users.data);
    const usersStatus = useSelector((state) => state.users.status);
    const enableStatusState = useSelector((state) => state.users.enableStatus);

    console.log("users ", users, usersStatus);

    const [localCount, setLocalCount] = React.useState(0);

    const handleAmount = (e) => {
        amount = Number(e.target.value) || 0;

        console.log(amount)
        // dispatch(incrementByAmount(amount));
        setLocalCount(amount);
    }


    const handleData = () => {
        // Dispatch action to fetch data
        // dispatch(fetchUsers());
    }

    const handleStatus = () => {
        const status = !enableStatusState;
        dispatch(enableStatus(status));
        if (!status) {
            console.log("Fetching users as status enabled");
            dispatch(fetchUsers());
        }
    }

  return (
      <>
         <div>
          <div className='flex flex-col justify-center items-center p-2 text-white '>
              <div>
                    <p className='text-2xl font-bold text-[hsl(var(--foreground))] my-6 glass-card rounded-md px-6 py-2'> {count} </p>
              </div>
              <div>
                  
              <button className=' bg-emerald-600 py-2 px-3 rounded-md mx-2' onClick={()=> dispatch(increment())}>Increment</button>
                      <button className=' bg-red-600 py-2 px-3 rounded-md mx-2' onClick={() => dispatch(decrement())}>Decrement</button>
                      <button className='bg-slate-500 py-2 px-3 rounded-md mx-2' onClick={() => dispatch(reset())}>Reset</button>
                      
                   {/* <button className='bg-cyan-700 py-2 px-3 rounded-md mx-2' onClick={() => handlePost()}>{enablePostFetch ? "Disable Post" : "Enable Post"} </button> */}
                  </div>
                <hr/>
                  <div className='box-shadow my-4 rounded-md'>
                      <input type="text" value={localCount == 0 ? "" : localCount} placeholder={"Enter value to increment"} className='px-4 py-3 my-1 rounded-xl mx-2 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] box-shadow outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all' onChange={handleAmount}/>
                      <button className='bg-blue-950 py-2 px-3 rounded-md mx-2' onClick={() => dispatch(incrementByAmount(localCount))}>increment by amount</button>
                  </div>


                  <div>
                      {/* <div>
                          <button className='bg-teal-600 py-2 px-3 rounded-md mx-2' onClick={handleData}>Fetch data</button>
                      </div> */}

                      <div>
                          <button className={`${!enableStatusState ? "bg-teal-600" : "bg-gray-600"} py-2 px-3 rounded-md mx-2`} onClick={handleStatus}>{ !enableStatusState ? "Enable Data" : "Disable Data"}</button>
                      </div>
               
                      <div>
                          
                                {
                                    enableStatusState && users?.length > 0 ? (
                                        <div className='h-80 overflow-y-scroll border glass-card rounded-md border-[hsl(var(--border))] p-2 mt-4 text-[hsl(var(--foreground))]'>
                                            {users.map((user) => (
                                                <div key={user.id} className='mb-2 p-2 border-b border-[hsl(var(--border))] opacity-80'>
                                                    <p><b>User ID:</b> {user.id}</p>
                                                    <p><b>Name:</b> {user.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null
                                }
                      </div>
                      
                      <div>
                          {
                              !enableStatusState ? (
                                  <p className='italic mt-4 text-xl text-red-400 animate-pulse my-10 '>User data is disabled.</p>
                                ) : (usersStatus === 'loading' ? <p className='italic  mt-4 text-black animate-pulse-slow'>Loading user data...</p> : null)
                              

                          }
                      </div>
                  
                  {/* {
                      enablePostFetch === false ? (
                          <p className='italic mt-4 text-black my-10 animate-fade-in-up'>Post data is disabled.</p>
                      ) : null
                  } */}

              </div>
        </div>
    </div>
      </>
  )
}

export default RTKComponent1
