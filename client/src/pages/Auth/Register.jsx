import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      const loginRes = await api.post("/auth/login", {
        email,
        password,
      });

      setUser(loginRes.data);
      navigate("/dashboard");
    } catch (error) {
      const message =
        error.response?.data?.message || "Registration failed. Please try again.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold">FinTrack</h1>
        <p className="mt-2 text-slate-600">Create your account</p>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full border p-3 rounded-lg mt-5"
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full border p-3 rounded-lg mt-3"
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full border p-3 rounded-lg mt-3"
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className="bg-blue-600 w-full mt-5 p-3 rounded-lg text-white disabled:opacity-70"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
