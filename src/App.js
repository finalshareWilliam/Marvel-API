import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Inicio from './routes/Inicio';
// import Sobre from './routes/Sobre';
import HeroisDetalhes from './routes/HeroisDetalhes';

//
import Navbar from './componentes/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Inicio/>}/>
        {/*<Route path={'/sobre'} element={<Sobre/>}/> */}
        <Route path={'/:id'} element={<HeroisDetalhes/>}/>

      </Routes>
    </Router>
  );
}

export default App;
