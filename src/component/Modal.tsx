import React, { useState } from "react";
import modalStyles from "./styling/Modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children }) => {
  const [result, setResult] = React.useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
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

              <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>

                <div className={modalStyles.submit_container}>
                  <button type="submit" className={modalStyles.submit}>
                    Send
                  </button>
                  <span>{result}</span>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
