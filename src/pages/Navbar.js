import React, { useState } from "react";

export default function Navbar() {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };
  return (
    <>
      <section class="absolute flex justify-between max-w-screen-3xl left-0 right-0 m-auto p-12 min-w-80">
        <img src="/Navbar/logo.png" width="90px" />
        {/* <div class=" flex justify-center items-center gap-2 ">
          <div>
            <span class="cursor-pointer">
              <img src="/Navbar/plus.svg" />
            </span>
            <span class="cursor-pointer pl-4" onClick={toggleNavLinks}>
                <img src="/Navbar/menu.svg" />
            </span>
          </div>          
        </div> */}
      </section>
    </>
  );
}
