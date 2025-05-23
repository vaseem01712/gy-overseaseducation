import React from 'react'
import Carousel from "./Carousel"
import { FaCaretRight, FaMousePointer, FaClock, FaUser, FaCheck, FaLongArrowAltRight, FaPeopleArrows, FaFolderOpen, FaFolder, FaPhone } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'
import PrepExams from './PrepExam';
import gyLimitedBg from "../assests/gy-limited-bg.jpg";
import carousel3 from "../assests/carousel-3.png";
import carousel4 from "../assests/carousel-4.png";
import carousel1 from "../assests/carousel-1.jpg";
import carousel5 from "../assests/carousel-5.png";
const Home = () => {
  const slides = [
    carousel1,
    carousel5,
    carousel3,
    carousel4,
];

  return (
    <div>
      <div>
        <Carousel slides={slides} />
      </div>
      <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto text-center">
  <h2 className="text-blue-950 text-2xl sm:text-3xl my-4 sm:my-6">Why Study Abroad?</h2>
  <p className="text-slate-800 text-base sm:text-lg">
    Studying abroad offers a transformative and enriching experience that goes beyond traditional education. It opens doors to a world of diverse cultures, perspectives, and opportunities. Immerse yourself in a new environment, enhancing your adaptability, cross-cultural communication skills, and global awareness. The chance to learn from renowned professors in international institutions adds depth to your academic journey. Beyond the classroom, explore historic landmarks, try new cuisines, and build friendships with peers from around the globe. This adventure fosters personal growth, independence, and self-discovery as you navigate unfamiliar situations, building resilience and confidence. The memories and insights gained from studying abroad become invaluable assets, enriching your professional and personal life. Employers value the skills cultivated through this experience – from problem-solving in diverse contexts to embracing change with an open mind. Seize the opportunity to broaden your horizons, enhance your education, and create lasting memories. Embark on this adventure to gain a unique perspective on the world and yourself.
  </p>

  <h2 className="text-blue-950 text-2xl sm:text-3xl my-4 sm:my-6">Discover Your Ideal Program</h2>
  <p className="text-slate-800 text-base sm:text-lg">
    Picture yourself studying amidst historic European architecture, embracing the bustling streets of Asian metropolises, or delving into the academic excellence of North American institutions. Whether you're passionate about engineering, business, arts, or sciences, we have a plethora of options waiting for you. At Study Next Overseas, we're not just about sending you abroad; we're about sending you on a path of growth, exploration, and self-discovery. It's time to step out of your comfort zone and embrace the world as your classroom. Your journey starts here. Your dreams take flight with us. Unveil the opportunities that await – contact us today and let's begin this exciting adventure together!
  </p>

  <h2 className="text-blue-950 text-2xl sm:text-3xl my-4 sm:my-6">Support Every Step of the Way</h2>
  <p className="text-slate-800 text-base sm:text-lg">
    Our mission is to simplify the complex process of studying abroad. From the moment you walk through our doors or reach out to us online, we're committed to understanding your aspirations, interests, and concerns. We believe that your journey is unique, and our approach reflects that belief. Our experienced consultants will take the time to understand your academic background, career objectives, and personal preferences. This information forms the foundation of our tailored guidance. Transitioning to a new country can be a culture shock. Our pre-departure orientations equip you with the knowledge and confidence needed to thrive in your new environment. Studying abroad is more than classrooms and textbooks – it's about embracing new cultures, forming global friendships, and gaining a broader perspective on life. Our support extends beyond the administrative aspects to help you adapt to the cultural nuances of your destination. At Study Next Overseas, we're more than consultants; we're your companions on this transformative journey. We take pride in celebrating your victories, guiding you through challenges, and witnessing your personal growth.
  </p>
</div>

<div
      className="bg-cover bg-bottom bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${gyLimitedBg})` }}
    >
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-12 md:py-24 text-black text-center">
        <h2 className="text-blue-950 text-2xl md:text-4xl font-bold pb-6 leading-tight tracking-tight mb-8">
          WHY GY OVERSEAS EDUCATION LIMITED?
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="text-left lg:w-8/12">
            <h3 className="text-blue-950 text-xl md:text-2xl lg:text-4xl pb-6">
              We at <strong>GY OVERSEAS</strong> commit to strive for total customer satisfaction through:
            </h3>
            <ul className="flex flex-wrap lg:w-9/12 mb-12">
              <li className="flex text-sm md:text-lg w-full mb-2">
                <FaCaretRight className="text-lg md:text-xl text-blue-950 mr-2" />
                Delivery of Services with Full Conformity to Customer Needs & Expectations.
              </li>
              <li className="flex text-sm md:text-lg w-full mb-2">
                <FaCaretRight className="text-lg md:text-xl text-blue-950 mr-2" />
                Continual Improvement in the Effectiveness of Systems through Regular Review.
              </li>
              <li className="flex text-sm md:text-lg w-full mb-2">
                <FaCaretRight className="text-lg md:text-xl text-blue-950 mr-2" />
                Training & Development of Our Workforce.
              </li>
              <li className="flex text-sm md:text-lg w-full mb-2">
                <FaCaretRight className="text-lg md:text-xl text-blue-950 mr-2" />
                We Offer Trustworthy and Convenient Solutions to Your Forex Needs at the Best Rates.
              </li>
              <li className="flex text-sm md:text-lg w-full mb-2">
                <FaCaretRight className="text-lg md:text-xl text-blue-950 mr-2" />
                We Have Streamlined, Easy-To-Do and Fast Operational Procedures to Help Customers Make Swift Telegraphic Transfers.
              </li>
              <li className="flex text-sm md:text-lg w-full mb-2">
                <FaCaretRight className="text-lg md:text-xl text-blue-950 mr-2" />
                Our World-Class Services Work On Stout Systems & Processes That Brings Us Closer to the Customer.
              </li>
            </ul>
            <Link to="/contact" className="bg-blue-950 text-white font-bold py-2 px-4 rounded-md">
              GET IN TOUCH
            </Link>
          </div>
          <div className="mt-8 lg:mt-0 lg:pl-8 lg:border-l lg:border-gray-800">
            <div className="text-black text-xl md:text-2xl flex text-left mb-8">
              <FaCheck className="text-4xl md:text-6xl pr-4 md:pr-8" />
              <div>
                <strong>100%</strong>
                <p>TRANSPARENT</p>
              </div>
            </div>
            <div className="text-black text-xl md:text-2xl flex text-left mb-8">
              <FaMousePointer className="text-4xl md:text-6xl pr-4 md:pr-8" />
              <div>
                <strong>PROGRESSIVE</strong>
                <p>APPROACH</p>
              </div>
            </div>
            <div className="text-black text-xl md:text-2xl flex text-left mb-8">
              <FaClock className="text-4xl md:text-6xl pr-4 md:pr-8" />
              <div>
                <strong>TIMELY</strong>
                <p>DELIVERY</p>
              </div>
            </div>
            <div className="text-black text-xl md:text-2xl flex text-left">
              <FaUser className="text-4xl md:text-6xl pr-4 md:pr-8" />
              <div>
                <strong>CUSTOMER</strong>
                <p>IS SUPREME</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div><PrepExams/></div>
     
    </div>
  )
}

export default Home