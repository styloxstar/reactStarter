import React from 'react'
import useExample from '../../hooks/contextHooks/useExample';

const ContextApiComponent = () => {

    const {enablePost, postData} = useExample();
  return (
    <div>
        <div className='w-[100%] p-2 rounded shadow-lg'>
              <h3 className='text-md mb-2'>Post Data from API {enablePost ? '(Enabled)' : '(Disabled)'}</h3>
                {enablePost ? (
                    <div className='h-80 overflow-y-scroll border border-gray-300 p-2'>
                      {postData && postData.length > 0 ? (  
                          postData.map((post) => (
                              <div key={post.id} className='mb-2 p-2  border-gray-200'>
                                  <p><b>Post ID:</b> {post.id}</p>
                                  <p><b>Title:</b> {post.title}</p>
                              </div>
                          ))
                      ) : (
                          <p>No post data available.</p>
                      )}
                  </div>
              ) : (
                  <p className='italic text-gray-500'>Post data is disabled.</p>
              )}
            </div>
    </div>
  )
}

export default ContextApiComponent
