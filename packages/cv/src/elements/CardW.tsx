import React from 'react';

const Card = () => {
  return (
    <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-blue-200 hover:dark:bg-[#0C66E4]">
      <h3 className="text-xl text-center">Today</h3>
      <div className="gap-4 relative">
        <div  className="bg-secondary-500 w-20 h-20 scale-[110%]">
        </div>
        <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 text-5xl text-center group-hover:translate-x-8 group-hover:-translate-y-16 group-hover:scale-150">
          6°
        </h4>
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10">
        <p className="text-sm">light rain</p>
        <p className="text-sm">50% humidity</p>
      </div>
    </div>
  );
}

export default Card;



export const Card2 = () => {
  return (
      <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
        <div className="text-gray-500 group-hover:scale-105 transition-all">
          <svg className="w-16 h-16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
        <div className="group-hover:pb-10 transition-all duration-500 delay-200">
          <h1 className="font-semibold text-gray-700">Tamani Phiri</h1>
          <p className="text-gray-500 text-sm">@senior_developer</p>
        </div>
        <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
          <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">

          </div>
        </div>
      </div>
  );
}
