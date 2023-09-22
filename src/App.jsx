import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Home from './pages/Home'
import News from './pages/News'
import Live_Cam from './pages/Live_Cam'
import Photo from './pages/Photo'
import Contact from './pages/Contact'
import Nav from './components/nav'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path='/' element= { <Nav/> }>
              <Route index element = { <Home /> } />
              <Route path= '/News' element = { <News/> } />
              <Route path= '/Live_Cam' element = { <Live_Cam/> } />
              <Route path= '/Photo' element = { <Photo/> } />
              <Route path= '/Contact' element = { <Contact/> } />

          </Route>
    )
  )

function App() {
  return (
    <>
      <RouterProvider router = {router}  />
    </>
  )
}

export default App
