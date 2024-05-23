import React, { useState } from "react";
import modalStyles from "./styling/Modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div onClick={openModal}>{children}</div>

      {isModalOpen && (
        <div className={modalStyles.modal}>
          <div className={modalStyles.overlay} onClick={closeModal}></div>
          <div className={modalStyles.modal_content}>
            <div className={modalStyles.close_modal}>
              <p>Contact Me</p>

              <FaTimes onClick={closeModal} className={modalStyles.close} />
            </div>
            <form
              action="https://formsubmit.co/roykdemy@gmail.com"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your name" required />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className={modalStyles.submit}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
