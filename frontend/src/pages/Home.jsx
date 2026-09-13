
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-start">
      <div className="w-96 h-40">
        <div className="text-xl mb-4 text-gray-700 items-center">Bem vindo a Home</div>
        <Link to="/dashboard"><button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
          Dashboard
        </button></Link>
      </div>
    </section>
  )
};

export default Home;
