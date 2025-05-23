import React from "react";
import Accordion from "./Accordion";

const Dubai= () => {
  const data = [
    {
      title: "Why Study Dubai?",
      content:
        "Dubai has a reputation for providing premium education, with many internationally recognized universities and colleges offering a wide range of degree programs.The Knowledge and Human Development Authority (KHDA) is the official body in the UAE that inspects and judges the quality of these schools and colleges across many parameters. Within the UAE, Dubai is the most intercultural city, home to a whopping 200 nationalities! It is welcoming and tolerant of multiple cultures and ways of life, thus paving the way as a metropolitan study haven. This kind of intercultural learning is a priceless form of education in itself.While Dubai is not known for being cheap, there are several areas in the city that cater to the needs and budgets of university students. Areas like Knowledge Village, Dubai Academic City, Dubailand, Silicon Oasis, etc. all offer affordable student-friendly housing options that are safe and have pretty much all the amenities students could possibly require.",
    },
    {
      title: "What Courses are the best?",
      content: `Aerospace Engineering.
Architecture.
Business Management.
Civil Engineering/Construction Management.
Public Relations and Media.
Tourism and Hospitality Management.`,
    },
    {
      title: "Tuition fees",
      content: `The typical tuition fees for undergraduate programs in Dubai fall within the range of 37,500 to 70,000 AED per year (equivalent to 753,750 to 1,407,000 INR), while for postgraduate programs, the fees range from 55,000 to 75,000 AED (equivalent to 1,105,500 to 1,507,500 INR).`,
    },
    {
      title: "Cost of Living for Students",
      content: "On-campus accommodation will cost you around 14,000-27,000 AED (2,81,400-5,42,700 INR roughly).You can expect your average food cost to be around 908 AED per month(18,250 INR). Usually, international students prefer public modes of transportation as it is the most viable option, especially for students in terms of cost and efficiency.",
    },
    {
      title: "Work Study for Students",
      content: "As an international student, willing to work part-time on-campus or off-campus, you need an authorised work permit or work visa from Dubai's UAE Labour Department. Before obtaining a work permit, you need to get your residence permit which makes you eligible to apply for a work visa to work in Dubai.Students are paid wages ranging from AED 15 to AED 30 per hour.",
    },
    {
      title: "Important Data",
      content: `Capital City - Dubai
Indian Students - 38,000 per year
Currency - AED
Continent - Asia
Research Grant - AED 21 billion
Population - 9,200,000
GDP - USD414 billion
Official Language - Arabic
Climate - The UAE has an arid desert climate with only two main seasons, winter and summer separated by two transitional periods, respectively. The winter season (December to March) has a mean temperature ranging from 16.4C to 24C.
Area - 83,600 sq.km
Wages(Avg) - USD70,256 per Year`,
    },
  ];

  return <Accordion items={data} />;
};

export default Dubai;
