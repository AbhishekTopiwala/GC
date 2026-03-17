import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Star,
  CheckCircle,
  ArrowRight,
  Utensils,
  Users,
  Calendar,
  Award,
  Phone,
} from "lucide-react";
import GoogleReviews from "../components/GoogleReviews";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Indian Wedding Food"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest border border-gold/30 backdrop-blur-sm">
              Premium Pure Vegetarian
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delicious Catering for <br />
            <span className="text-gold italic">Every Celebration</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Authentic Gujarati & North Indian cuisine crafted with passion,
            served with elegance across Gujarat.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/book"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] w-full sm:w-auto"
            >
              Book Catering
            </Link>
            <Link
              to="/menu"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto"
            >
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-maroon py-12 relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-5xl rounded-2xl shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {[
              { icon: Users, count: "10,000+", label: "Happy Guests" },
              { icon: Calendar, count: "500+", label: "Events Catered" },
              { icon: Utensils, count: "150+", label: "Menu Items" },
              { icon: Award, count: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="text-gold mb-3" size={32} />
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.count}
                </h3>
                <p className="text-gold-light text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6">
              Catering Services
            </h3>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We provide premium catering services for all types of events,
              ensuring your guests leave with a memorable culinary experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Catering",
                desc: "Grand feasts for your special day with traditional and modern delicacies.",
                img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Corporate Events",
                desc: "Professional catering with elegant presentation for business gatherings.",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Social Gatherings",
                desc: "Customized menus for birthdays, anniversaries, and religious functions.",
                img: "https://foodish-api.com/images/dessert/dessert7.jpg",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="text-gold flex items-center gap-2 font-medium group/link"
                  >
                    Explore{" "}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-2"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                Taste of Tradition
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6">
                Featured Delicacies
              </h3>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-gray-600 text-lg">
                A glimpse into our most loved authentic dishes prepared with
                secret family recipes and pure ingredients.
              </p>
            </div>
            <Link
              to="/menu"
              className="hidden md:flex items-center gap-2 text-maroon font-semibold hover:text-gold transition-colors mt-6 md:mt-0"
            >
              View Full Menu <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Gujarati Thali",
                type: "Main Course",
                img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Paneer Tikka Masala",
                type: "North Indian",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Live Chaat Counter",
                type: "Starters",
                img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                name: "Premium Sweets",
                type: "Desserts",
                img: "https://foodish-api.com/images/dessert/dessert5.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">
                    {item.type}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-gray-800">
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-maroon font-semibold hover:text-gold transition-colors"
            >
              View Full Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                The Gayatri Promise
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                Why Choose Us For Your Special Day?
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "100% Pure Vegetarian",
                    desc: "Strictly vegetarian kitchen with separate Jain food preparation areas.",
                  },
                  {
                    title: "Premium Ingredients",
                    desc: "We source only the highest quality spices, fresh vegetables, and pure ghee.",
                  },
                  {
                    title: "Impeccable Hygiene",
                    desc: "State-of-the-art kitchen facilities maintaining the highest standards of cleanliness.",
                  },
                  {
                    title: "Professional Staff",
                    desc: "Trained chefs and courteous serving staff in elegant uniforms.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 bg-gold/20 p-2 rounded-full h-fit">
                      <CheckCircle className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Catering Setup"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs">
                <div className="flex gap-1 text-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-800 font-medium italic">
                  "The food was absolutely divine. All our guests couldn't stop
                  praising the taste and presentation!"
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  - Rahul & Priya (Wedding Client)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-24 bg-cream text-center">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeIn}
            className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <h2 className="text-4xl font-serif font-bold text-maroon mb-6">
              Ready to Plan Your Event Menu?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Contact us today for a free consultation and customized menu for
              your upcoming celebration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="bg-maroon hover:bg-maroon-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Book Your Event
              </Link>
              <a
                href="tel:+919876543210"
                className="bg-white border-2 border-maroon text-maroon hover:bg-maroon/5 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
