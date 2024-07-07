import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navigation from './pages/navigation/Navigation'
import ProjectDetails from './pages/project details/ProjectDetails'
import IssueDetails from './pages/issueDetails/IssueDetails'
import Subscription from './pages/subscription/Subscription'
import Auth from './pages/auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getUser } from './redux/Auth/Action'
import { store } from './redux/Store'
import { fetchProjects } from './redux/project/Action'
import UpgradeSuccess from './pages/subscription/UpgradeSuccess'
import AcceptInvitation from './pages/projects/AcceptInvitation'

function App() {
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store)

  useEffect(()=>{
    dispatch(getUser())
    dispatch(fetchProjects({}))
  },[auth.jwt])

  

  return (
    
    <>
    {auth.user?<div>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
        <Route path='/upgrade_plan' element={<Subscription />} />
        <Route path='/upgrade_plan/success' element={<UpgradeSuccess />} />
        <Route path='/accept_invitation' element={<AcceptInvitation />} />

      </Routes>
    </div>:<Auth/>}
    </>
  )
}

export default App
