import { useState } from "react";

const UserTaskCard = () => {
  const [isRed, setIsRed] = useState(false);
  const handleClick = () => {
    setIsRed(!isRed);
  };

  const buttonStyle = {
    color: isRed ? '#FF0000' : '',
  };
  return (
    <>
      <div className=" bg-gray-100 p-[30px] max-w-[845px] m-auto rounded-2xl text-lightwhite mt-5 mb-5">
        { /* Head Section Start*/}
        <div className="flex justify-between align-top">
          <a href="#" className="" style={{ flex: "0 0 46px" }}>
            <img src="./shoe.png" className="w-11" alt="shoes" />
          </a>

          <div className=" flex justify-start flex-1 px-4 flex-col">
            <p className="text-[26px] flex flex-col pb-3">3d Product</p>
            <div className="text-lg flex items-end">
              <a href="#" className="text-lightwhite underline">
                Jennifer Perez
              </a>
              <svg
                className=" px-3 relative top-[-6px]"
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="white" fill-opacity="0.7" />
              </svg>
              <a href="#" className="text-lightwhite underline pr-5">
                Upload date: <span>20-11-2023</span>
              </a>
              <div class="bg-lightblack w-24 h-9 rounded-8xs text-sm flex items-center justify-center">
                <img
                  src="./share.png"
                  class="mr-2"
                  alt="share"
                  width={18}
                  height={18}
                />
                <span>Share</span>
              </div>
            </div>
          </div>

          <div style={{ flex: "0 0 32px" }}>
            <a href="#">
              <img src="./cross.png" className="w-8" alt="cross" />
            </a>
          </div>
        </div>

        { /* Head Section End*/}
        <div className="bg-lightblack h-px flex mt-5 mb-6"></div>
        { /* Chat Section Start*/}

        <div className="p-5 bg-black rounded-xl">

          <div className="flex items-center">
            <a href="#" className="" style={{ flex: "0 0 34px" }}>
            <span className="bg-gray-100 rounded-3xl flexCenter p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10H17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 5H17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 15H17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            </a>
            <p className="text-lg pl-2">Chat History Log </p>
          </div>

          <div className="flex items-center mt-4">
            <a href="#" className="" style={{ flex: "0 0 48px" }}>
              <img src="./user.png" className="w-11" alt="user" />
            </a>
            <input type="text" className="flex-1 rounded-[10px] bg-gray-100 ml-[10px] text-lightwhiteInput p-4 text-sm dimWhiteBorder focus:whiteBorder" value="I want to create a 3D model." />
          </div>

          <div className="flex items-center mt-[26px]">
            <a href="#" className="" style={{ flex: "0 0 48px" }}>
              <img src="./ellipse.png" className="w-11" alt="ellipse" />
            </a>
            <div className="flex flex-col justify-center py-[33px] bg-gray-100 ml-[10px] flex-1 rounded-[10px] items-center">
                <img src="./ellipse.png" className=" w-[106px]" alt="ellipse" />
                <p className=" text-lg pt-5">3D Product Images</p>
            </div>
          </div>
          <div class=" w-full h-5 pt-5 text-sm flex items-center justify-center pl-6 dimWhiteBorder hover:whiteBorder">
            <img src="./back.png" class="mr-2" alt="back" width={24} height={24}/>
            <a href="" className="text-white">
              <span>Go back to chat</span>
            </a>
          </div>

        </div>

        { /* Chat Section End*/}


        { /* Public Link Section Start*/}

        <div className="p-5 bg-darkblack rounded-xl mt-[30px]">

          <div className="flex flex-col pb-5">
            <p className="text-lg pb-4">Public Link </p>
            <input type="text" className="rounded-[15px] bg-gray-100 text-lightwhiteInput p-4 text-sm dimWhiteBorder focus:whiteBorder" value="I want to create a 3D model." />
          </div>

          <div className="flex text-lg pt-2 pb-2 relative">
            <div className=" absolute left-0 right-0 top-[50px] m-auto mt-2" style={{ "background": "#5F6369", "height":"145px", "width":"1px"}}></div>
            <div className=" flex-1 flex flex-col text-center">
              <p className=" py-4">QR Code</p>
              <div><img src="./qr.png" class="mr-2 max-w-52" alt="back"/></div>
            </div>
            <div className=" flex-1 flex flex-col items-center justify-center" >
              <p className=" w-52 text-center pb-5 leading-6">Scan QR code to view in WebXR</p>
              <div class="bg-lightblack w-[202px] h-[60px] rounded-8xs text-lg  dimWhiteBorder hover:whiteBorder flexCenter">
                <img
                  src="./download.png"
                  class="mr-2"
                  alt="share"
                  width={18}
                  height={18}
                />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>


        { /* Model Section Start*/}

        <div className="p-5 bg-darkblack rounded-xl mt-[30px]">


          <div className="flex text-lg pb-2 relative">
            <img src="./heart.png" className="absolute right-0 top-0" width={20} height={20} />
            <div className=" flex-1 flex flex-col text-left mr-[10px]">
              <p className=" py-4">3d Models</p>
              <div><img src="./rectangle.png" class="mr-2 w-full" alt="rectangle"/></div>
            </div>

            <div className=" flex-1 flex flex-col text-left ml-[10px]">
              <p className=" py-4">Images</p>
              <div><img src="./rectangle.png" class="mr-2 w-full" alt="rectangle"/></div>
            </div>

          </div>
        </div>

       
       { /* Comments Section*/}

       <div className="p-5 bg-black rounded-xl mt-[30px]">

          <div className="flex items-center">
            <a href="#" className="" style={{ flex: "0 0 34px" }}>
            <span className="bg-gray-100 rounded-3xl flexCenter p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M9.33301 3H13.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33301 6.33301H13.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 9.66699H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 13H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.33301 5.62033V3.71366C6.33301 2.96699 6.03301 2.66699 5.27967 2.66699H3.37967C2.63301 2.66699 2.33301 2.96699 2.33301 3.71366V5.61366C2.33301 6.36699 2.63301 6.66699 3.37967 6.66699H5.27967C6.03301 6.66699 6.33301 6.36699 6.33301 5.62033Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            </a>
            <p className="text-lg pl-2">Chat History Log </p>
          </div>

          <div className="flex items-center mt-4">
            <span className="bg-gray-100 rounded-3xl flexCenter w-8 h-8" style={{ flex: "0 0 34px" }}>
                <p className="text-sm">MD</p>
            </span>
            <input type="text" className="flex-1 rounded-[10px] bg-gray-100 ml-[10px] text-lightwhiteInput p-2.5 text-sm dimWhiteBorder focus:whiteBorder" value="Write a comment" />
          </div>

          <div className="flex items-start mt-4">
            <span className="rounded-3xl flexCenter" style={{ flex: "0 0 34px" }}>
              <img src="./userchat.png" class=" w-8" alt="userchat"/>
            </span>
            <div className="ml-[10px] flex-1">
              <div className="borderline relative">
                <span className="borderComment"></span>
                <p className="text-lg text-white pt-2">Julia <span className="text-[12px] text-lightwhite pl-2">1 month ago</span></p>
                <p className="text-sm2 pt-1 pr-4">Exccelent Product</p>
                <span className="text-[12px]  pt-1 cursor-pointer">Reply</span>
              </div>

              {/* Reply Section */}

              <div className="flex items-start mt-4">
                <span className="rounded-3xl flexCenter" style={{ flex: "0 0 34px" }}>
                  <img src="./user.png" class=" w-8" alt="user"/>
                </span>
                <div className="ml-[10px] flex-1 relative">
                  <div className="borderline relative">
                    <span className="borderComment"></span>
                    <p className="text-lg text-white pt-2">Angel <span className="text-[12px] text-lightwhite pl-2">1 month ago</span></p>
                    <p className="text-sm2 pt-1 pr-4">Thanks</p>
                  </div>
                  
                  <div className="absolute top-0 right-0">
                      <span className=" cursor-pointer" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={isRed ? 'red' : 'none'}>
                          <path d="M17.3671 3.84124C16.9415 3.41541 16.4361 3.07761 15.8799 2.84714C15.3237 2.61667 14.7275 2.49805 14.1254 2.49805C13.5234 2.49805 12.9272 2.61667 12.371 2.84714C11.8147 3.07761 11.3094 3.41541 10.8838 3.84124L10.0004 4.72457L9.11709 3.84124C8.25735 2.98149 7.09128 2.49849 5.87542 2.49849C4.65956 2.49849 3.4935 2.98149 2.63376 3.84124C1.77401 4.70098 1.29102 5.86704 1.29102 7.0829C1.29102 8.29876 1.77401 9.46483 2.63376 10.3246L3.51709 11.2079L10.0004 17.6912L16.4838 11.2079L17.3671 10.3246C17.7929 9.89894 18.1307 9.39358 18.3612 8.83736C18.5917 8.28115 18.7103 7.68497 18.7103 7.0829C18.7103 6.48083 18.5917 5.88465 18.3612 5.32844C18.1307 4.77222 17.7929 4.26686 17.3671 3.84124Z" stroke={isRed ? 'red' : 'white'} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      <span className="ml-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                      
                      
                  </div>
                  {/* Reply to Reply Section */}

                      <div className="flex items-start mt-4">
                        <span className="rounded-3xl flexCenter" style={{ flex: "0 0 34px" }}>
                          <img src="./userchat.png" class=" w-8" alt="userchat"/>
                        </span>
                        <div className="ml-[10px] flex-1">
                          <p className="text-lg text-white pt-2">Julia <span className="text-[12px] text-lightwhite pl-2">1 month ago</span></p>
                          <p className="text-sm2 pt-1 pr-4">Looking forward</p>
                        </div>
                      </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default UserTaskCard;
