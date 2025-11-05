import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Techno from './pages/Techno'
import Destaques from './pages/Destaques'



function App() {

  return (
    <Router>
    <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/techno" element={<Techno />} />
        <Route path="/destaques" element={<Destaques />} />
      </Routes>
         </Layout>
    </Router>
 
      
  )
}

export default App
