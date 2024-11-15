import React from 'react'
import { Route , Routes} from 'react-router-dom'

// middle ware
// import { useQuery } from '@tanstack/react-query'
// id printing
import IDprintPage from './IDprint/IDprintPage'
import QRscan from './IDprint/QRscan'
import AttendanceEvent from './Register/AttendanceEvent'
import RegisterForm from './Register/RegisterForm'
import CertificatePrint from './IDprint/CertificatePrint'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element='home page'/>
        <Route path = '/printid' element = {<IDprintPage />} />
        <Route path = '/qrscan' element = {<QRscan/>} />
        <Route path = '/register' element = {<RegisterForm/>} />
        <Route path = '/attendance' element = {<AttendanceEvent/>} />
        <Route path = '/certificate' element = {<CertificatePrint/>} />
    </Routes>
      
      
  
    </div>
  )
}

export default App