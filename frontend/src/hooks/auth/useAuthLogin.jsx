import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as authServiceLogin } from '../../services/auth/authService';

export const useAuthLogin = () => {
 const [user, setUser] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 const Login = async (email, password) => {
   setLoading(true);
   try {
     const { user } = await authServiceLogin(email, password);
     setUser(user);
     navigate('/');
   } catch (err) {
     setError(err.response?.data?.error || err.message);
   } finally {
     setLoading(false);
   }
 }

  return { user, login: Login, error, loading };

}

