import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Leaf, Heart, Sparkles } from 'lucide-react';

const AmandahVioLogo = () => (
  <h1 className="text-3xl serif font-bold text-[#D4AF37] tracking-wider">AMANDAH-VIO</h1>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Products', 'Contact'];
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-[#120812]/90 backdrop-blur-md py-6 px-6 border-b border-[#D4AF37]/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <AmandahVioLogo />
        <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em]">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#FDF2F5] hover:text-[#D4AF37] transition-colors duration-300">{link}</a>
          ))}
        </div>
        <button className="md:hidden text-[#FDF2F5]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#120812] absolute top-full left-0 w-full py-6 px-6 border-b border-[#D4AF37]/10"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-[#FDF2F5] hover:text-[#D4AF37] transition-colors duration-300 text-sm uppercase tracking-[0.2em]">{link}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HeroSection = () => (
  <section id="home" className="relative h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
        alt="Luxurious beauty product background" 
        className="w-full h-full object-cover opacity-30" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120812] via-[#120812]/70 to-transparent"></div>
    </div>
    <div className="relative z-10 text-center max-w-3xl">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-6 block"
      >
        Premiere Collection 2024
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-6xl serif font-light leading-tight mb-8"
      >
        The Essence of <span className="italic text-[#D4AF37]">Modern Radiance</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="text-lg text-[#FDF2F5]/70 mb-12 font-light"
      >
        Amandah-Vio crafts artisanal experiences designed for the sophisticated modern individual.
      </motion.p>
      <motion.a 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        href="#products" 
        className="bg-[#D4AF37] text-[#120812] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
      >
        Explore Bloom
      </motion.a>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-32 px-6 bg-[#1A0F1A]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Our Philosophy</span>
        <h2 className="text-5xl serif font-light leading-tight mb-8 text-[#FDF2F5]">
          Beauty, <span className="italic">Redefined</span>
        </h2>
        <p className="text-[#FDF2F5]/70 mb-6 font-light leading-relaxed">
          At Amandah-Vio, we believe beauty is an art form. We source the rarest botanical ingredients from around the world to create products that nurture both skin and soul.
        </p>
        <div className="flex items-center space-x-8 mt-10">
          <div className="flex items-center space-x-3">
            <Leaf className="text-[#D4AF37]" size={24} />
            <span className="text-[#FDF2F5]/80 text-sm">100% Natural</span>
          </div>
          <div className="flex items-center space-x-3">
            <Heart className="text-[#D4AF37]" size={24} />
            <span className="text-[#FDF2F5]/80 text-sm">Cruelty-Free</span>
          </div>
          <div className="flex items-center space-x-3">
            <Sparkles className="text-[#D4AF37]" size={24} />
            <span className="text-[#FDF2F5]/80 text-sm">Handcrafted</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
          alt="Luxury skincare products" 
          className="w-full h-[500px] object-cover rounded-lg shadow-2xl shadow-[#D4AF37]/10" 
        />
        <div className="absolute -bottom-8 -left-8 bg-[#D4AF37] p-6 rounded-lg shadow-xl hidden md:block">
          <p className="text-[#120812] font-bold text-2xl serif">15+</p>
          <p className="text-[#120812] text-xs uppercase tracking-widest">Years of Excellence</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProductsSection = () => {
  const products = [
    { id: 1, name: 'Radiant Bloom Serum', price: '$89.00', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80' },
    { id: 2, name: 'Velvet Rose Cream', price: '$120.00', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80' },
    { id: 3, name: 'Silk Touch Cleanser', price: '$65.00', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80' }
  ];

  return (
    <section id="products" className="py-32 px-6 bg-[#120812]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block"
        >
          Our Collection
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl serif font-light leading-tight mb-20 text-[#FDF2F5]"
        >
          Curated <span className="italic">Elegance</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group text-left"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={product.image} alt={product.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#D4AF37] text-[#120812] px-6 py-3 text-xs font-bold uppercase tracking-widest">View Details</button>
                </div>
              </div>
              <h3 className="text-2xl serif font-light mb-2 text-[#FDF2F5]">{product.name}</h3>
              <p className="text-[#D4AF37] font-bold text-lg">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-32 px-6 bg-[#1A0F1A] text-center">
    <div className="max-w-3xl mx-auto">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-4 block"
      >
        Get In Touch
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-5xl serif font-light leading-tight mb-8 text-[#FDF2F5]"
      >
        Join the <span className="italic">Amandah-Vio</span> Circle
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-[#FDF2F5]/70 mb-12 font-light leading-relaxed"
      >
        Subscribe for exclusive access to new collections and personalized beauty insights.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
      >
        <input 
          type="email" 
          placeholder="Your email address" 
          className="flex-1 bg-[#120812] border-[#D4AF37]/30 px-6 py-4 text-[#FDF2F5] focus:outline-none focus:border-[#D4AF37] transition-colors" 
        />
        <button className="bg-[#D4AF37] text-[#120812] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
          Subscribe <ArrowRight size={16} />
        </button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#120812] border-t border-[#D4AF37]/10 py-16 px-6 text-center">
    <AmandahVioLogo />
    <p className="text-[#FDF2F5]/50 text-sm mt-6">© {new Date().getFullYear()} Amandah-Vio. All Rights Reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#120812] text-[#FDF2F5]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
