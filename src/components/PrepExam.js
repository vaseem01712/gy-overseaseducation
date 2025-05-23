import React from "react";
import { Link } from "react-router-dom";
import pteIcon from "../assests/pteIcon.jpg";
import gmatIcon from "../assests/gmatIcon.jpg";
import tofelIcon from "../assests/tofelIcon.jpg";
import ieltsIcon from "../assests/ieltsIcon.jpg";
import satIcon from "../assests/satIcon.jpg";
import greIcon from "../assests/greIcon.jpg"
const PrepExams = () => {
  const exams = [
    {
      title: "IELTS",
      image: `${ieltsIcon}`,
      description:
        "IELTS (International English Language Testing System) is designed to assess the language ability of candidates who need to study or work where English is the language of communication. IELTS has been developed by some of the world’s leading language assessment experts and will test the full range of English skills needed for success in your new job or study placement abroad. You’ll be assessed on the following elements: Listening, Reading, Writing, Speaking. \n\nIELTS has two Types of modules - Academic and General Training. The Academic module is required for students who plan to study at undergraduate or postgraduate levels, while the General Training module is generally a prerequisite for people who want to pursue vocational studies or plan to immigrate. \n\nTotal Duration: 2 hours 40 minutes.",
      link: "/ielts",
    },
    {
      title: "TOEFL",
      image: `${tofelIcon}`,
      description:
        "TOEFL (Test of English as a Foreign Language) measures the ability of non-native speakers to use and understand English in academic settings. It is widely accepted by universities worldwide.",
      link: "/toefl",
    },
    {
      title: "SAT",
      image: `${satIcon}`,
      description:
        "The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States. It assesses a student's readiness for college and provides colleges with a common data point for comparing applicants.",
      link: "/sat",
    },
    {
      title: "GRE",
      image: `${greIcon}`,
      description:
        "The GRE (Graduate Record Examinations) is a standardized test that is an admissions requirement for many graduate schools in the United States and Canada. It tests your analytical writing, verbal reasoning, and quantitative reasoning skills.",
      link: "/gre",
    },
    {
      title: "GMAT",
      image:  `${gmatIcon}`,
      description:
        "The GMAT (Graduate Management Admission Test) is a standardized test used by business schools to evaluate candidates for admission to MBA programs. It measures analytical, writing, quantitative, verbal, and reading skills.",
      link: "/gmat",
    },
    {
      title: "Pearson PTE Academic",
      image: `${pteIcon}`,
      description:
        "The Pearson Test of English (PTE) Academic is a computer-based English language test for non-native speakers who wish to study abroad. It tests Reading, Writing, Listening, and Speaking skills.",
      link: "/pte",
    },
  ];

  return (
    <div className="bg-white py-36 px-5">
      <div className="text-center mb-10 ">
        <h2 className="text-blue-950 text-4xl font-bold">
        <span className="text-yellow-350">—</span> Prep Exams <span className="text-yellow-350">—</span>
        </h2>
        <p className="text-yellow-350 text-xl mt-2 mb-24">
          Prep Exams we help you with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-5 rounded-md shadow-md"
          >
            <Link to={exam.link}>
              <img
                src={exam.image}
                alt={exam.title}
                className="w-full h-40 object-contain mb-3"
              />
            </Link>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2  ">
              {exam.title}
            </h3>
            {exam.description && (
              <p className="text-gray-700 text-center text-xl">{exam.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrepExams;
