import React, { useEffect, useState } from "react";
import { MDBIcon } from "mdbreact";
import './Styles.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 5000
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <MDBIcon icon="space-shuttle" size="4x" rotate="270" className="cyan-text" />
        </div>
      )}
    </div>
  );
}
