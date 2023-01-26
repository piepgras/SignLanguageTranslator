import './App.css';
import Login from './views/login';
import Profile from './views/profile';
import Translate from './views/translate';
import Navbar from './compontents/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;