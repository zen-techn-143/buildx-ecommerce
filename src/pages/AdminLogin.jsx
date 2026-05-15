import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (attempts >= 3) {
      setError("Too many failed attempts. Please try again later.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === "admin@example.com" && password === "123456") {
        localStorage.setItem("token", "test-token");
        setAttempts(0);
        navigate("/dashboard");
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= 3) {
          setError("Too many failed attempts. Please try again later.");
        } else {
          setError(`Invalid email or password. Attempts left: ${3 - newAttempts}`);
        }
      }

      setLoading(false);
    }, 1000);
  }

  return (
    <div className="admin-login-page">
      <div className="login-card">
        <h2>Admin Panel Login</h2>
        <p>Login to manage the ecommerce platform</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={attempts >= 3}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={attempts >= 3}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <p
  className="forgot-password"
  onClick={() =>
    alert("Forgot password feature will be added later.")
  }
>
  Forgot Password?
</p>
          <button type="submit" disabled={loading || attempts >= 3}>
            {loading ? "Logging in..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;