function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Google Map Background */}
      <div className="absolute inset-0">
        <iframe
          title="Jr Technical School Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.481535042159!2d74.84921643434299!3d12.892233904179598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b6313d182b3%3A0x97de441e20b402f8!2sKPT%20Sports%20room!5e0!3m2!1sen!2sin!4v1752835378936!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.35)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex justify-center">
        <div className="w-full max-w-xl backdrop-blur-lg bg-white/90 rounded-3xl shadow-xl ring-1 ring-green-100 p-10">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4 text-center tracking-wide">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Reach out for admissions, queries, or campus visits. We'd love to hear from you!
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-green-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-green-800">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message here..."
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600 text-gray-900 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition duration-300"
            >
              Send Message
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              We’ll get back to you within 24 hours during working days.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
