import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function NotFound() {
    return ( 
        <div class="flex flex-col items-center justify-center">
        <h1 class="text-5xl font-bold text-gray-100">404</h1>
        <h2 class="text-2xl font-bold text-gray-200">Page Not Found</h2>
        <p class="text-gray-400 my-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" class="px-4 py-2 btn btn-primary font-semibold rounded-md">
          <span className="pr-2"><FaHome/></span> Go back home
        </Link>
      </div>
        );
}

export default NotFound;