function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      {/* Google Map Background */}
      <div className="absolute inset-0 bg-gray-300">
        <iframe
  title="Jr Technical School Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.481535042159!2d74.84921643434299!3d12.892233904179598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b6313d182b3%3A0x97de441e20b402f8!2sKPT%20Sports%20room!5e0!3m2!1sen!2sin!4v1752835378936!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{
    border: 0,
    filter: 'grayscale(1) contrast(1.2) opacity(0.4)'
  }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

      {/* Form Container */}
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Reach out to us for admissions, queries, or a campus visit. We'd love to hear from you!
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-gray-600">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500 mt-3">
              We'll get back to you within 24 hours during working days.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;