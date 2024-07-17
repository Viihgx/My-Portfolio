import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParallaxContainer from './pages/Parallax/ParallaxContainer';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorCircle = document.getElementById('cursor-circle');
      if (cursorCircle) {
        cursorCircle.style.left = `${e.clientX}px`;
        cursorCircle.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParallaxContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
