import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import FormulatePage from './pages/Formulate/Formulate'
import IngredientsPage from './pages/Ingredients/Ingredients'
import AboutPage from './pages/About/About'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FormulatePage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}
