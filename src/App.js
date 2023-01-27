// App.js handles the browser routing and
// routes to root, profile and translate page.
// Also instantiates the navigation bar.

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Translate from './views/Translate';
import Profile from './views/Profile';
import Login from './views/Login';
import './App.css';

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