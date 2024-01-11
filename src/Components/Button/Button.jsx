/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
const Button = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();
  const [gdprAgreement, setGdprAgreement] = useState(false);
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const templateParams = {
    from_fullName: fullName,
    from_number: number,
    from_email: email,
    to_name: "FigTree_Property",
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      zIndex: 10000,
      width: "80%", // Adjust the width based on your needs
      maxWidth: "400px", // Set a max-width for larger screens
      height: "80%", // Adjust the height based on your needs
      maxHeight: "600px", // Set a max-height for larger screens
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      duration: "500s",
    },
  };

  // Your EmailJS service ID, template ID, and Public Key
  const serviceId = "service_jtr1sh4";
  const templateId = "template_bkxjdzv";
  const publicKey = "BbLtIa9QmuRWL1gFA";

  const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data to be sent:", templateParams);
        emailjs
          .send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            console.log("Email sent successfully!", response);
            setFullName("");
            setNumber("");
            setEmail("");
            Swal.fire({
              icon: "success",
              title: "Email Sent Successfully!",
              showConfirmButton: false,
              timer: 1500, // Adjust as needed
            });
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
  };

  return (
    <>
      <button className={`${className}`} onClick={() => setShowModal(true)}>
        GET IN TOUCH
      </button>
      <Modal
        style={customStyles}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Contact Form"
      >
        <div className="">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>

          <form ref={form} onSubmit={handleSubmit}>
            <h2 className="text-2xl font-cinzel py-2">GET IN TOUCH</h2>
            <label>
              Full Name:
              <input
                required
                type="text"
                name="fullName"
                className="rounded-md"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
              />
            </label>

            <div className="grid mt-3 w-full max-w-xs items-center gap-1.5">
              <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <input
                required
                placeholder="example@email.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="bg-white py-2 rounded-lg w-full ">
              <label className="text-gray-600 text-sm">Phone number</label>
              <div className="relative text-gray-500">
                <input
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="w-full text-gray-500 pl-2 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            <div className="flex my-2 items-center">
              <label className="flex items-center ">
                <input
                  required
                  className="mr-2 "
                  type="checkbox"
                  name="agreement"
                  checked={gdprAgreement}
                  onChange={(e) => setGdprAgreement(e.target.checked)}
                />
                I agree to the terms and conditions
              </label>
            </div>
            <p className="my-4">
              Please visit the privacy policy to understand how FigTree handles
              your personal data.
            </p>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full rounded-md my-5 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Button
