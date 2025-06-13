import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaLeaf, FaBars } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().catch((error) => {
      console.error(error.message);
    });
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-plants">All Plants</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/add-plant">Add Plant</NavLink></li>
          <li><NavLink to="/my-plants">My Plants</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-xl">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <FaLeaf className="text-green-600" />
          <span className="text-green-700">PlantTrackr</span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <div className="space-x-2">
            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
            <Link to="/register" className="btn btn-outline btn-sm">Register</Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div>
              <img
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName || "User"}
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border border-green-500 cursor-pointer"
              />
              <Tooltip id="user-tooltip" place="bottom" />
            </div>
            <button onClick={handleLogOut} className="btn btn-sm btn-error text-white">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
