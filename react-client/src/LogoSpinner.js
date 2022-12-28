import React, { useRef, useEffect } from 'react';

const LogoSpinner = () => {
  const logoRef = useRef();

  useEffect(() => {
    logoRef.current.style.transform = 'rotateY(360deg)';
    logoRef.current.style.transition = 'transform 3s linear';
  }, []);

  return (
    <div className="logo-container">
      <img
        src="https://www.studiocity.social/logo.PNG"
        alt="Company logo"
        ref={logoRef}
      />
    </div>
  );
};

export default LogoSpinner;
