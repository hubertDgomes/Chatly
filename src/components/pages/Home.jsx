import React from "react";
import GridDistortion from "../layouts/GridDistortion";
import TextType from "../layouts/TextType";
import { useNavigate } from "react-router-dom";
import { sign } from "three/tsl";

const Home = () => {
  const navigator = useNavigate()
  const logBtn = ()=>{
    navigator("/login")
  }
  const signBtn = ()=>{
    navigator("/signup")
  }
  return (
    <>
      <div style={{ width: "100%", height: "750px", position: "relative" }}>
        <GridDistortion
          imageSrc="/src/assets/banner.jpg"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class brightness-70"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TextType
            text={["This is Chatly", "This is the most Dumbest Chatting app"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-[50px] font-Libre font-semibold"
          />
        </div>
        <div className="flex gap-6 absolute top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <button
          onClick={logBtn}
          className="font-Libre p-3 border-1 border-black bg-white/20 rounded-2xl text-[20px] cursor-pointer font-semibold text-black">Log In</button>
          <button
          onClick={signBtn}
          className="font-Libre p-3 border-1 border-black bg-white/20 rounded-2xl text-[20px] cursor-pointer font-semibold text-black">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Home;
