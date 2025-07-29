import { BrowserRouter, Routes as RoutesReact, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesReact>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
     
      </RoutesReact>
    </BrowserRouter>
  )
}

export default Routes