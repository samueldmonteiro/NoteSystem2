import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthLogin } from '../../hooks/auth/useAuthLogin.jsx';
import LoginForm from '../../components/auth/LoginForm.jsx';

const LoginPage = () => {
  const { user, loading } = useAuthLogin();
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

