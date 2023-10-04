import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Login page", location);

  const handleLoginForm = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget)
    // const email= e.target.email.value;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password)
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h2 className="text-3xl my-5 text-center">Please Login </h2>
        <form onSubmit={handleLoginForm} className="md:3/4 lg:w-1/2 mx-auto">
          {/*---------- Email----- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          {/*---------- Password----- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            {/*---------- Forgot----- */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/*----------Login Button----- */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        {/*----------Go to Login Register Button----- */}
        <p className="text-center py-5">
          Do not have an account
          <Link to="/register">
            <button className="btn btn-ghost text-blue-700">Register</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
