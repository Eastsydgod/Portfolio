import Contact from './contact/contact'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Footer from './Footer/Footer'

export default function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <Footer />
    </div>
  )
}
