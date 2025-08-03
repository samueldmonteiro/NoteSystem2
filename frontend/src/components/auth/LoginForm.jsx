import {useState} from 'react';
import { Link } from 'react-router';
import { useAuthLogin } from '../../hooks/auth/useAuthLogin.jsx';


function LoginForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const {login, error, loading} = useAuthLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="absolute space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-2xl mb-4 text-center">Entrar na Conta</h2>
      <label>Email</label>
      <input
      className="w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Digite seu email"
      required
      onChange={(e) => setEmail(e.target.value)} 
      value={email}
      type="email"/>
      <label>Senha</label>
      <input
      className="w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Digite sua senha"
      required
      onChange={(e) => setPassword(e.target.value)}
      value={password} 
      type="password" />
      <button
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        type="submit">
        {loading ? 'Carregando...' : 'Entrar'}
       </button>
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-center text-gray-500 text-sm mt-4">
        Não tem uma conta? 
       <Link to="/register" className="text-blue-500 hover:underline p-1">Registre-se</Link>
      </p>
    </form>
  )
}

export default LoginForm