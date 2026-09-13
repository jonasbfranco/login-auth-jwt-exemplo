
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-96 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-2xl mb-4 font-medium text-slate-500">Componente de Login
          <p className="text-sm mb-2 mt-2 text-gray-600">Login: </p>
          <p className="text-sm text-gray-600">Senha: </p>
        </div>
      </div>
      <div>
          <Link to="/">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
              Home
            </button>
          </Link>
        </div>
    </div>
  )
};

export default Login;
