import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './Layout'
import { WelcomePage } from './pages/Welcome'
import AboutPage from './pages/About'
import { BlogsPage } from './pages/Blogs'
import { Blog1 } from './pages/Blog1'
import { ProjectsPage } from './pages/Projects'

function App() {

  return (
      <Routes>
        <Route path="/" element= {<Layout/>}>
          <Route index element= {<WelcomePage/>} />
          <Route path='/about' element= {<AboutPage/>} />
          <Route path= '/blogs'  element={<BlogsPage/>} />
          <Route path= '/SolaceOfNothingness' element={<Blog1/>} />
          <Route path='/projects' element={<ProjectsPage/>} />
        </Route>
      </Routes>
  )
}

export default App
