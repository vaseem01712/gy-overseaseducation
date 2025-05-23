import React from 'react';
import ExamTable from './ExamTable';
import pte from "../assests/pte.jpg";

const PTE = () => {
  const headers = ["Section", "Questions", "Time Limit"];
  const data = [
    { Section: "Reading", Questions: "15-20 Questions", "Time Limit": "32-41 Minutes" },
    { Section: "Listening", Questions: "17-25 Question, section2 -38 questions", "Time Limit": "20 Minutes, 55 Minutes"},
    { Section: "Speaking", Questions: "35-42 Question", "Time Limit": "45-57 Minutes" },
    { Section: "Writing", Questions: "3-5 Questions", "Time Limit": "50-60 Minutes" },
  ];
  
  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <img src={pte} alt="PTE Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="px-4 py-10 sm:p-10 md:p-20 lg:p-36">
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          PTE academic is a computer-based academic English language test aimed at non-native English speakers wanting to study abroad. PTE Academic offers fast and flexible English testing with the ability for the candidates to schedule their tests in as little as 24-hours in advance, and typically receive their results in 5 business days.
        </p>
        
        <div className='my-5 sm:my-8 md:my-10'>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Duration is 3 hours</strong>
          </p>
          <div className="overflow-x-auto">
            <ExamTable headers={headers} data={data} />
          </div>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Score-90    Average-60+     Validity-2 years</strong>
          </p>
        </div>
        
        <h3 className='font-bold text-blue-950 text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-6 md:mt-8'>
          *Contact us for more details regarding training and testing.
        </h3>
      </div>
    </div>
  );
};

export default PTE;
