import React from "react";
import { useStore } from "../../zustand/useStore";
import { shallow } from "zustand/shallow";

const ZComponent1 = () => {
  var amount;

  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const incrementByAmount = useStore((state) => state.incrementByAmount);
  const enableStatus = useStore((state) => state.enableStatus);
  const setEnableStatus = useStore((state) => state.setEnableStatus);
  const reset = useStore((state) => state.reset);
  const users = useStore((state) => state.usersData);
  const fetchUsers = useStore((state) => state.fetchUsers);   
  

    // const { count, increment, decrement, reset, incrementByAmount, enableStatus, setEnableStatus, users, fetchUsers } = useStore(
    //     (store) => ({
    //         count: store.count,
    //         increment: store.increment,
    //         decrement: store.decrement,
    //         reset: store.reset,
    //         incrementByAmount: store.incrementByAmount,
    //         enableStatus: store.enableStatus,
    //         setEnableStatus: store.setEnableStatus,
    //         users: store.usersData,
    //         fetchUsers: store.fetchUsers,
    //     }), shallow 
    // );
    
    
  
  const [localCount, setLocalCount] = React.useState(0);
  const handleAmount = (e) => {
    amount = Number(e.target.value) || 0;

    console.log(amount);
    // dispatch(incrementByAmount(amount));
    setLocalCount(amount);
  };

  const handleStatus = () => {
    const status = !enableStatus;
    setEnableStatus(status);
    if (status) {
      console.log("Fetching users as status enabled");
      fetchUsers();
    } else {
        console.log("User data disabled");
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-2 text-white ">
        <div>
          <p className="text-2xl font-bold text-black my-6 box-shadow-inner rounded-md px-6 py-2">
            {" "}
            {count}{" "}
          </p>
        </div>
        <div>
          <button
            className=" bg-emerald-600 py-2 px-3 rounded-md mx-2"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className=" bg-red-600 py-2 px-3 rounded-md mx-2"
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            className="bg-slate-500 py-2 px-3 rounded-md mx-2"
            onClick={reset}
          >
            Reset
          </button>

          {/* <button className='bg-cyan-700 py-2 px-3 rounded-md mx-2' onClick={() => handlePost()}>{enablePostFetch ? "Disable Post" : "Enable Post"} </button> */}
        </div>
        <hr />
        <div className="box-shadow my-4 rounded-md">
          <input
            type="text"
            value={localCount == 0 ? "" : localCount}
            placeholder={"Enter value to increment"}
            className="px-2 py-3 my-1 rounded-md mx-2 text-black"
            onChange={handleAmount}
          />
          <button
            className="bg-blue-950 py-2 px-3 rounded-md mx-2"
            onClick={() => incrementByAmount(localCount)}
          >
            increment by amount
          </button>
        </div>

        <div>
          {/* <div>
                             <button className='bg-teal-600 py-2 px-3 rounded-md mx-2' onClick={handleData}>Fetch data</button>
                         </div> */}

          <div>
            <button
              className={`${!enableStatus ? "bg-teal-600" : "bg-gray-600"} py-2 px-3 rounded-md mx-2`}
              onClick={handleStatus}
            >
              {!enableStatus ? "Enable Data" : "Disable Data"}
            </button>
          </div>

          <div>
                             
                                   {
                                       enableStatus && users?.length > 0 ? (
                                           <div className='h-80 overflow-y-scroll border box-shadow-inner rounded-md border-gray-300 p-2 mt-4 text-black'>
                                               {users.map((user) => (
                                                   <div key={user.id} className='mb-2 p-2  border-gray-200'>
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
                                 !enableStatus ? (
                                     <p className='italic mt-4 text-xl text-red-400 animate-pulse my-10 '>User data is disabled.</p>
                                   )  : null
                                 
   
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
  );
};

export default ZComponent1;
