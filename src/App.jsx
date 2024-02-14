
import './App.scss'
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from "./components/Portfolio"
import Dashboard from "./components/Dashboard"


const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    <Route path="/dashboard" element={<Dashboard />} />
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
