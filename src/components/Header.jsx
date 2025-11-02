import { NavLink } from 'react-router-dom'
import lang_icon from './../assets/lang_icon.svg'

export const Header = (props) => {
  return(
    <div className="h-[60px] bg-[#D9D9D9]">
        <div className="w-[1320px] m-auto flex justify-between items-center h-[60px]">
            <p className="text-[20px] font-black">Boomer<span className="text-bmw">OK</span></p>
            <nav className='flex gap-[25px] items-center'>
                <NavLink className={({ isActive }) => isActive ? 'text-bmw' : 'text-black'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-bmw' : 'text-black'} to='/projects'>Projects</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-bmw' : 'text-black'} to='/sell'>Sell</NavLink>
                <NavLink className='w-[84px] bg-[#C2C2C2] h-[60px] flex items-center justify-center' to='/signup'>Sign up</NavLink>
            </nav>
            <div className="flex gap-[6px] cursor-pointer"><p>{props.lang}</p><img src={lang_icon} alt="lang" /></div>
        </div>
    </div>
  )
}
