import './App.css';
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Videos from './Pages/Videos';
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/course/:_id' element={<Topics/>}/>
                <Route exact path='/videos/:itemss' element={<Videos/>}/>
          </Routes>
    </div>
    </Router>
    
  );
}

export default App;
