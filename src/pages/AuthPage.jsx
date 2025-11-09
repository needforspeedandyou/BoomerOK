import { useState } from "react";

const loginData = {
  login: "admin123",
  password: "boomerok",
};

export const AuthPage = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const handleSubmit = () => {
    if (formData.login === loginData.login && formData.password === loginData.password) {
      localStorage.setItem("admin", "true");
      window.location.href = "/projects";
    } else {
      console.log("isnt right");
    }
  };

  return (
    <div className="w-[1320px] m-auto flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-50">
        <p className="text-xl">Login</p>
        <input name="login" onChange={handleChange} value={formData.login} className="rounded border border-[#BFBFBF] px-2 py-1" placeholder="Login" />
        <input name="password" onChange={handleChange} value={formData.password} className="rounded border border-[#BFBFBF] px-2 py-1" placeholder="Password" type="password" />
        <button type="submit" className="rounded border border-[#BFBFBF] px-2 py-1">
          Login
        </button>
      </form>
    </div>
  );
};
