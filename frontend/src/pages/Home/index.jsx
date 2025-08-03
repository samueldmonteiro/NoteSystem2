import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <div className="flex flex-col gap-4">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Ir para Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
