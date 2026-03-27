import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const menuCategories = [
  { id: "gujarati", label: "Gujarati" },
  { id: "punjabi", label: "Punjabi" },
  { id: "south-indian", label: "South Indian" },
  { id: "starters", label: "Snacks & Starters" },
  { id: "desserts", label: "Desserts" },
  { id: "live", label: "Live Counters" },
];

const menuItems = {
  gujarati: [
    {
      name: "Undhiyu",
      desc: "Mixed vegetable dish that is a regional specialty of Surat, India.",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Khaman Dhokla",
      desc: "Savory steamed cake made from chickpea flour.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa3.jpg",
    },
    {
      name: "Khandvi",
      desc: "Yellow, tightly rolled bite-sized pieces made of gram flour and yogurt.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa4.jpg",
    },
    {
      name: "Aamras",
      desc: "Sweet mango pulp served with hot puris (Seasonal).",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert1.jpg",
    },
    {
      name: "Dal Dhokli",
      desc: "Spiced whole wheat dumplings simmered in a sweet and spicy lentil stew.",
      price: "Standard",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Shrikhand",
      desc: "Sweet dish made of strained yogurt flavored with saffron and cardamom.",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert2.jpg",
    },
  ],
  punjabi: [
    {
      name: "Paneer Butter Masala",
      desc: "Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
      price: "Premium",
      image: "https://foodish-api.com/images/butter-chicken/butter-chicken1.jpg",
    },
    {
      name: "Dal Makhani",
      desc: "Whole black lentils cooked with butter and cream and simmered on low heat for that unique flavor.",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chole Bhature",
      desc: "Spicy chickpea curry served with fried bread.",
      price: "Standard",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Palak Paneer",
      desc: "Paneer in a thick paste made from puréed spinach.",
      price: "Premium",
      image: "https://foodish-api.com/images/butter-chicken/butter-chicken2.jpg",
    },
    {
      name: "Malai Kofta",
      desc: "Potato and paneer balls deep fried and coated with a creamy tomato gravy.",
      price: "Premium",
      image: "https://foodish-api.com/images/butter-chicken/butter-chicken3.jpg",
    },
    {
      name: "Butter Naan",
      desc: "Soft and fluffy Indian flatbread cooked in a tandoor.",
      price: "Standard",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ],
  "south-indian": [
    {
      name: "Masala Dosa",
      desc: "Crispy rice and lentil crepe filled with a potato curry.",
      price: "Standard",
      image: "https://foodish-api.com/images/dosa/dosa1.jpg",
    },
    {
      name: "Idli Sambar",
      desc: "Steamed rice cakes served with a lentil-based vegetable stew.",
      price: "Standard",
      image: "https://foodish-api.com/images/idly/idly1.jpg",
    },
    {
      name: "Medu Vada",
      desc: "Crispy, doughnut-shaped fritters made from urad dal.",
      price: "Standard",
      image: "https://foodish-api.com/images/idly/idly2.jpg",
    },
    {
      name: "Uttapam",
      desc: "Thick pancake made from a batter of rice and lentils, topped with vegetables.",
      price: "Standard",
      image: "https://foodish-api.com/images/dosa/dosa2.jpg",
    },
    {
      name: "Lemon Rice",
      desc: "Tangy and flavorful rice dish tempered with spices and peanuts.",
      price: "Standard",
      image: "https://foodish-api.com/images/rice/rice1.jpg",
    },
    {
      name: "Coconut Chutney",
      desc: "Classic South Indian condiment made with fresh coconut, chilies, and tempered spices.",
      price: "Standard",
      image: "https://foodish-api.com/images/dosa/dosa3.jpg",
    },
  ],
  starters: [
    {
      name: "Hara Bhara Kebab",
      desc: "Vegetarian kebab made with spinach, potatoes, and green peas.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa1.jpg",
    },
    {
      name: "Paneer Tikka",
      desc: "Chunks of paneer marinated in spices and grilled in a tandoor.",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Spring Rolls",
      desc: "Crispy fried rolls filled with shredded vegetables.",
      price: "Standard",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Aloo Tikki Chaat",
      desc: "Crispy potato patties topped with yogurt, chutneys, and spices.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa2.jpg",
    },
    {
      name: "Dahi Puri",
      desc: "Crispy puris filled with potatoes, yogurt, and sweet & spicy chutneys.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa5.jpg",
    },
    {
      name: "Manchurian Dry",
      desc: "Indo-Chinese dish of deep-fried vegetable balls in a spicy, tangy sauce.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa6.jpg",
    },
  ],
  desserts: [
    {
      name: "Gulab Jamun",
      desc: "Deep-fried milk solids soaked in rose-flavored sugar syrup.",
      price: "Standard",
      image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Rasmalai",
      desc: "Soft paneer balls immersed in chilled creamy milk flavored with cardamom.",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert3.jpg",
    },
    {
      name: "Gajar Ka Halwa",
      desc: "Carrot-based sweet dessert pudding made with milk, sugar, and ghee.",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert4.jpg",
    },
    {
      name: "Jalebi with Rabri",
      desc: "Crispy, syrup-soaked spirals served with thickened sweetened milk.",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert5.jpg",
    },
    {
      name: "Moong Dal Halwa",
      desc: "Rich and delicious dessert made from split yellow moong dal and lots of ghee.",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert6.jpg",
    },
    {
      name: "Ice Cream Sundae",
      desc: "Assorted ice cream flavors with various toppings and syrups.",
      price: "Standard",
      image: "https://foodish-api.com/images/dessert/dessert7.jpg",
    },
  ],
  live: [
    {
      name: "Live Pasta Counter",
      desc: "Choice of penne or fusilli with arrabbiata, alfredo, or mixed sauce.",
      price: "Premium",
      image: "https://foodish-api.com/images/pasta/pasta1.jpg",
    },
    {
      name: "Live Dosa Counter",
      desc: "Freshly made dosas with various fillings like cheese, paneer, or classic masala.",
      price: "Standard",
      image: "https://foodish-api.com/images/dosa/dosa4.jpg",
    },
    {
      name: "Live Chaat Counter",
      desc: "Pani puri, bhel puri, and sev puri assembled fresh for guests.",
      price: "Standard",
      image: "https://foodish-api.com/images/samosa/samosa7.jpg",
    },
    {
      name: "Live Tawa Pulao",
      desc: "Spicy Mumbai-style street food rice dish cooked on a large flat griddle.",
      price: "Standard",
      image: "https://foodish-api.com/images/biryani/biryani1.jpg",
    },
    {
      name: "Live Jalebi",
      desc: "Hot, crispy jalebis fried and soaked in syrup right before your eyes.",
      price: "Premium",
      image: "https://foodish-api.com/images/dessert/dessert8.jpg",
    },
    {
      name: "Live Mocktail Bar",
      desc: "Refreshing non-alcoholic beverages mixed to order.",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const { t } = useTranslation();

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
            {t('menu.Our Menu')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl max-w-2xl mx-auto"
          >
            {t('menu.A culinary journey through the rich flavors of India.')}
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "bg-maroon text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gold/10 hover:text-maroon border border-gray-200"
                  }`}
              >
                {t(`menu.${category.label}`)}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {menuItems[activeCategory as keyof typeof menuItems].map(
                  (item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group flex flex-col p-6 h-full"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-serif font-bold text-maroon pr-4">
                          {t(`menu.${item.name}`)}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${item.price === "Premium"
                            ? "bg-gold text-white"
                            : "bg-gray-100 text-gray-800"
                            }`}
                        >
                          {t(`menu.${item.price}`)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {t(`menu.${item.desc}`)}
                      </p>
                    </motion.div>
                  ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 italic mb-6">
              {t('menu.Note: This is a sample menu. We customize menus based on your specific requirements and budget.')}
            </p>
            <Link
              to="/book"
              className="inline-block bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              {t('menu.Request Custom Menu Quote')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
