import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="bg-[#edc84b] text-white">
      <div className="max-w-5xl mx-auto justify-between items-center flex py-3 px-3">
        <h1 className="text-4xl">
          <Link to="/">FAST PIZZA</Link>
        </h1>
        <Link
          className="border px-3 py-2 rounded-md  hover:bg-white hover:text-gray-900"
          to="create"
        >
          Create
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
