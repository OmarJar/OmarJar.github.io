import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Layout from './component/Layout'
import "./App.scss"
import About from './component/About'
import Work from './component/Work'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <div className="page"><Home /></div>
              <div className="page"><About /></div>
              <div className="page"><Work /></div>
              <div className="page"><Contact /></div>
              <div className="page"><Footer /></div>
            </>
          }

          />
        </Route>
      </Routes>
    </>
  )
}

export default App
