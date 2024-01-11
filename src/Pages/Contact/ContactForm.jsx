/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();
  const [gdprAgreement, setGdprAgreement] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const updatedTemplateParams = {
    from_firstName: firstName,
    from_lastName: lastName,
    from_email: email,
    to_name: "FigTree_Property",
    message: message,
  };
  // Your EmailJS service ID, template ID, and Public Key
  const serviceId = "service_jtr1sh4";
  const templateId = "template_bkxjdzv";
  const publicKey = "BbLtIa9QmuRWL1gFA";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data to be sent:", updatedTemplateParams);
    emailjs
      .send(serviceId, templateId, updatedTemplateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setfirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
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
    <div className="lg:w-1/2 w-full bg-white shadow-xl p-4">
      <h1 className="text-center uppercase text-2xl font-cinzel">
        Submit The form <br /> and connect with us{" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="w-full flex  lg:flex-wrap  bg-white"
      >
        <div className="lg:w-1/2 w-full pr-2 ">
          <label
            className="block mb-2 text-sm font-semibold text-gray-600"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="lg:w-1/2 w-full pl-2">
          <label
            className="block mb-2 text-sm font-semibold text-gray-600"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <label
          className="block mb-2 text-sm font-semibold text-gray-600"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label
          className="block mb-2 text-sm font-semibold text-gray-600"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          required
        ></textarea>
        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gdprAgreement"
          >
            GDPR Agreement
          </label>
          <input
            className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            id="gdprAgreement"
            type="checkbox"
            checked={gdprAgreement}
            onChange={(e) => setGdprAgreement(e.target.checked)}
            required
          />
          <span className="ml-2 text-gray-700">
            I consent to having this website store my submitted information
          </span>

          <div className="flex w-full items-center justify-between">
            <button
              value="send"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-10 mt-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
