import React from 'react'
import { useAddUser, useUsers } from '../../ReactQuery/useUsers'
import { use } from 'react';

const RQComponent1 = () => {
    const [userInfo, setUserInfo] = React.useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        website: "",
    });
    const { data, isLoading, error } = useUsers()
    const addUserMutation = useAddUser();

    console.log(data, isLoading, error);
    
if (isLoading) return null
    if (error) return null




    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
    


    const handleUsers = (e) => {
        e.preventDefault();
        console.log("Add user functionality to be implemented", userInfo);

        if(userInfo.name && userInfo.email && userInfo.username && userInfo.phone && userInfo.website) {
            console.log("All fields are filled. Proceeding to add user.");
            addUserMutation.mutate(userInfo);
        } else {
            console.log("Please fill all fields before adding a user.");
            return;
        }
    }
  return (
      <div className='container box-shadow overflow-y-auto'>
        <main className="master flex flex-row justify-start items-start p-4 gap-4">
              <div className="fetch container basis-1/2 h-[calc(100vh-2rem)] box-shadow p-4 rounded-md overflow-y-auto">
                  <h2 className='text-xl font-bold text-black mb-4'>Fetched Users</h2>
                  <div className='flex flex-row justify-evenly  items-start flex-wrap text-black '>
                      {data.map((user) => (
                            <div key={user.id} className='my-2 mx-2 p-2 box-shadow-inner h-64 w-64 border-gray-200'>
                                <p><span className='font-bold'>Name:</span> {user.name}</p>
                                <p><span className='font-bold'>Email:</span> {user.email}</p>
                                <p><span className='font-bold'>Username:</span> {user.username}</p>
                                <p><span className='font-bold'>Phone:</span> {user.phone}</p>
                                <p><span className='font-bold'>Website:</span> {user.website}</p>
                            </div>
                      ))}
                  </div>
              </div>
              <div className="add box-shadow p-4 rounded-md basis-1/2 h-[calc(100vh-2rem)] overflow-y-auto">
                  <h2 className='text-xl font-bold text-black mb-4'>Add User</h2>
                  
                  <form action=" " className='flex flex-col justify-start items-start'>
                      <input type="text" name='name' placeholder='Enter name' className='px-2 py-3 my-2 rounded-md mx-2 text-black box-shadow outline-none w-[75%]' onChange={handleChange} />
                      <input type="email" name='email' placeholder='Enter email' className='px-2 py-3 my-2 rounded-md mx-2 text-black box-shadow outline-none w-[75%]' onChange={handleChange} />
                      <input type="text" name='username' placeholder='Enter username' className='px-2 py-3 my-2 rounded-md mx-2 text-black box-shadow outline-none w-[75%]' onChange={handleChange} />
                      <input type="text" name='phone' placeholder='Enter phone' className='px-2 py-3 my-2 rounded-md mx-2 text-black box-shadow outline-none w-[75%]' onChange={handleChange} />
                      <input type="text" name='website' placeholder='Enter website' className='px-2 py-3 my-2 rounded-md mx-2 text-black box-shadow outline-none w-[75%]' onChange={handleChange} />
                      
                        <button className='bg-blue-950 py-2 my-2 px-3 rounded-md mx-2 justify-center items-center text-white' onClick={handleUsers}>Add User</button>
                  </form>
              </div>    
        </main>

        
    </div>
  )
}

export default RQComponent1
