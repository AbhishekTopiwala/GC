import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function InstantQuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-cream z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Side - Info */}
          <div className="bg-maroon text-white p-10 md:w-2/5 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Get Quote in 2 Minutes
              </h3>
              <p className="text-gold-light mb-8">
                Fill out the form and our catering experts will get back to you
                with a customized menu and pricing.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-gold" size={20} />
                  <span>100% Pure Vegetarian</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-gold" size={20} />
                  <span>Customizable Menus</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-gold" size={20} />
                  <span>Professional Service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-10 md:w-3/5">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank you!
                </h4>
                <p className="text-gray-600">
                  Our team will contact you soon with your customized quote.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="quote-name"
                      maxLength={50}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="quote-phone"
                      pattern="[0-9+\\-\\s]{10,15}"
                      title="Please enter a valid phone number"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Type *
                    </label>
                    <select
                      required
                      name="eventType"
                      id="quote-event-type"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="corporate">Corporate</option>
                      <option value="religious">Religious</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Date *
                    </label>
                    <input
                      required
                      type="date"
                      name="eventDate"
                      id="quote-event-date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Guests *
                    </label>
                    <input
                      required
                      type="number"
                      name="guests"
                      id="quote-guests"
                      min="50"
                      max="10000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="Min 50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      id="quote-city"
                      maxLength={50}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="e.g. Ahmedabad"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={2}
                    name="message"
                    id="quote-message"
                    maxLength={500}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any specific requirements?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3.5 rounded-lg transition-colors shadow-md text-lg"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
