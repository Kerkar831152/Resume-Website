import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            localStorage.setItem("token", data.token);
            navigate("/admin/dashboard");

        } catch (error) {
            console.error("Login failed:", error);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#08031c] px-4">

            <div className="w-full max-w-md rounded-2xl border border-purple-500/20 bg-[#0d0825] p-8 shadow-2xl">

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Admin Login
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to manage your portfolio
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full rounded-lg border border-purple-500/20 bg-[#08031c] px-4 py-3 text-white outline-none transition focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-gray-300">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="w-full rounded-lg border border-purple-500/20 bg-[#08031c] px-4 py-3 text-white outline-none transition focus:border-purple-500"
                        />
                    </div>

                    {error && (
                        <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
                    >
                        Login
                    </button>

                </form>

                <button
                    onClick={() => navigate("/")}
                    className="mt-6 w-full text-center text-sm text-gray-400 transition hover:text-white"
                >
                    ← Back to website
                </button>

            </div>

        </div>
    );
};

export default AdminLogin;
