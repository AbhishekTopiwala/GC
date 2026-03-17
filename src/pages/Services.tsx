import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const services = [
  {
    id: "wedding",
    title: "Wedding Catering",
    description:
      "Make your special day unforgettable with our grand wedding feasts. We offer comprehensive catering solutions from pre-wedding functions like Sangeet and Mehendi to the main reception.",
    features: [
      "Customizable multi-cuisine menus",
      "Live food counters",
      "Elegant buffet setups",
      "Dedicated service staff",
    ],
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Impress your clients and colleagues with our professional corporate catering. Whether it's a board meeting, annual day, or a product launch, we deliver quality and punctuality.",
    features: [
      "Executive lunch boxes",
      "High tea arrangements",
      "Gala dinner setups",
      "Dietary requirement handling",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
  {
    id: "birthday",
    title: "Birthday Parties",
    description:
      "Celebrate milestones with delicious food that kids and adults alike will love. We create fun, engaging menus tailored to your party theme.",
    features: [
      "Kid-friendly menus",
      "Interactive dessert stations",
      "Snack boxes",
      "Themed food presentations",
    ],
    image:
      "https://foodish-api.com/images/dessert/dessert7.jpg",
    reverse: false,
  },
  {
    id: "religious",
    title: "Religious Functions",
    description:
      "Authentic, pure vegetarian food prepared with strict adherence to religious dietary requirements, including Jain food options without onion and garlic.",
    features: [
      "100% Pure Vegetarian",
      "Jain food specialization",
      "Traditional authentic recipes",
      "Hygienic preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    reverse: true,
  },
  {
    id: "outdoor",
    title: "Outdoor Catering",
    description:
      "Planning an event at a farmhouse or an open ground? Our outdoor catering team is equipped to handle logistics and deliver fresh, hot food anywhere.",
    features: [
      "Mobile kitchen setups",
      "Weather-appropriate menus",
      "Complete logistics management",
      "On-site live cooking",
    ],
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    reverse: false,
  },
];

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            Tailored catering solutions for every occasion, big or small.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-4xl font-serif font-bold text-maroon">
                    {service.title}
                  </h2>
                  <div className="w-16 h-1 bg-gold"></div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 pt-4">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-800 font-medium"
                      >
                        <div className="bg-gold/20 p-1 rounded-full">
                          <Check size={18} className="text-gold-dark" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link
                      to="/book"
                      className="inline-block bg-maroon hover:bg-maroon-light text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-md"
                    >
                      Book for {service.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-dark mb-6">
            Don't see what you're looking for?
          </h2>
          <p className="text-maroon-dark/80 text-lg mb-8 max-w-2xl mx-auto">
            We offer fully customized catering solutions tailored to your
            specific event needs and dietary requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us for Custom Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
