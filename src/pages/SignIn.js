import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="relative z-10 flex items-center justify-center h-screen">
      
        <div className="rounded-2xl m-auto flex flex-col justify-center items-start w-full text-white p-12">
          <p className="text-8xl 2xl:text-5xl lg:text-lg mb-8 px-3 text-center w-full">Welcome To The droppPhygital Testnet</p>

          <form onSubmit={handleSubmit} className="w-full text-white px-8 max-w-[42rem] 2xl:max-w-[38rem] m-auto">
            <div className="w-full">
              <div className=" w-full sm:w-full float-left">
                <label className=" text-lg w-full block pt-10 pb-3">
                  Users Name:
                </label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="textGlow text-lightwhiteInput w-full py-4 px-3 bg-[#202020] rounded-lg border border-solid border-white border-opacity-20 bg-opacity-6 backdrop-blur-7.5"
                />
              </div>
              <div className=" w-full sm:w-full float-left">
                <label className="text-lg w-full block pt-10 pb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="textGlow  text-lightwhiteInput w-full py-4 px-3 bg-[#202020] rounded-lg border border-solid border-white border-opacity-20 bg-opacity-6 backdrop-blur-7.5"
                  required
                />
              </div>
            </div>
            <div className="w-full float-left pt-12">
                <button type="submit" className="textGlow text-white w-full py-4 bg-gray-150 rounded-lg hover:opacity-90 text-center">
                    Enter
                </button>
            </div>
            <p className="pt-7 float-left text-sm"><a href="/" className="text-white">Don’t have an account? <b>Sign Up</b></a></p>
          </form>
        </div>
      </div>
      <div className="fixed bgBlackTranspent left-0 right-0 top-0 bottom-0 z-0 "></div>
    </>
  );
};

export default SignIn;
