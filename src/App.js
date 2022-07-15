import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <Router>
      <Routes>
        <Route to={'/'} element={<Inicio/>}/>
        <Route to={'Sobre'} element={<Sobre/>}/>

      </Routes>
    </Router>
  );
}

export default App;
