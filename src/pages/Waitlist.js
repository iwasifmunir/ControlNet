import React from 'react'

export default function Waitlist() {
  return (
    <>
        <div className="flex flex-col justify-center items-center h-screen text-white">
            <p className="text-8xl 2xl:text-5xl lg:text-lg mb-8 px-3 text-center">
                We are having a phased roll-out. So…
            </p>
            <a href="/">
                <div className="text-white w-[40.625rem] 2xl:w-[24.625rem] py-4 btnGray hover:opacity-90 text-center">
                    Join The Waitlist
                </div>
            </a>
        </div>
    </>
  )
}
