import { useState } from 'react'
import './App.css'
import AppRoutes from './routes'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Navbar/> 
      <main className='flex flex-row justify-center items-start gap-4 m-3'>
        <div className="sidebar basis-1/6">
          <div className="container box-shadow">
              <Sidebar/>
            </div>
        </div>
        <div className="mainBody basis-5/6">
          <AppRoutes />
        </div>

      </main>
    </>
  )
}

export default App
