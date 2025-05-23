import React, { useState } from "react";

import Country from "../assests/countrybg.jpg";

const servicesItems = [
  { title: "Counseling", content: `Our counseling services cater specifically to Indian students with a dream of studying abroad. With our vast expertise and in-depth knowledge, we offer personalized guidance throughout the entire study abroad journey. From helping you select the best universities and courses to assisting with visa applications and scholarship opportunities, we strive to make the process smooth and stress-free. Our dedicated team understands the unique challenges faced by Indian students and provides valuable insights for cultural integration and academic success abroad. With us by your side, you can confidently embark on a transformative educational experience and unlock a world of opportunities in top international institutions.
Receive personalized study abroad guidance at Study Next Overseas. Our proficient advisors navigate you through each stage, from choosing universities to submitting applications. Open doors to global prospects and attain a competitive edge. Your voyage towards international education begins with us.` },
  { title: "University Selection", content: `University selection is a critical step for Indian students aspiring to study abroad. With an abundance of options across the globe, we provide expert guidance to help you find the perfect fit. Our team considers your academic interests, career goals, and personal preferences to shortlist top universities renowned for their excellence in your chosen field. We evaluate factors such as faculty expertise, research opportunities, campus facilities, and cultural integration support. With our in-depth knowledge of admission requirements and program offerings, we ensure that you make informed decisions. Together, let's pave the way for your successful and transformative study abroad experience in the university that best aligns with your aspirations.` },
  { title: "SOP and Documentation", content: `For Indian students aspiring to study abroad, a well-crafted Statement of Purpose (SOP) and meticulous documentation are vital elements in the application process. Our expert guidance ensures that your SOP showcases your academic journey, career aspirations, and personal growth, making a compelling case for admission to your dream university. We work closely with you to understand your unique strengths and experiences, helping you articulate them effectively in your SOP.

Additionally, our dedicated team assists in compiling and organizing essential documents, including academic transcripts, letters of recommendation, standardized test scores, and financial records. We meticulously review each document to ensure accuracy and compliance with international standards and specific university requirements.

By streamlining the application process and presenting a comprehensive and well-structured application package, we enhance your chances of acceptance to top institutions worldwide. Let us be your support in presenting your best self and embarking on a transformative study abroad journey that opens doors to limitless opportunities for personal and academic growth.` },
  { title: "University Liaison", content: `At Study Next Overseas, we value the significance of university interaction in creating transformative study abroad experiences. Our dedicated team actively engages with prestigious institutions worldwide, fostering collaborative partnerships. Through these interactions, we curate diverse and enriching programs, providing students with exceptional academic opportunities and cultural immersion. We believe that meaningful university interactions lay the foundation for empowering global minds and facilitating life-changing educational journeys for aspiring scholars. Our Consultants play a pivotal role in fostering relationships and interactions with foreign universities. Their expertise ensures a seamless bridge between students and institutions around the world. Our Consultants extensively research foreign universities to understand their programs, faculty, campus life, and admission requirements. This knowledge helps them match students with suitable institutions. Our Consultants establish partnerships with various universities, enhancing their access to the latest information about programs, scholarships, and admission trends.Our Consultants maintain relationships with universities for ongoing updates and continuous improvement of their services.They gather feedback from students and universities to refine their approach, ensuring students' needs are met.` },
  { title: "Visa Assistance", content: `At Study Next Overseas, our visa assistance program streamlines the study abroad process for students. Our expert team provides comprehensive guidance and support throughout the visa application journey, ensuring all necessary documents are compiled accurately and efficiently. With a deep understanding of various immigration regulations, we aim to make the visa process hassle-free. Study Next Overseas is committed to helping students fulfill their international education dreams, making the world their classroom with ease and confidence.` },
  { title: "Forex", content: `At Study Next Overseas, we understand the importance of managing finances efficiently during international education. Our Forex Assistance program aims to provide students with seamless foreign exchange solutions. Our expert team offers guidance on currency exchange rates, enabling students to make informed decisions while converting funds for tuition and living expenses abroad. We collaborate with reliable forex partners to offer competitive rates and minimal transaction fees. With our Forex Assistance, students can avoid unnecessary hassles and ensure that their money goes further, making their study abroad experience financially stress-free. Let us assist you in managing your foreign exchange needs, allowing you to focus on your academic journey with confidence.` },
  { title: "Insurance Assistance", content: `At Study Next Overseas, we prioritize the safety and well-being of our students throughout their study abroad journey. Our Student Insurance Assistance program ensures that students have comprehensive coverage for medical emergencies, accidents, and other unforeseen circumstances while studying overseas. Our dedicated team assists students in selecting the right insurance plan that meets their specific needs and complies with the requirements of their host country. We collaborate with trusted insurance providers to offer affordable and reliable policies. With our Student Insurance Assistance, students can embark on their international education experience with peace of mind, knowing they are protected and cared for in any situation.` },
  { title: "Pre and Post Travel Assistance", content: `Study Next Overseas in Bangalore takes pride in providing comprehensive Pre and Post-Travel Assistance for Indian students aspiring to study abroad. Before your departure, we offer personalized Pre-Departure Counseling to help you prepare for your new academic journey. Our expert team assists with visa support, ensuring a smooth visa application process. Additionally, we help you secure suitable accommodation arrangements, eliminating uncertainties upon arrival.

Once you land in your study destination, our Post-Arrival Guidance continues to support you. We facilitate orientation programs, acquainting you with the new environment and academic life. Our team remains available to address any concerns or challenges you may encounter, ensuring a seamless transition. At Study Next Overseas, we are dedicated to making your study abroad experience fulfilling and memorable.` },
  { title: "Scholarship Assistance", content: `At Study Next Overseas, we believe that financial constraints should not hinder students' pursuit of higher education. Our Scholarship Assistance program is dedicated to helping students find suitable scholarship opportunities to support their academic journey abroad. Our team of experts guides students through the scholarship application process, providing valuable insights and assistance in preparing strong applications. We stay up-to-date with various scholarship offerings and eligibility criteria, ensuring that students have the best chance of securing financial aid. With our Scholarship Assistance, students can unlock a world of possibilities and turn their study abroad dreams into reality without the burden of financial worries.` },
  { title: "Student Loan", content: `At Study Next Overseas, we understand that funding your international education can be challenging. Our Loan Assistance program is designed to help students explore viable loan options to support their academic pursuits abroad. Our team of financial experts works closely with students, guiding them through the loan application process and providing personalized advice to secure the best terms and rates. We collaborate with reputable financial institutions to offer competitive loan packages that suit individual needs. With our Loan Assistance, students can focus on their studies with confidence, knowing that they have the necessary financial support to make their study abroad dreams a reality.` },
  { title: "Other Services", content: `In addition to Visa Assistance, Scholarship Assistance, Loan Assistance, Student Insurance Assistance, and Pre and Post Travel Assistance, we offer a range of other essential services.Our cultural orientation programs prepare students for their international adventure, fostering cross-cultural understanding and helping them adapt to new environments with confidence.We also provide ongoing academic and emotional support during their overseas journey. With our holistic approach, Study Next Overseas is the ultimate partner for students seeking a transformative and enriching international education experience. As part of their comprehensive services, our consultants offer mock visa and university interview sessions to prepare students for the critical stages of their international journey. Our Consultants conduct mock visa interviews to familiarize students with the visa application process and ensure they're well-prepared for the official interview. Preparing for university interviews is crucial, as they play a vital role in the admission process.Consultants conduct mock interviews to equip students with:Admission Insights,Answer Structuring, Overcoming Nervousness and Tailored Guidance.The role of our consultants extends beyond mere guidance; they empower students to navigate crucial interview stages with grace and proficiency, ensuring a smooth path toward their international academic endeavors.` }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("Counseling");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-96  md:h-screen flex items-center justify-center text-center text-white">
  {/* Background Image with Blur */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg"
    style={{ backgroundImage: `url(${Country})` }}
  ></div>

  {/* Overlay for Better Contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-5"></div>

  {/* Content on Top */}
  <div className="relative">
    <p className="text-2xl md:text-4xl font-bold">{activeTab}</p>
    <p className="text-lg md:text-xl mt-2">
      Services / <span className="text-yellow-300">{activeTab}</span>
    </p>
  </div>
</div>


      {/* Sidebar & Content Layout */}
      <div className="container mx-auto px-6 md:px-12 py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Sidebar */}
    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-1">
      <h3 className="text-blue-950 text-xl md:text-2xl font-semibold mb-5">
        Services
      </h3>
      <ul className="space-y-3">
        {servicesItems.map((item) => (
          <li
            key={item.title}
            className={`p-4 rounded-md cursor-pointer text-lg md:text-xl text-gray-800 ${
              activeTab === item.title
                ? "bg-blue-100 text-blue-900 font-bold"
                : "hover:bg-gray-200 transition duration-300"
            }`}
            onClick={() => handleTabClick(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>

    {/* Content Section */}
    <div className="bg-white p-8 rounded-lg shadow-md md:col-span-3">
      
      <h3 className="text-blue-950 text-2xl md:text-3xl font-semibold mb-6">
        {activeTab}
      </h3>
      <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
        {servicesItems.find((item) => item.title === activeTab)?.content}
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Services;
