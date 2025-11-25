import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="h-[60px] bg-[#1E1E1E]">
      <div className="w-[1320px] m-auto flex justify-between items-center h-[60px]">
        <p className="text-[20px] font-black text-white">
          Boomer<span className="text-bmw">OK</span>
        </p>
        <nav className="flex gap-[25px] items-center">
          <NavLink className={({ isActive }) => (isActive ? "text-bmw" : "text-white")} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-bmw" : "text-white")} to="/projects">
            Projects
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-bmw" : "text-white")} to="/sell">
            Sell
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
