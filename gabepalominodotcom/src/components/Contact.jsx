import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();

    if(!name || !email || !message){
      setNotification("Please fill in all information");
      return;
    }

    if(!validateEmail(email)){
      setNotification("Please enter a valid email address.");
      return;
    }

    const serviceId = "service_u6dmakl";
    const templateId = "template_343424g";
    const publicKey = "5iDq8QtxGqdjOSI4r";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Gabe",
      message: message,
    };

    emailjs.init({
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        console.log("SUCCESS!");
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  const validateEmail = (email) =>{
    const re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  return (

    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 text-white mx-auto md:w-3/5 w-4/5 max-w-[500px] py-6"
      >
      {notification && <p className=" text-center text-red-500">{notification}</p>}
      <label>Name:</label>
      <input
        className="border-[#FFF5EA] border-2 px-2 py-1 rounded-md"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

      <label>Email:</label>
      <input
        className="border-[#FFF5EA] border-2 px-2 py-1 rounded-md"
        
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <label>Message:</label>
      <textarea
        className="border-[#FFF5EA] border-2 px-2 py-1 rounded-md"
        cols="30"
        rows="7"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        
      <button
        type="submit"
        className=" w-5/12 ml-auto mt-2 bg-[#FFF5EA]  border-[#FFF5EA] border-2 text-black rounded-lg text-center text-md py-2 hover:bg-transparent hover:text-[#FFF5EA] duration-300 ease-in-out"
        >
        Send Message
      </button>
      
    </form>
  );
};

export default Contact;
