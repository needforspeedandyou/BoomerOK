import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="h-56 mt-50 bg-[#1E1E1E]">
            <div className="w-[1320px] h-56 mx-auto flex justify-between items-center">
                <div>
                    <p className="text-[20px] font-black text-white">Boomer<span className="text-bmw">OK</span></p>
                    <nav className="flex flex-col mt-5 gap-1.25 w-20">
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
                <h2 className='text-[#FFFFFF50] text-[20px] tracking-[4px] mb-2.5'>When BMW becomes a lifestyle.</h2>
                <div className="text-right text-white">
                    <p>+1 610 123-4567</p>
                    <p>boomerok@not.email.com</p>
                    <p>USA, Idaho, Sun Valley</p>
                </div>
            </div>
        </div>
    );
};
