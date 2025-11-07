import React, { useState } from "react";
import Container from "../Container";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userInfoLogin } from "../../slices/userSlices";

const Login = () => {
  const data = useSelector((state) => state.userInformation.value);
  console.log(data);

  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSign = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user.emailVerified === true) {
          toast.success("Account is verified, procceds to Log in");
          navigator("/dashboard");
          dispatch(userInfoLogin(user));
          localStorage.getItem("userInfoLogin", JSON.stringify((user)))
        } else {
          toast.error(
            "Email Is Not Verified, Check Your Email, If not found please check your Spam!"
          );
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <Container>
        <div className="hero py-[30px]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
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

                    <button
                      onClick={handleSign}
                      className="btn btn-neutral mt-4"
                    >
                      Login
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </Container>
    </>
  );
};

export default Login;
