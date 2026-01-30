import React, { useEffect, useState } from 'react'
import ExampleContext from '../ExampleContext';
import axios from 'axios';

const ExampleProvider = ({ children }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(15)
    const [postData, setPostData] = useState([])

    const [enablePost, setEnablePost] = useState(false)


    const changeName = (updatedName) => {
        setName((prev) => updatedName)
    }


    useEffect(()=> {
        if (enablePost ) {
            getPostData()
        }

        () => {
            setPostData([])
        }
    }, [enablePost])
    


    const changeAge = (updatedAge) => {
        setAge((prev) => updatedAge)
    }


    // Fetch post data from API
    const getPostData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
            if (res?.status === 200) {
                setPostData(res?.data);
            } else {
                console.log("failed");
            }
        } catch (error) {
            console.log("error fetching data", error);
        }
    };




    const exampleValue = {
        name,
        age,
        changeName,
        changeAge,
        postData,
        enablePost,
        setEnablePost
    };
  return (
    <div>
          <ExampleContext.Provider value={exampleValue}>
              { children}
          </ExampleContext.Provider>
    </div>
  )
}

export default ExampleProvider
