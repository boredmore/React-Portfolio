import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Me from './Me'
import Projects from './Projects/Projects'
import Work from './Work'
import Education from './Education/Education'

function Pages({ user }) {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Me user={user} />} />
            <Route path='/projects' element={<Projects user={user} />} />
            <Route path='/Work' element={<Work user={user} />} />
            <Route path='/education' element={<Education user={user} />} />
        </Routes>
    </Router>
  )
}

export default Pages