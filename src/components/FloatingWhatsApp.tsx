import { motion } from "framer-motion";

const WhatsAppIcon = ({ size = 36, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="none"
  >
    <path d="M12.031 0C5.385 0 0 5.373 0 12.003c0 2.115.549 4.183 1.593 6.002L.036 24l6.155-1.611A11.933 11.933 0 0012.031 24c6.645 0 12.031-5.372 12.031-11.997S18.676 0 12.031 0zm6.545 17.203c-.279.791-1.391 1.487-2.146 1.625-.662.122-1.527.199-4.305-1.121-3.535-1.681-5.789-5.321-5.968-5.565-.178-.244-1.428-1.921-1.428-3.666 0-1.745.897-2.618 1.218-2.964.321-.346.697-.432.928-.432.23 0 .461-.005.658.005.207.012.483-.075.753.582.285.696.974 2.392 1.06 2.564.085.174.143.376.027.608-.114.23-.173.376-.346.577-.172.2-.361.439-.516.592-.172.174-.353.364-.15.717.202.353.901 1.503 1.939 2.43 1.341 1.198 2.449 1.564 2.805 1.738.356.174.564.145.772-.085.208-.231.897-1.045 1.141-1.402.243-.359.486-.299.814-.174.328.125 2.071.986 2.428 1.164.356.177.593.266.68.411.085.144.085.836-.194 1.627z" />
  </svg>
);

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello Gayatri Caterers, I want catering for my event.",
  );
  const whatsappUrl = `https://wa.me/919099116166?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <span className="bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 duration-300">
        Chat With Us
      </span>
      <motion.div
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:bg-[#128C7E] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <WhatsAppIcon size={36} className="text-white" />
      </motion.div>
    </motion.a>
  );
}
