import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  ChevronDown,
  Zap,
  Target,
  Code,
  Users,
  Mail,
  Phone,
  Linkedin,
  X,
} from "lucide-react";
import Glider from "glider-js";
import "glider-js/glider.min.css";




const services = [
  {
    id: 1,
    title: "WORKFLOW & AUTOMATION",
    highlight: "AI-Powered Lead Generation",
    description:
      "Advanced automation systems that streamline your entire sales and marketing pipeline using cutting-edge GoHighLevel workflows.",
    features: [
      "Designed AI-powered chatbot workflows to engage and qualify leads automatically on websites and landing pages.",
      "Implemented advanced follow-up sequences using email, SMS, and ringless voicemails to nurture leads through the funnel.",
      "Integrated external CRMs with GHL using webhooks and APIs, ensuring seamless data sync and real-time lead tracking.",
      "Created automated pipelines and stages to manage prospects effectively through each step of the sales journey.",
      "Built dynamic drip campaigns tailored to user behavior, improving conversions and engagement.",
      "Automated appointment scheduling, reminders, and follow-ups to boost show-up rates and reduce no-shows.",
    ],
    icon: Zap,
    images: ["workflow.png"],
  },
  {
    id: 2,
    title: "FUNNEL ARCHITECTURE",
    highlight:
      "Integration of landing pages, email sequences, and automated workflows.",
    description:
      "Designing strategic sales funnels that guide prospects seamlessly from awareness to conversion, optimizing every step to maximize engagement and revenue.",
    features: [
      "Developed end-to-end conversion funnels in GoHighLevel, integrating forms, contracts, surveys, and automated follow-ups.",
      "Assigned dynamic lead stages for smarter tracking, prioritization, and tailored engagement.",
      "Integrated real-time analytics dashboards to monitor KPIs and fine-tune funnel performance.",
      "Boosted appointment rates and client acquisition by up to [X]% (insert metric if available).",
      "Designed high-converting l anding p ages with persuasive copy and strong CTAs to maximize sign-ups.",
      "Incorporated A/B testing to identify the best-performing p age layouts, messages, and offers.",
      "Automated nurture sequences to engage leads at every stage until conversion.",
    ],
    icon: Target,
    images: [ "Capture25.JPG", "app-gohighlevel-com-v2-preview-W8GOXfBucUr0TYEaGA75-notrack-true-08-07-2025_02_56_PM.png", "app-gohighlevel-com.png"],
  },
  {
    id: 3,
    title: "CUSTOM WEBSITE DEVELOPMENT IN GHL",
    highlight: "Funnel + Website seamless integration.",
    description:
      "Building fully customized, high-converting websites inside GoHighLevel tailored to your brand identity and business needs.",
    features: [
      "Designed conversion-optimized websites tailored for niche businesses (e.g. real estate, coaching).",
      "Implemented AI chatbots for lead capture and qualification.Seamlessly synced hot leads into CRM and automation sequences.",
      "Enhanced brand identity through modern, engaging v isuals.",
    ],
    icon: Code,
    images: ["Capture23.JPG","Capture26.JPG","Capture27.JPG","Capture29.JPG","Capture30.JPG"],
  },
  {
    id: 4,
    title: "AUTOMATION WORKFLOWS",
    highlight: "Boost efficiency and scale without extra manpower.",
    description:
      "I designed and implemented a series of automated workflows in GoHighLevel to streamline client communication, lead management, and operational efficiency. These workflows included:",
    features: [
      "AI-Powered Missed Call Automation – A utomatically responds to missed calls with AI-driven SMS follow-ups, ensuring n o lead is lost and increasing engagement rates.",
      "Appointment Confirmation & Review Request – S ends automatic appointment confirmations and follow-up review requests to improve customer satisfaction and retention.",
      "FAQ Auto Reply – Delivers instant answers to common inquiries via automated messaging, reducing m anual workload for support teams.",
      "Lead Workflow – Automates lead capture, qualification, and nurturing to accelerate the sales process.",
      "Multi-Location Smart Routing –  R outes incoming l eads or messages to the correct location/team based on predefined rules, ensuring faster response times.",
      "Form Data to n8n Integration – S ends form submission data to n8n for advanced automation and integration with external systems",
    ],
    icon: Users,
    images:[ "workflow.png","Screenshot 2025-09-18 at 4.54.26 PM.png"],
  },
];

export default function App() {
  const [showExtraDetails, setShowExtraDetails] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const gliderRef = useRef(null);



  const { ref, inView } = useInView({
    triggerOnce: true, // ek dafa animate ho
    threshold: 0.2,    // 20% visible hone par trigger ho
  });


  useEffect(() => {
    if (gliderRef.current) {
      new Glider(gliderRef.current, {
        slidesToShow: 1,
        dots: "#dots",
        draggable: true,
        arrows: {
          prev: "#glider-prev",
          next: "#glider-next",
        },
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = ["home", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      >
        {/* Animated Background Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* GHULAM ALI Image Circle */}
       <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}   // niche se hidden
      animate={inView ? { y: 0, opacity: 1 } : {}} // visible hone par upar aaye
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 pt-20 flex justify-center"
    >
      <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500">
        <img
          src="Capture.JPG"
          alt="GHULAM ALI"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>

        {/* Content Below Circle */}
        <div className="text-center relative z-10 max-w-3xl py-3">
         <motion.h1
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
      >
        GHULAM ALI
      </motion.h1>

      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-purple-300 mb-6 font-semibold"
      >
        GHL EXPERT
      </motion.p>

      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto"
      >
        Experienced automation expert with a strong track record of
        streamlining sales, marketing, and customer service processes using
        GoHighLevel (GHL). Specialized in chatbot design, CRM integration,
        advanced workflows, funnel optimization, and lead nurturing for Real
        Estate, E-commerce, and Education sectors. Passionate about building
        smart, scalable systems that enhance client engagement and boost
        revenue.
      </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
           <motion.button
        onClick={() => scrollToSection("services")}
        initial={{ opacity: 0, x: -100 }}   // left se start
        whileInView={{ opacity: 1, x: 0 }}  // viewport me aate hi animate
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // ek dafa hi chale
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
      >
        View My Services
      </motion.button>

      {/* Right se animate */}
      <motion.button
        onClick={() => scrollToSection("contact")}
        initial={{ opacity: 0, x: 100 }}   // right se start
        whileInView={{ opacity: 1, x: 0 }} // viewport me aate hi animate
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
      >
        Get In Touch
      </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive GoHighLevel solutions tailored to transform your
              business processes
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <motion.div
            key={service.id}
            onClick={() => setSelectedService(service)}
            initial={{ opacity: 0, y: 100 }} // niche se start
            whileInView={{ opacity: 1, y: 0 }} // scroll par animate
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }} // ek dafa chale, 20% visible par trigger
            className="cursor-pointer group h-full"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl group-hover:bg-slate-800/80 flex flex-col h-full">
              {/* Icon Box */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Highlight */}
              <p className="text-purple-300 font-semibold mb-3">
                {service.highlight}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {service.description.substring(0, 100)}...
              </p>

              {/* CTA */}
              <p className="mt-4 text-purple-400 text-sm font-semibold group-hover:text-purple-300 transition-colors duration-300">
                Click to learn more →
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl animate-scaleIn">
            <div className="relative p-8">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  <selectedService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-purple-300 font-semibold">
                    {selectedService.highlight}
                  </p>
                </div>
              </div>

              <div className="overflow-y-scroll h-96 space-y-4 p-2">
  {selectedService.images && selectedService.images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`service-${i}`}
      className="w-full rounded-lg"
    />
  ))}
</div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedService.description}
              </p>
              <h4 className="text-xl font-bold text-white mb-4">
                Key Features & Capabilities:
              </h4>
              <ul className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </li>
                ))}
              </ul>
              
              {showExtraDetails && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
                  <div className="bg-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl animate-scaleIn p-8 relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowExtraDetails(false)}
                      className="absolute top-4 right-4 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition"
                    >
                      <X className="w-5 h-5 text-gray-300" />
                    </button>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white mb-6">
                      {selectedService.title} - Extra Details
                    </h2>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="w-full h-64 bg-slate-700 rounded-xl overflow-hidden">
                        <img
                          src="workflow1.png"
                          alt="detail1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-64 bg-slate-700 rounded-xl overflow-hidden">
                        <img
                          src="workflow2.png"
                          alt="detail2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-64 bg-slate-700 rounded-xl overflow-hidden">
                        <img
                          src="workflow3.png"
                          alt="detail3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-64 bg-slate-700 rounded-xl overflow-hidden">
                        <img
                          src="workflow4.png"
                          alt="detail4"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Extra Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Yahan par aap apni additional details likh sakte ho jo
                      pehle modal me nahi dikhani thi. Isme aap apne project ke
                      screenshots, workflow breakdown, ya client case study bhi
                      daal sakte ho.
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-3">
                      <li className="text-purple-300 font-semibold">
                        ⚡ AI-powered chatbot flow with real-time triggers
                      </li>
                      <li className="text-purple-300 font-semibold">
                        ⚡ Advanced analytics dashboards integration
                      </li>
                      <li className="text-purple-300 font-semibold">
                        ⚡ Scalable automation system for multi-location
                        businesses
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    scrollToSection("contact");
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get Started with This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300">
              Ready to transform your business with GoHighLevel automation?
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project and automation needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <a
                  href="mailto:GHULAMALI9020@GMAIL.COM"
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  GHULAMALI9020@GMAIL.COM
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +923245032005
                </a>
                <a
                  href="https://linkedin.com"
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Ghulam Ali. GoHighLevel Expert & Automation Specialist.
          </p>
        </div>
      </footer>
    </div>
  );
}
