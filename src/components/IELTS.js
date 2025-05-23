import React from 'react';
import ielts from "../assests/ielts.jpg";

const IELTS = () => {
  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen">
        <img src={ielts} alt="IELTS Background" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="px-4 py-10 sm:p-10 md:p-20 lg:p-36">
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          IELTS (International English Language Testing System) is designed to assess the language ability of candidates who need to study or work where English is the language of communication. IELTS has been developed by some of the world’s leading language assessment experts and will test the full range of English skills needed for success in your new job or study placement abroad. You’ll be assessed on the following elements: Listening, Reading, Writing, Speaking.
        </p>
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          IELTS has two Types of module - Academic and General Training. The Academic module is required to be given by students who plan to study at undergraduate or postgraduate levels. While the General Training module is generally a pre-requisite for people who either want to pursue vocational studies or plan to immigrate.
        </p>
        <p className='text-gray-500 text-sm sm:text-base md:text-lg'>
          Total Duration: 2 hours 40 minutes.
        </p>
        
        <div>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl">
            <strong>Total Band - 9  |  Average - 6.5  |  Score Validity - 2 years</strong>
          </p>
        </div>
        
        <h3 className='font-bold text-blue-950 text-xl sm:text-2xl md:text-3xl mt-5 sm:mt-6 md:mt-8'>
          *Contact us for more details regarding training and testing.
        </h3>
      </div>
    </div>
  );
};

export default IELTS;
