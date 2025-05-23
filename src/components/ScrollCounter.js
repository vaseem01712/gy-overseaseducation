import React, { useState, useEffect } from 'react';

const ScrollCounter = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [visaMaxCountReached, setVisaMaxCountReached] = useState(false);
  const [yearsOfExpertiseReached, setYearsOfExpertiseReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if it's the first scroll event
      if (scrollCount === 0) {
        // Increment scroll count
        setScrollCount(1);

        // Check specific criteria and set states accordingly
        if (isVisaMaxCountReached()) {
          setVisaMaxCountReached(true);
        }
        if (hasEnoughYearsOfExpertise()) {
          setYearsOfExpertiseReached(true);
        }
      }
    };

    // Attach scroll event listener to window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCount]); // Dependency array includes scrollCount

  // Function to check if Visa Max-Count is reached
  const isVisaMaxCountReached = () => {
    // Example: check if the scroll position exceeds a certain threshold (e.g., 80% of the page)
    const scrollPosition = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
    return scrollPosition >= 0.8; // Example threshold: 80%
  };

  // Function to check if enough years of expertise are reached
  const hasEnoughYearsOfExpertise = () => {
    // Example: check if user has scrolled past a certain section representing 10+ years of expertise
    // Replace this logic with your specific criteria
    const expertiseSection = document.getElementById('expertiseSection');
    if (expertiseSection) {
      const expertiseSectionTop = expertiseSection.getBoundingClientRect().top;
      return expertiseSectionTop <= window.innerHeight * 0.5; // Example: if expertise section is at least halfway visible
    }
    return false;
  };

  return (
    <div>
      <p>First Scroll Event Count: {scrollCount}</p>
      {visaMaxCountReached && <p>Visa Max-Count 80+ reached!</p>}
      {yearsOfExpertiseReached && <p>Years of Business Expertise 10+ reached!</p>}
    </div>
  );
};

export default ScrollCounter;
