
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-300 ">
      <div className="bg-gray-100 w-96 h-40 p-8 rounded-lg">
        <div className="text-xl text-gray-700">Componente de Login</div>
        <p className="text-sm text-gray-600">Login: </p>
        <p className="text-sm text-gray-600">Senha: </p>
        <Link to="/">Home</Link>
      </div>
    </section>
  )
};

export default Login;
