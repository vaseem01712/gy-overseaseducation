import React from 'react';
import ExamTable from './ExamTable';
import gre from "../assests/gre.jpg";

const GRE = () => {
  const headers = ["Section", "Questions", "Time Limit"];
  const data = [
    { Section: "Analytical Writing", Questions: "Essay Writing", "Time Limit": "30 Minutes" },
    { Section: "Quantitative Reasoning", Questions: "27 questions total", "Time Limit": "41 Minutes" },
    { Section: "Verbal Reasoning", Questions: "27 questions total", "Time Limit": "47 Minutes" },
  ];

  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <img src={gre} alt="GRE Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="px-4 py-10 sm:p-10 md:p-20 lg:p-36">
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          The Graduate Record Examination (GRE) is a standardized test that is an admission requirement for most graduate schools in the United States. The GRE is owned and administered by Educational Testing Service (ETS). According to ETS, the GRE aims to measure verbal reasoning, quantitative reasoning, analytical writing, and critical thinking skills that have been acquired over a long period of learning.
        </p>
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          The GRE General Test features question types that closely reflect the kind of thinking you'll do in graduate and professional school, including business and law.
        </p>
        
        <div className='my-5 sm:my-8 md:my-10'>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>The overall testing time for the computer-delivered GRE General Test is about 1 hour 58 minutes.</strong>
          </p>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>In total, the test takes just under 3 hours 30 minutes to complete, including two optional breaks.</strong>
          </p>
          <div className="overflow-x-auto">
            <ExamTable headers={headers} data={data} />
          </div>
        </div>
        
        <h3 className='font-bold text-blue-950 text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-6 md:mt-8'>
          *Contact us for more details regarding training and testing.
        </h3>
      </div>
    </div>
  );
};

export default GRE;