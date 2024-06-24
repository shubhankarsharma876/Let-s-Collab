import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navigation from './pages/navigation/Navigation'
import ProjectDetails from './pages/project details/ProjectDetails'
import IssueDetails from './pages/issueDetails/IssueDetails'
import Subscription from './pages/subscription/Subscription'

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
        <Route path='/upgrade_plan' element={<Subscription />} />


      </Routes>
    </>
  )
}

export default App
