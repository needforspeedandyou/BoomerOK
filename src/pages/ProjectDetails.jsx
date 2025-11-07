import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  return (
    <div className="w-[1320px] m-auto mt-12.5 flex justify-between relative">
      <img src={project.image} className="w-[516px] h-[344px] rounded-xl" />
      <div className="flex flex-col gap-1.25">
        <p className="w-[685px] text-3xl">
          BMW {project.model} <span className="text-[#00000020]">-</span> <span className="text-2xl">{project.series}</span>
        </p>
        <p className="text-xl">{project.year}</p>
        <div className="flex justify-between">
          <p>Mileage: {project.mileage}km</p>
          <p>Gear: {project.gear}</p>
          <p>
            Engine: {project.engine} | {project.engineVolume}L
          </p>
        </div>
        <p className="text-2xl text-green-500 font-semibold">{project.cost}$</p>
        <p>{project.description}</p>
        <button className="mt-[20px] rounded-[3px] border border-[#BFBFBF] bg-[#00000010] py-2 text-xl font-semibold cursor-pointer ">Contact</button>
        <div className="flex gap-[100px] absolute bottom-0">
          <p>Date: {project.date}</p>
          <button className="underline cursor-pointer">Add to favourites</button>
        </div>
      </div>
    </div>
  );
};
