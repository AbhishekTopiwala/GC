import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Utensils, Send, CheckCircle } from "lucide-react";

export default function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this data to a backend
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-gray-100"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-500" size={48} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-maroon mb-4">
            Request Received!
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Thank you for choosing Gayatri Caterers. We have received your
            catering request and our team will get back to you within 24 hours
            with a customized quote.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full font-bold transition-colors shadow-md"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-maroon text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Book Catering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            Fill out the form below to get a customized quote for your event.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-maroon mb-6 flex items-center gap-3 border-b pb-4">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm">
                    1
                  </span>
                  Personal Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      maxLength={50}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      pattern="[0-9+\\-\\s]{10,15}"
                      title="Please enter a valid phone number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-maroon mb-6 flex items-center gap-3 border-b pb-4 mt-12">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm">
                    2
                  </span>
                  Event Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-gold" /> Event Date *
                    </label>
                    <input
                      required
                      type="date"
                      name="eventDate"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      required
                      name="eventType"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="reception">Reception</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="religious">Religious Function</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Users size={16} className="text-gold" /> Number of Guests
                      *
                    </label>
                    <input
                      required
                      type="number"
                      name="guests"
                      min="50"
                      max="10000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="Min. 50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Location/Venue City *
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      maxLength={50}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="e.g. Ahmedabad"
                    />
                  </div>
                </div>
              </div>

              {/* Food Preferences */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-maroon mb-6 flex items-center gap-3 border-b pb-4 mt-12">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm">
                    3
                  </span>
                  Food Preferences
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
                      <Utensils size={16} className="text-gold" /> Cuisine Types
                      Interested In (Select multiple)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        "Gujarati",
                        "Punjabi",
                        "South Indian",
                        "Chinese",
                        "Continental",
                        "Live Chaat",
                        "Desserts",
                      ].map((cuisine) => (
                        <label
                          key={cuisine}
                          className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-cream transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-gold focus:ring-gold rounded border-gray-300"
                          />
                          <span className="text-gray-700 font-medium">
                            {cuisine}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Special Dietary Requirements
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-gold focus:ring-gold rounded border-gray-300"
                        />
                        <span className="text-gray-700 font-medium">
                          Jain Food (No Onion/Garlic)
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-gold focus:ring-gold rounded border-gray-300"
                        />
                        <span className="text-gray-700 font-medium">
                          Vegan Options
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details / Specific Menu Requests
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      maxLength={1000}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us more about your event and what kind of menu you are looking for..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-maroon hover:bg-maroon-light text-white font-bold rounded-full text-lg transition-colors shadow-lg flex items-center justify-center gap-3 mx-auto"
                >
                  <Send size={24} /> Request Quote
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  We will get back to you within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
