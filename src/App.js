import './App.css';
import Login from './views/Login';
import Profile from './views/Profile';
import Translate from './views/Translate';
import Navbar from './compontents/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/translate" element={ <Translate/> } />
          <Route path="/profile" element={ <Profile/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;