import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    // const email= e.target.email.value;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // create User
    createUser(email, password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error)
    })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h2 className="text-3xl my-5 text-center">Please Register </h2>
        <form onSubmit={handleRegisterForm} className="md:3/4 lg:w-1/2 mx-auto">
          {/*---------- Your name----- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          {/*---------- Photo Url----- */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          {/*----------Register Button----- */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        {/*----------Go to Login Button----- */}
        <p className="text-center py-5">
          Already have an account?
          <Link to="/login">
            <button className="btn btn-ghost text-blue-700">Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
