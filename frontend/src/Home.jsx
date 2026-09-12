
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center bg-gray-300 ">
      <div className="bg-gray-100 w-96 h-40 p-8 rounded-lg">
        <div className="text-xl text-gray-700 items-center">Bem vindo a Home</div>
        <Link to="/login"><button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
          Login
        </button></Link>
      </div>
    </section>
  )
};

export default Home;
