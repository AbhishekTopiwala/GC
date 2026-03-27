import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "wedding",
      title: t('services.Wedding Catering'),
      description: t('services.Wedding Desc'),
      features: [
        t('services.Wedding F1'),
        t('services.Wedding F2'),
        t('services.Wedding F3'),
        t('services.Wedding F4'),
      ],
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: false,
    },
    {
      id: "corporate",
      title: t('services.Corporate Events'),
      description: t('services.Corporate Desc'),
      features: [
        t('services.Corporate F1'),
        t('services.Corporate F2'),
        t('services.Corporate F3'),
        t('services.Corporate F4'),
      ],
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true,
    },
    {
      id: "birthday",
      title: t('services.Birthday Parties'),
      description: t('services.Birthday Desc'),
      features: [
        t('services.Birthday F1'),
        t('services.Birthday F2'),
        t('services.Birthday F3'),
        t('services.Birthday F4'),
      ],
      image:
        "https://foodish-api.com/images/dessert/dessert7.jpg",
      reverse: false,
    },
    {
      id: "religious",
      title: t('services.Religious Functions'),
      description: t('services.Religious Desc'),
      features: [
        t('services.Religious F1'),
        t('services.Religious F2'),
        t('services.Religious F3'),
        t('services.Religious F4'),
      ],
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true,
    },
    {
      id: "outdoor",
      title: t('services.Outdoor Catering'),
      description: t('services.Outdoor Desc'),
      features: [
        t('services.Outdoor F1'),
        t('services.Outdoor F2'),
        t('services.Outdoor F3'),
        t('services.Outdoor F4'),
      ],
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: false,
    },
  ];

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
            {t('services.Our Services')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('services.Services Subtitle')}
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
                      {t('services.Book for')} {service.title}
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
            {t('services.Custom Menu Title')}
          </h2>
          <p className="text-maroon-dark/80 text-lg mb-8 max-w-2xl mx-auto">
            {t('services.Custom Menu Desc')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-maroon px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {t('services.Contact Us for Custom Menu')}
          </Link>
        </div>
      </section>
    </div>
  );
}
