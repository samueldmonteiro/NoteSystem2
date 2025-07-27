import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/auth/authService';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await loginApi(email, password);
      setUser(response.data.user); 
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return { user, login, error, loading };
}