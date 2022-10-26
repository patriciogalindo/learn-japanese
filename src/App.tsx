import './App.css';
import { Login } from './screens/login';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { SignUp } from './screens/signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.LOGIN} element={<Login/>}/>
        <Route path={routes.SIGNUP} element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
