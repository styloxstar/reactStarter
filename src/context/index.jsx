import Navbar from "../components/layout/Navbar"
import ExampleProvider from "./providers/ExampleProvider"
import ContextComponent1 from "../components/contextComponents/ContextComponent1"
import ContextComponent2 from "../components/contextComponents/ContextComponent2"
import ContextApiComponent from "../components/contextComponents/ContextApiComponent"

const index = () => {
  return (
      <div className="mx-3 h-[calc(100vh-32px)]">
        
          <div className="mainBody container box-shadow">
              
             <h1 className='text-4xl text-center'>Context API</h1>
      <ExampleProvider>
        <div className='flex flex-row justify-center items-center mx-2 h-[40vh] gap-4'>

          <div className='basis-1/4'>
          <ContextComponent1/>
          </div>
          <div className='basis-1/4'>
             <ContextComponent2 /> 
          </div>
          <div className='basis-1/2'>
            <ContextApiComponent/>
          </div>
         
          
          </div>
      </ExampleProvider>
          </div>
    </div>
  )
}

export default index
