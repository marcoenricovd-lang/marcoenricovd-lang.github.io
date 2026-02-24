"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Mail, Facebook, MessageCircle, Star, Award, Users, ChevronDown, Heart, Sparkles, Menu, X, Calendar, CheckCircle, Instagram } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, formatPrice, getBookingFee } from "@/lib/services";

const testimonials = [
  { 
    id: 1, 
    name: "jianne_rose", 
    initials: "J", 
    text: "The best lash tech and lash mentor 💗 Works meticulously on my lashes and satisfies beyond expectation. Very responsive too. If you're looking for a professional lash tech, go here. You'll never be disappointed 🥰", 
    service: "Lash Extensions",
    verified: true
  }
];

const galleryImages = [
  { src: "/images/gallery-01-training-graduates.jpg", alt: "Training Graduates with Certificates", category: "Training" },
  { src: "/images/gallery-02-eyelash-extensions.jpg", alt: "Russian Full Volume Eyelash Extensions", category: "Services" },
  { src: "/images/gallery-03-beauty-results.jpg", alt: "Gorgeous Lash and Nail Results", category: "Services" },
  { src: "/images/gallery-04-floral-nail-art.jpg", alt: "Floral Nail Art Design", category: "Services" },
  { src: "/images/gallery-05-nail-art-blue.jpg", alt: "Blue Nail Art Design", category: "Services" },
  { src: "/images/gallery-06-nail-art-pink.jpg", alt: "Pink Valentine Nail Art", category: "Services" }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-bold font-serif text-pink-600">Stylash</Link>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors">{item}</button>
              ))}
            </div>
            <Link href="/book" className="hidden md:inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition-all hover:shadow-lg hover:shadow-pink-600/30">
              <Phone className="w-4 h-4" />Book Now
            </Link>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg">{item}</button>
            ))}
            <Link href="/book" className="block w-full text-center bg-pink-600 text-white px-6 py-3 rounded-full font-medium">Book Now</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-white to-purple-100/30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-pink-100">
                <Award className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">Master Lash Artist & Beauty Expert</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Enhance Your <br /><span className="text-pink-600 font-serif">Natural</span> Beauty
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Premium lash extensions, nail artistry, and semi-permanent makeup by <span className="text-pink-600 font-semibold">Mary Ann Ong</span> — Master Instructor and trainer in Imus, Cavite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition-all hover:shadow-lg hover:shadow-pink-600/30">
                  Book Appointment<ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </Link>
                <button onClick={() => scrollToSection("services")} className="inline-flex items-center justify-center border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-600 hover:text-white transition-all">
                  View Services
                </button>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center"><Users className="w-6 h-6 text-pink-600" /></div>
                  <div><p className="text-2xl font-bold text-gray-900">1.6K+</p><p className="text-sm text-gray-500">Facebook Followers</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center"><Star className="w-6 h-6 text-yellow-600" /></div>
                  <div><p className="text-2xl font-bold text-gray-900">100%</p><p className="text-sm text-gray-500">Recommended</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center"><Award className="w-6 h-6 text-pink-600" /></div>
                  <div><p className="text-2xl font-bold text-gray-900">Master</p><p className="text-sm text-gray-500">Certified</p></div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-3 opacity-20" />
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/mary-ann-ong-master-trainer.jpg" alt="Mary Ann Ong - Master Trainer" fill className="object-cover" priority />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center"><Award className="w-6 h-6 text-pink-600" /></div>
                    <div><p className="font-bold text-gray-900">Master Artist</p><p className="text-sm text-gray-500">10+ Years Experience</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection("about")} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-pink-600 transition-colors animate-bounce">
          <span className="text-sm block mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 mx-auto" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 border-2 border-pink-200 rounded-3xl transform rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <Image src="/images/mary-ann-ong-master-trainer.jpg" alt="Mary Ann Ong - Master Trainer" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-12 h-0.5 bg-pink-600" />
                <span className="text-pink-600 font-medium uppercase tracking-wider text-sm">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif">Meet <span className="text-pink-600">Mary Ann Ong</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                I am a passionate and highly skilled lash, nail, and SPMU artist dedicated to enhancing natural beauty through precision, creativity, and expertise.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a Master Lash Instructor, Master Nail Instructor, and Master SPMU trainer, I bring years of experience and a commitment to excellence in every service I provide.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Master Lash Instructor", "Master Nail Instructor", "Master SPMU Trainer"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 text-pink-600" />
                    <span className="text-sm font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-4">
                <Heart className="w-5 h-5 text-pink-600 fill-pink-600" />
                <span className="text-gray-600 italic">Beauty | Education | Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span>Based in Carsadang Bago 2, Imus, Cavite, Philippines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-pink-500" />
              <span className="text-pink-400 font-medium uppercase tracking-wider text-sm">Our Services</span>
              <span className="w-12 h-0.5 bg-pink-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Beauty Services <span className="text-pink-400">&</span> Pricing</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">Professional beauty services with transparent pricing.</p>
          </div>

          {/* Service Categories */}
          <div className="space-y-12">
            {SERVICE_CATEGORIES.map((category) => {
              const categoryServices = SERVICES.filter(s => s.category === category.id);
              if (categoryServices.length === 0) return null;
              
              return (
                <div key={category.id}>
                  <h3 className="text-2xl font-bold font-serif mb-6">{category.name}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/book?service=${service.id}`}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-pink-500/50 transition-all group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-2xl">{service.icon}</span>
                          <span className="text-pink-400 font-bold">{formatPrice(service.price)}</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1">{service.name}</h4>
                        {service.description && (
                          <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                        )}
                        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                          <span className="text-xs text-gray-400">Click to book</span>
                          <Calendar className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-pink-600" />
              <span className="text-pink-600 font-medium uppercase tracking-wider text-sm">Portfolio</span>
              <span className="w-12 h-0.5 bg-pink-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our <span className="text-pink-600">Work</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">{image.alt}</p>
                    <p className="text-sm text-white/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-pink-500" />
              <span className="text-pink-400 font-medium uppercase tracking-wider text-sm">Get In Touch</span>
              <span className="w-12 h-0.5 bg-pink-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Book Your <span className="text-pink-400">Appointment</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-400">Carsadang Bago 2, Imus, Cavite, Philippines</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">0906 379 3256</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400">maryannong23@yahoo.com</p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=100064032339719" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/639063793256" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/stylashbymaryannong/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4">Contact Us</h3>
              <p className="text-white/90 text-lg mb-8">Ready to enhance your natural beauty? Contact us today!</p>
              <div className="space-y-4 w-full max-w-sm">
                <Link href="/book" className="w-full inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all">
                  <Calendar className="w-5 h-5" />Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-pink-400">Stylash</h3>
              <p className="text-gray-400">Enhancing natural beauty through precision, creativity, and expertise.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <button onClick={() => scrollToSection(link.toLowerCase())} className="text-gray-400 hover:text-pink-400 transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  Carsadang Bago 2, Imus, Cavite
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4 text-pink-400" />
                  0906 379 3256
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-500">&copy; 2026 Stylash by Mary Ann Ong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}