import './App.css';
import Login from './views/login';
import Profile from './views/profile';
import Translator from './views/translator';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
