import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/useAuth.jsx';
import LoginForm from '../../components/auth/LoginForm.jsx';

const LoginPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Carregando...</div>;

  return (
      <LoginForm />
  );
};

export default LoginPage;