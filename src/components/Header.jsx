import { Link, NavLink } from "react-router-dom";

export const Header = (params) => {
  return (
    <div className="h-[60px] bg-[#D9D9D9]">
      <div className="w-[1320px] m-auto flex justify-between items-center h-[60px]">
        <p className="text-[20px] font-black">
          Boomer<span className="text-bmw">OK</span>
        </p>
        <nav className="flex gap-[25px] items-center">
          <NavLink className={({ isActive }) => (isActive ? "text-bmw" : "text-black")} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-bmw" : "text-black")} to="/projects">
            Projects
          </NavLink>
          {params.isAdmin && (
            <NavLink className={({ isActive }) => (isActive ? "text-bmw" : "text-black")} to="/sell">
              Sell
            </NavLink>
          )}
        </nav>
        <div className="flex gap-[6px] cursor-pointer">
          {params.isAdmin ? (
            <p
              onClick={() => {
                localStorage.removeItem("admin");
                window.location.reload();
              }}>
              Admin
            </p>
          ) : (
            <Link to="/auth">Sign in</Link>
          )}
        </div>
      </div>
    </div>
  );
};
