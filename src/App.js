import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Items from './components/Items.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route index element={<LoginForm/>} />
        <Route path="/items" element={<PrivateRoute Component={Items} />} />
      </Routes>
    </Router>
  );
};

export default App;
