import React, { useState } from "react";
import Container from "../Container";
import { log, pass } from "three/tsl";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigator = useNavigate()
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  // Name
  const handleName = (e) => {
    setUserData((prev) => {
      return { ...prev, Name: e.target.value };
    });
  };
  // Name

  // Email
  const handleEmail = (e) => {
    setUserData((prev) => {
      return { ...prev, Email: e.target.value };
    });
  };
  // Email

  //   Password
  const handlePass = (e) => {
    setUserData((prev) => {
      return { ...prev, Password: e.target.value };
    });
  };
  //   Password

  // Firebase Part
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!userData.Name || !userData.Email || !userData.Password) {
      toast.error("Credential Is Missing");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userData.Email, userData.Password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          toast.success('Sign Up Done')
        //   {setInterval(()=>{
        //     navigator("/login")
        //   },500)}
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode);
          
          // ..
        });
        
    }
  };
  // Firebase Part

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
              <form action="" onSubmit={handelSubmit}>
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Username</label>
                    <input
                      type="text"
                      onChange={handleName}
                      className="input"
                      placeholder="Username"
                    />
                    <label className="label">Email</label>
                    <input
                      onChange={handleEmail}
                      type="email"
                      className="input"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      onChange={handlePass}
                      className="input"
                      placeholder="Password"
                    />
                    <Toaster />
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
