import { useState } from "react";

export const SellPage = (params) => {
  const [form, setForm] = useState({
    id: "",
    model: "",
    series: "",
    year: "",
    cost: "",
    mileage: "",
    description: "",
    image: "",
  });
  if (params.admin == false) {
    return <p>U r not admin!</p>;
  } else {
    const handleSubmit = () => {
      console.log("sdads");
    };

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
      <div className="w-[1320px] m-auto mt-[50px]">
        <p className="text-2xl">Sell</p>
        <form className="mt-[20px] flex flex-col gap-2" onSubmit={handleSubmit}>
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="image url" value={form.image} name="image" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="model" value={form.model} name="model" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="series" value={form.series} name="series" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="year" value={form.year} name="year" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="cost" value={form.cost} name="cost" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="mileage" value={form.mileage} name="mileage" />
          <input className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px]" onChange={handleChange} placeholder="description" value={form.description} name="description" />
          <button type="submit" className="py-1 px-2 w-[400px] border border-[#BFBFBF] rounded-[3px] hover:bg-[#00000020] cursor-pointer">
            Sell
          </button>
        </form>
      </div>
    );
  }
};
