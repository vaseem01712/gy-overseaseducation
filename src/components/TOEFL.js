import React from 'react';
import ExamTable from './ExamTable';
import tofel from "../assests/tofel.jpg";

const TOEFL = () => {
  const headers = ["Section", "Questions", "Time Limit"];
  const data = [
    { Section: "Reading", Questions: "36-56 Questions", "Time Limit": "60-80 Minutes" },
    { Section: "Listening", Questions: "34-51 Questions", "Time Limit": "60-90 Minutes" },
    { Section: "Break", Questions: "-", "Time Limit": "10 Minutes" },
    { Section: "Speaking", Questions: "6 Tasks", "Time Limit": "20 Minutes" },
    { Section: "Writing", Questions: "2 Tasks", "Time Limit": "50 Minutes" },
  ];

  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <img src={tofel} alt="TOEFL Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="px-4 py-10 sm:p-10 md:p-20 lg:p-36">
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          The TOEFL iBT test measures your ability to use and understand English at the university level. It evaluates how well you combine your reading, listening, speaking, and writing skills to perform academically.
        </p>
        
        <div className='my-5 sm:my-8 md:my-10'>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Duration is 4 hours</strong>
          </p>
          <div className="overflow-x-auto">
            <ExamTable headers={headers} data={data} />
          </div>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Score - 90 | Average - 60+ | Validity - 2 years</strong>
          </p>
        </div>

        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          The Test of English as a Foreign Language (TOEFL) is a globally recognized assessment that measures your proficiency in English for academic and professional contexts. Designed to evaluate your reading, listening, speaking, and writing skills, TOEFL opens doors to international education and careers. Accepted by thousands of institutions and organizations worldwide, it assures your ability to effectively communicate in English. Whether you're pursuing higher education or seeking professional opportunities abroad, TOEFL serves as a key indicator of your language prowess. Prepare to excel in a diverse, interconnected world with TOEFL as your linguistic passport.
        </p>
        
        <h3 className='font-bold text-blue-950 text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-6 md:mt-8'>
          *Contact us for more details regarding training and testing.
        </h3>
      </div>
    </div>
  );
};

export default TOEFL;
