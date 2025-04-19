import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8f8c0374-ad95-4b40-85a1-8b6f46dc268c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Have a project in mind or want to chat? Feel free to contact me!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-900/30 p-3 rounded-full border border-indigo-500/30">
                  <MapPinIcon className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-400">Kilpauk, Chennai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-900/30 p-3 rounded-full border border-indigo-500/30">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-400">premjd2000@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-900/30 p-3 rounded-full border border-indigo-500/30">
                  <PhoneIcon className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-400">+91 86108 94125</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/PREM-KUMAR-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-indigo-900/30 hover:text-indigo-400 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/premkumarj00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-indigo-900/30 hover:text-indigo-400 transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.behance.net/premkumarj00"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-indigo-900/30 hover:text-indigo-400 transition-colors"
                >
                  <FaBehance className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring focus:border-indigo-500 text-white"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-lg hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </div>
              <span className="text-gray-400 text-sm">{result}</span>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
