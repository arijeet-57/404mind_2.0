import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './Layout'
import { WelcomePage } from './pages/Welcome'
import AboutPage from './pages/About'
import { BlogsPage } from './pages/Blogs'
import { Blog1 } from './pages/Blog1'

function App() {

  return (
      <Routes>
        <Route path="/" element= {<Layout/>}>
          <Route index element= {<WelcomePage/>} />
          <Route path='/about' element= {<AboutPage/>} />
          <Route path= '/blogs'  element={<BlogsPage/>} />
          <Route path= '/SolaceOfNothingness' element={<Blog1/>} />
        </Route>
      </Routes>
  )
}

export default App
