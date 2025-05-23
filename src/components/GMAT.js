import React from 'react';
import ExamTable from './ExamTable';
import gmat from "../assests/gmat.jpg";

const GMAT = () => {
  const headers = ["Section", "Questions", "Time Limit"];
  const data = [
    { Section: "Analytical Writing", Questions: "1 question", "Time Limit": "30 Minutes" },
    { Section: "Integrated Reasoning", Questions: "12 questions", "Time Limit": "30 Minutes" },
    { Section: "Quantitative Reasoning", Questions: "31 questions", "Time Limit": "62 Minutes" },
    { Section: "Verbal Reasoning", Questions: "36 questions", "Time Limit": "65 Minutes" },
  ];

  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <img src={gmat} alt="GMAT Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="px-4 py-10 sm:p-10 md:p-20 lg:p-36">
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          The Graduate Management Admission Test (GMAT) is a computer adaptive test (CAT) intended to assess certain analytical, writing, quantitative, verbal, and reading skills in written English for use in admission to a graduate management program, such as an MBA. It requires knowledge of certain specific grammar and knowledge of certain specific algebra, geometry, and arithmetic. According to the test-owning company, the Graduate Management Admission Council (GMAC), the GMAT assesses analytical writing and problem-solving abilities. It can be taken up to five times a year, but no more than 8 times in total. Attempts must be at least 16 days apart.
        </p>
        
        <div className='my-5 sm:my-8 md:my-10'>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>In total, the test takes just under 3 hours 30 minutes to complete, including two optional breaks.</strong>
          </p>
          <div className="overflow-x-auto">
            <ExamTable headers={headers} data={data} />
          </div>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Score-800     Average-650+    Validity-5 Years</strong>
          </p>
        </div>
        
        <p className='text-gray-700 text-lg sm:text-xl md:text-2xl'>
          *From 2024, the GMAT Focus Edition will be applicable for 2 Hours and 15 Minutes in total.
        </p>
        <h3 className='font-bold text-blue-950 text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-6 md:mt-8'>
          *Contact us for more details regarding training and testing.
        </h3>
      </div>
    </div>
  );
};

export default GMAT;
