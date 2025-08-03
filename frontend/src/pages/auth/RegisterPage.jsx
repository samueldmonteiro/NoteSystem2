import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthRegister } from '../../hooks/auth/useAuthRegister';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
  const { user, loading } = useAuthRegister();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) return <div>Carregando...</div>;

  return (
    <RegisterForm />
  );
};

export default RegisterPage;