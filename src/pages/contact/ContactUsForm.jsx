import React from "react";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col w-full md:w-1/2 py-8">
      <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un Message</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Nom et Prénom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Téléphone
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your Phone"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-fit text-white font-medium md:text-base text-xs px-4 py-2 rounded-full bg-[#5869d4] hover:bg-[#20C997] transition-all duration-500 ease-in-out"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
