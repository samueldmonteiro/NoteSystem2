import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthRegister } from '../../hooks/auth/useAuthRegister';

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { register, error, loading } = useAuthRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("As senhas não coincidem!");
      return;
    }
    await register(username, email, password, confirmpassword);
  }
 

  return (
    <form onSubmit={handleSubmit} className="absolute space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h2 className="text-2xl mb-4 text-center">Registrar</h2>
    <label>Username</label>
    <input
    className="w-full p-2 border border-gray-300 rounded-lg"
    value={username}
    required
    placeholder="Digite seu username"
    onChange={(e) => setUsername(e.target.value)}
    type="text"/>
    <label>Email</label>
    <input
    className="w-full p-2 border border-gray-300 rounded-lg"
    value={email}
    required
    placeholder="Digite seu email"
    onChange={(e) => setEmail(e.target.value)}
    type="email"/>
    <label>Password</label>
    <input
    className="w-full p-2 border border-gray-300 rounded-lg"
    value={password}
    required
    placeholder="Digite sua senha"
    onChange={(e) => setPassword(e.target.value)}
    type="password"/>
    <label>Confirm Password</label>
    <input
    className="w-full p-2 border border-gray-300 rounded-lg"
    value={confirmpassword}
    required
    placeholder="Confirme sua senha"
    onChange={(e) => setConfirmPassword(e.target.value)}
    type="password"/>
    <button
        disabled={loading}
        className="w-full p-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        type="submit">
        {loading ? 'Carregando...' : 'Registrar'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    <div>
        <p className="text-center text-gray-500 text-sm mt-4">
            Já tem uma conta?
            <Link to="/login" className="text-blue-500 hover:underline p-1">Entre</Link>
        </p>
    </div>
    </form>
  )
}

export default RegisterForm