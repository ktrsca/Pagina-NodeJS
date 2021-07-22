import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import Ej1 from './components/Ej1';
import Ej2 from './components/Ej2';
import Ej3 from './components/Ej3';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/Home'>
        <Home/>
      </Route>

      <Route path='/Notes'>
        <Notes/>
      </Route>

      <Route path='/Ej1'>
        <Ej1/>
      </Route>

      <Route path='/Ej2'>
        <Ej2/>
      </Route>

      <Route path='/Ej3'>
        <Ej3/>
      </Route>
    </Router>
     );
  };


export default App;
