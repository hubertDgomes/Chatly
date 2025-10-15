import React from "react";
import Container from "../Container";

const Signup = () => {
  return (
    <>
      <Container>
        <div className="hero py-[30px]">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form action="">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Username</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Username"
                    />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                    />

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
