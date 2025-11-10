import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

const now = new Date();

const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

export const SellPage = (params) => {
  const [form, setForm] = useState({
    id: Date.now().toString(),
    date: formattedDate,
    model: "",
    series: "",
    year: "",
    cost: "",
    mileage: "",
    description: "",
    image: "",
    hp: "",
    engine: "",
    engineVolume: "",
    gear: "",
    fuel: "",
  });
  const navigate = useNavigate()

  useEffect(() => {
    if (params.admin == false)
      navigate('/projects')
  }, [params.admin, navigate])
  
    const handleSubmit = () => {
      const existingProjects = JSON.parse(localStorage.getItem('projects')) || projects;
      localStorage.setItem("projects", JSON.stringify([...existingProjects, form]));
    };

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
      <div className="w-[1320px] m-auto mt-[50px]">
        <p className="text-2xl">Sell</p>
        <form className="mt-[20px] flex flex-col gap-2" onSubmit={handleSubmit}>
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Image url" value={form.image} name="image" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Model" value={form.model} name="model" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Series" value={form.series} name="series" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Year" value={form.year} name="year" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Cost" value={form.cost} name="cost" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Mileage" value={form.mileage} name="mileage" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Horse power" value={form.hp} name="hp" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Engine volume" value={form.engineVolume} name="engineVolume" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Engine" value={form.engine} name="engine" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Fuel" value={form.fuel} name="fuel" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Gear" value={form.gear} name="gear" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="Description" value={form.description} name="description" />
          <button type="submit" className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px] hover:bg-[#00000020] cursor-pointer">
            Sell
          </button>
        </form>
      </div>
    );
  }