import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: "Rahul & Priya Sharma",
      event: t('testimonials.Wedding Reception'),
      date: t('testimonials.December 2025'),
      rating: 5,
      text: t('testimonials.Testimonial 1'),
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Amit Desai",
      event: t('testimonials.Corporate Annual Gala'),
      date: t('testimonials.October 2025'),
      rating: 5,
      text: t('testimonials.Testimonial 2'),
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Sneha Patel",
      event: t('testimonials.50th Birthday Party'),
      date: t('testimonials.August 2025'),
      rating: 5,
      text: t('testimonials.Testimonial 3'),
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      name: "Vikram Singh",
      event: t('testimonials.Housewarming Ceremony'),
      date: t('testimonials.June 2025'),
      rating: 4,
      text: t('testimonials.Testimonial 4'),
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      name: "Meera Kapoor",
      event: t('testimonials.Engagement Ceremony'),
      date: t('testimonials.April 2025'),
      rating: 5,
      text: t('testimonials.Testimonial 5'),
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      name: "Rajesh Mehta",
      event: t('testimonials.Religious Function'),
      date: t('testimonials.January 2025'),
      rating: 5,
      text: t('testimonials.Testimonial 6'),
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
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
            {t('testimonials.Client Testimonials')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('testimonials.Hear what our happy clients have to say.')}
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              >
                <Quote
                  className="absolute top-6 right-6 text-gold/20"
                  size={48}
                />

                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      className={
                        i < testimonial.rating ? "text-gold" : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-maroon">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.event} â€¢ {testimonial.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gold py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div>
              <p className="text-5xl font-serif font-bold text-maroon-dark mb-2">
                4.9/5
              </p>
              <p className="text-maroon-dark/80 font-medium uppercase tracking-wider">
                {t('testimonials.Average Rating')}
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-maroon-dark/20"></div>
            <div>
              <p className="text-5xl font-serif font-bold text-maroon-dark mb-2">
                500+
              </p>
              <p className="text-maroon-dark/80 font-medium uppercase tracking-wider">
                {t('testimonials.5-Star Reviews')}
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-maroon-dark/20"></div>
            <div>
              <p className="text-5xl font-serif font-bold text-maroon-dark mb-2">
                98%
              </p>
              <p className="text-maroon-dark/80 font-medium uppercase tracking-wider">
                {t('testimonials.Client Retention')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
