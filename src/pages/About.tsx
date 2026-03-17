import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";

export default function About() {
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
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            A legacy of taste, tradition, and trust spanning over 15 years.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Authentic Indian Vegetarian Feast"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute -bottom-10 -right-10 bg-gold text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-sm uppercase tracking-wider font-semibold">
                  Years of Excellence
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                About Gayatri Caterers
              </h2>
              <h3 className="text-4xl font-serif font-bold text-maroon mb-6">
                Serving Happiness Since 2008
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Founded by the Patel family, Gayatri Caterers started with a
                  simple vision: to bring authentic, home-style Gujarati and
                  North Indian flavors to large gatherings without compromising
                  on quality or hygiene.
                </p>
                <p>
                  What began as a small venture catering to local neighborhood
                  events has now grown into one of Gujarat's most trusted
                  premium vegetarian catering services. We have successfully
                  managed events ranging from intimate gatherings of 50 people
                  to grand royal weddings with over 5,000 guests.
                </p>
                <p>
                  Our secret ingredient isn't just our spices; it's our
                  unwavering commitment to treating every event as if it were
                  our own family function. We believe that food is the soul of
                  any celebration, and we pour our hearts into making it
                  unforgettable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-maroon mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Uncompromising Quality",
                desc: "We source only the finest, freshest ingredients. No artificial colors or preservatives.",
              },
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Every dish is prepared with passion, following authentic recipes passed down through generations.",
              },
              {
                icon: Award,
                title: "Impeccable Hygiene",
                desc: "Strict adherence to food safety standards in our state-of-the-art base kitchen.",
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "We listen to your needs and customize our menus to perfectly match your vision and budget.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-maroon" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
