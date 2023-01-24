import './App.css';
import Login from './views/Login';
import Profile from './views/Profile';
import Translator from './views/Translator';
import Navbar from './compontents/Navbar/navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/translator" element={ <Translator/> } />
          <Route path="/profile" element={ <Profile/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
