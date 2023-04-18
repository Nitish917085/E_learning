import './App.css';
import Home from './Pages/Home';
import Topics from './Pages/Topics';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Videos from './Pages/Videos';
import Navbar from "./Pages/Navbar";
import LogReg from './Pages/LogReg';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
                <Route exact path='/'   element={  <Home />   } />
                <Route exact path='/logreg' element={  <LogReg/> }/>
                <Route exact path='/course/:_id' element={<Topics/>}/>
                <Route exact path='/videos/:itemss' element={<Videos/>}/>
          </Routes>
    </div>
    </Router>
    
  );
}

// const HomeAuth = ({ children }) => {
//   const user = useSelector((state) => state.user.currentUser);

//   if (user) return children;
//   else return <Navigate to='/logreg' />;
// };
// const CheckAuth = ({ children }) => {
//   const user = useSelector((state) => state.user.currentUser);

//   if (user) return <Navigate to='/' />;
//   else return children;
// };
export default App;
