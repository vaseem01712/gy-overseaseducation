
import React from "react";
import contact from "../assests/contact-bg.jpg";
import location from "../assests/location.png";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-2xl">
      {/* Background Image */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-64 md:h-screen"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>

      <div className="container mx-auto px-4 md:px-10 py-12">
        {/* Page Heading */}
        <div className="text-center mb-12 max-w-screen-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
            Contact us today to learn more about our study abroad programs. We'll help you choose the right program for your needs and budget.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Location Map */}
          <div>
            {/* <iframe
              title="Location Map"
              src="https://maps.app.goo.gl/6j1JvYKcYpvrRrks6"
              width="100%"
              height="350"
              className="border rounded-lg shadow-md md:h-96"
              allowFullScreen=""
              loading="lazy"
            ></iframe> */}<img src={location} alt="office location"/>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Network Office
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>Address:</strong> <br />
                #103, 4th Main, Hill View Garden, Thurahalli, Bengaluru,
                Karnataka 560061
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>Phone:</strong> <br />
                +91 9915808816 <br />
                +91 6366307235
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>Email:</strong> <br />
                info@gyoverseaseducation.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="mt-14 max-w-screen-md mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
            Get in Touch
          </h2>
          <form className="bg-white shadow-md rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-4 rounded-lg w-full text-lg focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border p-4 rounded-lg w-full text-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border p-4 rounded-lg w-full mt-5 h-36 text-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="bg-blue-600 text-white font-semibold px-8 py-4 mt-5 rounded-lg w-full md:w-auto text-lg">
              Send Message
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
