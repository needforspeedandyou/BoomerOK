import { useEffect, useState } from "react";
import arrow_icon from "./../assets/arrow_icon.svg";
import { projects } from "./../data/projectsData.js";
import { Link } from "react-router-dom";


const projectsData = JSON.parse(localStorage.getItem('projects')) || projects;

const seriesOptions = [...new Set(projectsData.map((p) => p.series))];
const modelOptions = [...new Set(projectsData.map((p) => p.model))];

export const ProjectsPage = () => {
  const [year, setYear] = useState(false);
  const [series, setSeries] = useState(false);
  const [model, setModel] = useState(false);

  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  const filteredProjects = projectsData.filter((project) => {
    const matchSeries = selectedSeries.length === 0 || selectedSeries.includes(projectsData.series);
    const matchYear = (minYear === "" || projectsData.year >= minYear) && (maxYear === "" || projectsData.year <= maxYear);
    const matchModel = selectedModels.length === 0 || selectedModels.includes(projectsData.model);

    return matchSeries && matchYear && matchModel;
  });

  const handleClick = (key) => {
    setYear(false);
    setSeries(false);
    setModel(false);

    if (key === "setYear") setYear(!year);
    if (key === "setSeries") setSeries(!series);
    if (key === "setModel") setModel(!model);
  };

  const toggleSelectSeries = (value) => {
    setSelectedSeries((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };
  const toggleSelectModel = (value) => {
    setSelectedModels((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  useEffect(() => { }, [selectedSeries]);

  return (
    <div className="w-[1320px] m-auto mt-[50px] relative">
      <div className="flex justify-between align-center">
        <p className="text-[24px]">Projects</p>
        <div className="flex gap-[15px]">
          <button onClick={() => handleClick("setYear")} className="flex gap-[10px] hover:border-bmw text-[#000000] px-[25px] py-[6px] rounded-[9px] border-[#BFBFBF] border cursor-pointer bg-[#D9D9D930] hover:opacity-60">
            Year<img src={arrow_icon} alt=""></img>
          </button>
          {year ? (
            <div className="min-w-[200px] flex flex-col gap-[5px] justify-between border border-[#BFBFBF] bg-white top-[40px] p-[20px] rounded-[9px] absolute">
              <div className="flex justify-between items-center">
                <p className="text-[18px]">From</p>
                <input type="text" placeholder="1900" className="border border-[#BFBFBF] w-[100px] p-[5px]" onChange={(e) => setMinYear(e.target.value)} />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[18px]">to</p>
                <input type="text" placeholder="2025" className="border border-[#BFBFBF] w-[100px] p-[5px]" onChange={(e) => setMaxYear(e.target.value)} />
              </div>
            </div>
          ) : (
            ""
          )}
          <button onClick={() => handleClick("setSeries")} className="hover:border-bmw flex gap-[10px] text-[#000000] px-[25px] py-[6px] rounded-[9px] border-[#BFBFBF] border cursor-pointer bg-[#D9D9D930] hover:opacity-60">
            Series<img src={arrow_icon} alt=""></img>
          </button>
          {series ? (
            <div className="p-[20px] border border-[#BFBFBF] bg-white ml-[120px] top-[40px] rounded-[9px] absolute">
              {seriesOptions.map((option) => (
                <div key={option} className="cursor-pointer" onClick={() => toggleSelectSeries(option)}>
                  <input type="checkbox" checked={selectedSeries.includes(option)} readOnly className="mr-2 cursor-pointer" />
                  {option}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          <button onClick={() => handleClick("setModel")} className="hover:border-bmw flex gap-[10px] text-[#000000] px-[25px] py-[6px] rounded-[9px] border-[#BFBFBF] border cursor-pointer bg-[#D9D9D930] hover:opacity-60">
            Model <img src={arrow_icon} alt=""></img>
          </button>
          {model ? (
            <div className="p-[20px] border border-[#BFBFBF] bg-white ml-[250px] top-[40px] rounded-[9px] absolute">
              {modelOptions.map((option) => (
                <div key={option} className="cursor-pointer" onClick={() => toggleSelectModel(option)}>
                  <input type="checkbox" checked={selectedModels.includes(option)} readOnly className="mr-2 cursor-pointer" />
                  {option}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="mt-[20px] flex flex-col justify-between gap-y-[50px]">
        {filteredProjects.map((project) => (
          <Link to={`/projects/${project.id}`}>
            <div key={project.id} className="flex justify-between h-[277px] gap-[121px] hover:underline">
              <img src={project.image} alt="" className="w-[415px] h-[277px] rounded-[7px]" />
              <div className="flex justify-between flex-col w-[784px]">
                <div className="">
                  <p className="text-[24px] font-bold">BMW {project.model}</p>
                  <div className="flex justify-between">
                    <p>
                      {project.series} <span className="text-[#00000050]">-</span> {project.year}
                    </p>
                    <p>Mileage: {project.mileage}km</p>
                    <p>Gear: {project.gear}</p>
                    <p>
                      Engine: {project.engine} | {project.hp}HP
                    </p>
                  </div>
                  <p className="m-y-[10px]">
                    {project.engineVolume}L | {project.fuel}
                  </p>
                  <p className="text-green-500 font-semibold text-[24px]">{project.cost}$</p>
                  <p className="mt-[10px]">{project.description}</p>
                </div>
                <p className="text-[#00000070]">{project.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
