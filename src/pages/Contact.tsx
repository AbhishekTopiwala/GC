import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const text = `*New Contact Inquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

    window.open(`https://wa.me/919099116166?text=${text}`, "_blank");

    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };
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
            {t('contact.Contact Us')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('contact.We\'d love to hear from you. Get in touch for inquiries or feedback.')}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-serif font-bold text-maroon mb-6">
                  {t('contact.Get In Touch')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('contact.Whether you have a question about our menus, pricing, or want to discuss a custom catering plan, our team is ready to answer all your questions.')}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-maroon" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t('contact.Our Office & Base Kitchen')}
                    </h4>
                    <p className="text-gray-600">
                      Paresh Tailor, Oops Soni Ramchhodbhai Jewellers, Madhumati Colony
                      <br />
                      Navsari, Gujarat 396445
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-maroon" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t('contact.Call Us')}
                    </h4>
                    <p className="text-gray-600">+91 90991 16166 (Primary)</p>
                    <p className="text-gray-600">+91 72278 01023 (Secondary)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-maroon" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t('contact.Email Us')}
                    </h4>
                    <p className="text-gray-600">info@gayatricaterers.com</p>
                    <p className="text-gray-600">
                      bookings@gayatricaterers.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-maroon" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {t('contact.Business Hours')}
                    </h4>
                    <p className="text-gray-600">
                      {t('contact.Monday - Saturday')}
                    </p>
                    <p className="text-gray-600">{t('contact.Sunday')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-serif font-bold text-maroon mb-8">
                {t('contact.Send us a Message')}
              </h3>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {t('contact.Message Sent!')}
                  </h4>
                  <p className="text-gray-600">
                    {t('contact.Thank you for reaching out. We will get back to you shortly.')}
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t('contact.Full Name')}
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        maxLength={50}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t('contact.Phone Number')}
                      </label>
                      <input
                        required
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9+\\-\\s]{10,15}"
                        title="Please enter a valid phone number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t('contact.Email Address')}
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t('contact.Subject')}
                    </label>
                    <input
                      required
                      type="text"
                      id="subject"
                      name="subject"
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                      placeholder="General Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t('contact.Your Message')}
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={1000}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon hover:bg-maroon-light text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} /> {t('contact.Send Message')}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        {/* Placeholder for Google Maps iframe */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col">
          <MapPin size={48} className="mb-4 text-maroon" />
          <p className="text-xl font-medium">{t('contact.Google Maps Location')}</p>
          <p className="text-sm">{t('contact.Navsari, Gujarat')}</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.936081525958!2d72.51080331502753!3d23.02611638495147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84cb26000001%3A0x6d2c4b4f0b2a7593!2sNavsari%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-10 opacity-50 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
      </section>
    </div>
  );
}
