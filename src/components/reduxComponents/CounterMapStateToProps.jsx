import React from 'react'
import { connect } from 'react-redux'
import { DECREMENT, INCREMENT } from '../../redux/actions/action-types';
import { fetchPostData } from '../../redux/actions/actions';

const CounterMapStateToProps = (props) => {
    const [enablePostFetch, setEnablePostFetch] = React.useState(false);
    const getPostData = props.getPostData ?? [];

    const handlePost = () => {
        setEnablePostFetch(prev => !prev);
    }

       React.useEffect(() => {
            if (enablePostFetch) {
                props.fetchPosts();
            }
        }, [enablePostFetch]);
  return (
    <div>
         <div className='flex flex-col justify-center items-center p-2 text-white '>
              <div>
                    <p className='text-2xl font-bold text-black my-6 box-shadow-inner rounded-md px-6 py-2'> {props.count ?? 0} </p>
              </div>
              <div>
                  
              <button className=' bg-emerald-600 py-2 px-3 rounded-md mx-2' onClick={()=> props.increment()}>Increment</button>
                  <button className=' bg-red-600 py-2 px-3 rounded-md mx-2' onClick={() => props.decrement()}>Decrement</button>
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
                          <p className='italic mt-4 text-black my-10 animate-pulse-slow'>Post data is disabled.</p>
                      ) : null
                  }

              </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        count: state?.countState?.count ?? 0,
        getPostData: state?.countState?.posts ?? []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: INCREMENT }),
        decrement: () => dispatch({ type: DECREMENT }),
        fetchPosts: () => dispatch(fetchPostData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterMapStateToProps)