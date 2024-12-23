import React, { useState } from 'react'
import { Route , Routes , } from 'react-router-dom'
import {Toaster } from 'react-hot-toast'


import HomePage from './HomePage'
import IDprintPage from './IDprint/IDprintPage'
import QRscan from './IDprint/QRscan'
import AttendanceEvent from './Register/AttendanceEvent'
import RegisterForm from './Register/RegisterForm'


// import Test from './Test'

const App = () => {
  const [eventID , setEventID] = useState()

  return (
    
    <div>
      <Routes>
        <Route path = '/:evid/home' element={<HomePage setEventID={setEventID}/>}/>
        <Route path = '/printid' element = {<IDprintPage eventID={eventID}/>} />
        <Route path = '/register' element = {<RegisterForm eventID={eventID} />} />
        <Route path = '/attendance' element = {<AttendanceEvent eventID={eventID} />} />
       
        
        <Route path = '/qrscan' element = {<QRscan/>} />
        {/* <Route path = '/test' element = {<Test/>} /> */}
    </Routes>
      
    <Toaster/>
      
      
    </div>
  )
}

export default App