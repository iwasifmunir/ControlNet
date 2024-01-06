import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    howDidYouFindUs: "Choose 1",
    position: "",
    consentChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="relative z-10 flex items-center justify-center h-screen max-w-[62rem] m-auto">
      
        <div className="rounded-2xl m-auto flex flex-col justify-center items-start w-full text-white p-12 bg-[#131314]">
          <div className="px-2">
            <img src="/signup/amigo.png" alt="amigo" />
          </div>
          <p className="text-[1.25rem] pt-7 px-2">Join The Revolution:</p>

          <form onSubmit={handleSubmit} className="w-full text-white">
            <div className="w-full">
              <div className=" w-1/2 sm:w-full float-left px-2">
                <label className=" text-lg w-full block pt-10">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-transparent borderTransparent w-full py-3 text-sm autofill:bg-transparent"
                  required
                />
              </div>
              <div className=" w-1/2 sm:w-full float-left px-2">
                <label className="text-lg w-full block pt-10">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-transparent borderTransparent w-full py-3 text-sm"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className=" w-1/2 sm:w-full float-left px-2">
                <label className="text-lg w-full block pt-10">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent borderTransparent w-full py-3 text-sm"
                  required
                />
              </div>
              <div className=" w-1/2 sm:w-full float-left px-2">
                <label className="text-lg w-full block pt-10">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="bg-transparent borderTransparent w-full py-3 text-sm"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <div className="w-1/2 sm:w-full float-left px-2">
                <label className="text-lg w-full block pt-10">How did you find us *</label>
                <select
                  name="howDidYouFindUs"
                  value={formData.howDidYouFindUs}
                  onChange={handleChange}
                  className="bg-transparent borderTransparent w-full py-3 text-sm"
                  required
                  
                >
                  <option value="Internet Search">Internet Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral</option>
                  <option value="Affiliates">Affiliates</option>
                  <option value="Email Campaigns">Email Campaigns</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="TV">TV</option>
                </select>
              </div>
              <div className="w-1/2 sm:w-full float-left px-2">
                <label className="text-lg w-full block pt-10">Position/Title *</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="bg-transparent borderTransparent w-full py-3 text-sm"
                  required
                />
              </div>
            </div>

            <div className="w-full float-left pt-12">
                <button type="submit" className="text-white w-[19rem] py-4 rounded-2xl btnGray hover:opacity-90 text-center">
                Sign Up
                </button>
            </div>
            <div className="w-full float-left pt-12">

                <div class="flex">
                    <div className="flex items-center h-5">
                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" 
                            checked={formData.consentChecked}
                            onChange={handleChange} 
                            name="consentChecked"
                            required
                            className="w-4 h-4 text-black-600 bg-gray-100 border-gray-300 rounded focus:ring-black dark:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div class="ms-2 text-sm">
                        <label for="helper-checkbox" className="text-md leading-6 relative bottom-1">By checking this box, I consent to the collection, processing, and storage of my personal data in accordance with droppPhygital's privacy policy. I understand that my personal information may be used for account management, communication, and to provide the services offered by droppPhygital. I also acknowledge that I have read and agree to the terms and conditions governing the use of droppPhygital's platform. I retain the right to withdraw my consent and request the deletion of my personal data at any time by contacting support@droppgroup.xyz</label>
                    </div>
                </div>

            </div>
            
          </form>
        </div>
        
      </div>
      <div className="fixed bgBlackTranspent left-0 right-0 top-0 bottom-0 z-0 "></div>
    </>
  );
};

export default SignUp;
