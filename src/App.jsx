import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParallaxContainer from './pages/Parallax/ParallaxContainer';
// import './index.css';

const App = () => {

  return (
    <Router>
    <Routes>
        <Route path="/" element={<ParallaxContainer />} />
        {/* Adicione outras rotas conforme necessário */}
    </Routes>
</Router>
  )
}

export default App
