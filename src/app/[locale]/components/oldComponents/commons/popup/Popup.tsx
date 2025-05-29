'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import './Popup.css';


const Popup = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [action, content] = React.Children.toArray(children)

  return (
    <>
      <span className="popup-btn" onClick={togglePopup}>
        {action}
      </span>

      {isOpen && (
        <motion.div
          className="popup-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="popup overflow-y-auto place-items-center"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "tween", stiffness: 50 }}
          >
            <button onClick={togglePopup} className="close-popup-btn absolute top-1 right-4">x</button>
            {content}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Popup;
