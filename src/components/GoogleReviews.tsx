import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

export default function GoogleReviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      name: t('googleReviews.Rahul Sharma'),
      date: t('googleReviews.2 weeks ago'),
      rating: 5,
      text: t('googleReviews.Review 1'),
      avatar:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: t('googleReviews.Sneha Patel'),
      date: t('googleReviews.1 month ago'),
      rating: 5,
      text: t('googleReviews.Review 2'),
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: t('googleReviews.Amit Desai'),
      date: t('googleReviews.3 months ago'),
      rating: 5,
      text: t('googleReviews.Review 3'),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <GoogleLogo className="w-8 h-8" />
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-gray-800 text-xl ml-2">4.9/5</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6">
            {t('googleReviews.What Our Customers Say')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            {t('googleReviews.Read genuine reviews from our happy clients who trusted us with their special celebrations.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <GoogleLogo className="w-5 h-5 ml-auto opacity-50 grayscale" />
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-gold text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-md"
          >
            <GoogleLogo className="w-6 h-6" />
            {t('googleReviews.Leave Us a Review on Google')}
          </a>
        </div>
      </div>
    </section>
  );
}
