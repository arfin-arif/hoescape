import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Login/login.scss";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../middleware/AuthContext";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loggedIn = await login(email, password);
    if (loggedIn == true) {
      setLoading(false);
      toast.success("Successfully logged in!");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      toast.error(loggedIn);
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      {/* logo */}
      <div className="logo">
        <NavLink to="/">
          <img src="./images/login-logo.svg" alt="logo" />
        </NavLink>
      </div>

      {/* Overlay One */}
      <div className="overlay_one">
        <img src="./images/login-overlay-1.png" alt="" />
      </div>

      {/* Overlay One */}
      <div className="overlay_two">
        <img src="./images/login-overlay-2.png" alt="" />
      </div>

      {/* Overlay One */}
      <div className="overlay_three">
        <img src="./images/login-overlay-3.png" alt="" />
      </div>

      {/* Form */}
      <div className="login_form">
        {/* Login Box */}
        <div className="form_box">
          {/* heading */}
          <div className="heading">
            <h1 className="jakarta">Benvenuto</h1>
          </div>

          {/* form */}
          <form onSubmit={handleLogin}>
            {/* email */}
            <div className="box">
              <label htmlFor="mail" className="jakarta">
                Email
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Email"
                className="jakarta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* password */}
            <div className="box">
              <label htmlFor="password" className="jakarta">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="jakarta"
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "35px",
              }}
            >
              {loading ? (
                /* If loading is true, show a loading spinner */
                <button type="submit" className="jakarta">
                  Loading...
                </button>
              ) : (
                /* Otherwise, show the login button */
                <button type="submit" className="jakarta">
                  Login
                </button>
              )}
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
