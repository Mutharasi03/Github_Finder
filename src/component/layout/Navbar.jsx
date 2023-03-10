import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="text-4xl inline pr-3" />
            <Link to="/" className="text-lg font-bold align-middle">
                Github Finder
            </Link>
        </div>
    <div className="flex-1">
        <div className="flex justify-end">
            <Link to="/" className="btn btn-sm btn-ghost">Home</Link>
            <Link to="/about" className="btn btn-sm btn-ghost">About</Link>
        </div>
    </div>

      </div>
    </nav>
  );
}

export default Navbar;
