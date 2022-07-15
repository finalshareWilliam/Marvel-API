import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Inicio from './routes/Inicio';
import Sobre from './routes/Sobre';

//
import Navbar from './componentes/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Inicio/>}/>
        <Route path={'Sobre'} element={<Sobre/>}/>

      </Routes>
    </Router>
  );
}

export default App;
