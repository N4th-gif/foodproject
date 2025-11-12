import React from 'react';
import ContextData, { DataProvider } from '../Components/ContextData';

function Card() {
  const { detail } = ContextData();
  return (
    <div>
      <h1 className=' text-5xl text-center my-[50px]'>List Name</h1>
      <div className=' grid grid-cols-4 gap-[30px] px-[50px]'>
        {detail.map((item) => (
          <div
            key={item.id}
            className=' w-[300px] h-[300px] overflow-hidden p-1 relative'
          >
            <div className=' absolute z-[-1] top-0 left-0 w-[100%] h-[100%] transform scale-150 animate-spin-slow bg-[conic-gradient(from_0deg,#ff0080,#ff8c00,#fff,#fff,#2ecc71,#ff0080,#fff,#fff,#fff)]'></div>

            <div className=' bg-white w-full h-full text-center'>
              <h1>Name: {item.name}</h1>
              <p>Age: {item.age}</p>
              <p>Gender: {item.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
