import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './Layout'
import { WelcomePage } from './pages/Welcome'
import AboutPage from './pages/About'
import { BlogsPage } from './pages/Blogs'

function App() {

  return (
      <Routes>
        <Route path="/" element= {<Layout/>}>
          <Route index element= {<WelcomePage/>} />
          <Route path='/about' element= {<AboutPage/>} />
          <Route path= '/blogs'  element={<BlogsPage/>} />
        </Route>
      </Routes>
  )
}

export default App
