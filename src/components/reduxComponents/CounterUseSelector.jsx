import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT, DECREMENT } from '../../redux/actions/action-types';
import { fetchPostData } from '../../redux/actions/actions';

const CounterUseSelector = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state?.countState?.count) ?? 0;
    const getPostData = useSelector((state) => state?.countState?.posts) ?? [];
    const [enablePostFetch, setEnablePostFetch] = React.useState(false);


    const handlePost = () => {
        setEnablePostFetch(prev => !prev);
    }

    React.useEffect(() => {
        if (enablePostFetch) {
            dispatch(fetchPostData());  //for apis we need to only dispatch the action creator and not the action type
        }
    }, [enablePostFetch]);
  return (
    <div>
          <div className='flex flex-col justify-center items-center p-2 text-white '>
              <div>
                    <p className='text-2xl font-bold text-black my-6 box-shadow-inner rounded-md px-6 py-2'> {count ?? 0} </p>
              </div>
              <div>
                  
              <button className=' bg-emerald-600 py-2 px-3 rounded-md mx-2' onClick={()=> dispatch({ type: INCREMENT })}>Increment</button>
                  <button className=' bg-red-600 py-2 px-3 rounded-md mx-2' onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
                   <button className='bg-cyan-700 py-2 px-3 rounded-md mx-2' onClick={() => handlePost()}>{enablePostFetch ? "Disable Post" : "Enable Post"} </button>
              </div>


              <div>
               
                  {
                      enablePostFetch && getPostData?.length > 0 ? (
                          <div className='h-80 overflow-y-scroll border box-shadow-inner rounded-md border-gray-300 p-2 mt-4 text-black'>
                              {getPostData.map((post) => (
                                  <div key={post.id} className='mb-2 p-2  border-gray-200'>
                                      <p><b>Post ID:</b> {post.id}</p>
                                      <p><b>Title:</b> {post.title}</p>
                                  </div>
                              ))}
                          </div>
                      ) : (enablePostFetch ? <p className='italic  mt-4 text-black animate-pulse-slow'>Loading post data...</p> : null
                              
                      )
                  }
                  
                  {
                      enablePostFetch === false ? (
                          <p className='italic mt-4 text-black my-10 animate-fade-in-up'>Post data is disabled.</p>
                      ) : null
                  }

              </div>
        </div>
    </div>
  )
}

export default CounterUseSelector
