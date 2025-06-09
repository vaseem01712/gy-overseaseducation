import React from 'react';
import mbbs from "../assests/mbbs-bg.jpg";
import { Link } from 'react-router-dom';


const RussiaMbbs = () => {
  return (
    <div className="pt-24">
      {/* Background Image Section */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-64 md:h-screen"
        style={{ backgroundImage: `url(${mbbs})` }}
      ></div>

      {/* Content Section */}
      <div className="bg-slate-100 text-lg px-4 md:px-10 py-12">
        <div className="bg-white rounded-lg p-8 md:p-14 max-w-screen-lg mx-auto">
          <h3 className="text-blue-950 text-3xl md:text-4xl mb-8 text-center font-bold">
            Making the Dream of Becoming a Doctor a Reality
          </h3>
          <p className="text-slate-800 text-lg md:text-xl leading-relaxed">
            Becoming a doctor is a cherished dream for countless students. However, the high competition and limited number of seats in India often compel many to consider alternative career paths, leaving their aspirations unfulfilled.
            <br /><br />
            At <strong>GY Overseas</strong>, we are committed to changing this narrative. We strive to help aspiring medical students achieve their dreams by providing them with opportunities for global education. Our programs offer access to world-class medical universities in countries like Russia, Ukraine, Armenia, Georgia, and more—all at budget-friendly prices.
            <br /><br />
            We aim to give students not only a high-quality education but also invaluable global exposure, ensuring they are well-equipped to excel in their medical careers.
            <br /><br />
            Pursuing an MBBS degree in Russia offers students access to high-quality medical education at globally recognized institutions. Here are some of the top medical universities in Russia:
          </p>

          {/* Universities Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {[
              { name: "I.M. Sechenov First Moscow State Medical University", location: "Moscow, Russia", description: "Established in 1758, it is the oldest and one of the most prestigious medical schools in Russia, known for its strong tradition in medical education and research." },
              { name: "Pirogov Russian National Research Medical University", location: "Moscow, Russia", description: "Founded in 1906, this university is recognized for its comprehensive medical programs and significant contributions to medical science." },
              { name: "Kursk State Medical University", location: "Kursk, Russia", description: "Established in 1935, it is renowned for being the first university in Russia to offer MBBS courses in English, attracting a significant number of international students." },
              { name: "Kazan State Medical University", location: "Kazan, Russia", description: "Founded in 1814, it is known for its high-quality medical programs and emphasis on practical training and clinical experience." },
              { name: "Siberian State Medical University", location: "Tomsk, Russia", description: "Established in 1888, it is recognized for its modern infrastructure and advanced teaching methodologies, providing a comprehensive medical education." },
              { name: "Volgograd State Medical University", location: "Volgograd, Russia", description: "Founded in 1935, this university is known for its commitment to high-quality education and comprehensive medical training, preparing students for successful careers in healthcare." },
              { name: "People's Friendship University of Russia", location: "Moscow, Russia", description: "Established in 1960, it offers a diverse and welcoming environment for international medical students, with a global approach that promotes cultural interchange." },
              { name: "Far Eastern Federal University", location: "Vladivostok, Russia", description: "Known for its comprehensive medical programs, advanced research facilities, and recognition by the National Medical Commission (NMC) of India." }
            ].map((uni, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-blue-950 text-xl font-bold">{uni.name}</h3>
                <h4 className="text-gray-700 text-lg font-medium">{uni.location}</h4>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{uni.description}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-800 text-lg md:text-xl leading-relaxed mt-10">
            These universities are recognized by international medical councils and organizations, including the <strong>National Medical Commission (NMC) of India</strong> and the <strong>World Health Organization (WHO)</strong>. They offer programs in English, making them accessible to international students. Additionally, the cost of education in these institutions is relatively affordable compared to Western countries, with tuition fees and living expenses being economical.
            <br /><br />
            For Indian students, it's essential to qualify for the <strong>NEET examination</strong> to pursue MBBS abroad. Upon completion of their degrees, students must clear the <strong>Foreign Medical Graduate Examination (FMGE)</strong> or the upcoming <strong>National Exit Test (NExT)</strong> to practice medicine in India.
            <br /><br />
            Choosing to study MBBS in Russia provides students with a robust medical education, international exposure, and the opportunity to fulfill their aspirations of becoming medical professionals.
          </p>
          <br></br>
          <Link to="/contact" className="bg-blue-950 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300">
  Enroll Now
</Link>
        </div>
      </div>
    </div>
  );
};

export default RussiaMbbs;
