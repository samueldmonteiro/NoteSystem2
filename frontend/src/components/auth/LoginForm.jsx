import { useState } from 'react';
import { useAuth } from '../../hooks/auth/useAuth';

  const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu email"
        required
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Sua senha"
        required
      ></input>
      <button type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm