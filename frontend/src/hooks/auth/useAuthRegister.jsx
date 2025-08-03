import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as authServiceRegister } from '../../services/auth/authService';

export const useAuthRegister = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (username, email, password, confirmpassword) => {
    setLoading(true);
    try {
      const { user } = await authServiceRegister(username, email, password, confirmpassword);
      setUser(user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  }

  return { user, register, error, loading };
}