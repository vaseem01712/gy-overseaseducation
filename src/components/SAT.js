import React from 'react';
import ExamTable from './ExamTable';
import sat from "../assests/sat.jpg";

const SAT = () => {
  const headers = ["Section", "Questions", "Time Limit"];
  const data = [
    { Section: "Reading", Questions: "52 Questions", "Time Limit": "65 Minutes" },
    { Section: "Mathematics", Questions: "section1 -20 questions, section2 -38 questions", "Time Limit": "20 Minutes, 55 Minutes" },
    { Section: "Speaking", Questions: "1 Topic", "Time Limit": "50 Minutes" },
    { Section: "Writing and Language", Questions: "44 Questions", "Time Limit": "35 Minutes" },
  ];

  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <img src={sat} alt="SAT Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="px-4 py-10 sm:p-10 md:p-20 lg:p-36">
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          SAT is a world-renowned admission test required to be given by candidates desirous of taking admission to undergraduate programs primarily in the USA and Singapore. SAT is offered four times a year in India, i.e., October, December, March, and May. The test is typically offered on the first Saturday of these months.
        </p>
        
        <div className='my-5 sm:my-8 md:my-10'>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Duration is 4 hours</strong>
          </p>
          <div className="overflow-x-auto">
            <ExamTable headers={headers} data={data} />
          </div>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Score-1600    Average-12     Validity-5 years</strong>
          </p>
        </div>

        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          The SAT requirements for college admissions can vary widely among countries. However, many international universities, particularly in English-speaking countries, consider SAT scores as part of their admissions process for international students. It's important to note that the specific SAT requirements can vary widely among universities within each country. A few countries where SAT scores are commonly considered: USA, Canada, UK, Australia, and Singapore.
        </p>
        
        <h3 className='font-bold text-blue-950 text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-6 md:mt-8'>
          *Contact us for more details regarding training and testing.
        </h3>
      </div>
    </div>
  );
};

export default SAT;
