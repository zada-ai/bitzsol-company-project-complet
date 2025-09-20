import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Target, Code, Users, X } from "lucide-react";
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
      "Designed AI-powered chatbot workflows to engage and qualify leads automatically.",
      "Implemented advanced follow-up sequences using email, SMS, and ringless voicemails.",
      "Integrated external CRMs with GHL using webhooks and APIs.",
    ],
    icon: Zap,
    images: ["workflow.png"],
  },
  {
    id: 2,
    title: "FUNNEL ARCHITECTURE",
    highlight: "Integration of landing pages, email sequences, and automated workflows.",
    description:
      "Designing strategic sales funnels that guide prospects seamlessly from awareness to conversion.",
    features: [
      "Developed end-to-end conversion funnels in GoHighLevel.",
      "Integrated real-time analytics dashboards to monitor KPIs.",
      "Designed high-converting landing pages with A/B testing.",
    ],
    icon: Target,
    images: ["Capture25.JPG", "app-gohighlevel-com.png"],
  },
  {
    id: 3,
    title: "CUSTOM WEBSITE DEVELOPMENT IN GHL",
    highlight: "Funnel + Website seamless integration.",
    description:
      "Building fully customized, high-converting websites inside GoHighLevel tailored to your brand identity.",
    features: [
      "Conversion-optimized websites for niche businesses.",
      "AI chatbots for lead capture and CRM sync.",
      "Enhanced brand identity through engaging visuals.",
    ],
    icon: Code,
    images: ["Capture23.JPG", "Capture26.JPG"],
  },
  {
    id: 4,
    title: "AUTOMATION WORKFLOWS",
    highlight: "Boost efficiency and scale without extra manpower.",
    description:
      "I designed and implemented a series of automated workflows in GoHighLevel to streamline client communication.",
    features: [
      "AI-powered missed call automation.",
      "Appointment confirmation & review requests.",
      "FAQ auto-reply messaging.",
    ],
    icon: Users,
    images: ["workflow.png"],
  },
];

export default function Socail() {
  const [selectedService, setSelectedService] = useState(null);
  const [showExtraDetails, setShowExtraDetails] = useState(false);
  const gliderRef = useRef(null);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Services Grid */}
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
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="cursor-pointer group h-full"
                >
                  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-purple-300 font-semibold mb-3">
                      {service.highlight}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {service.description.substring(0, 100)}...
                    </p>
                    <p className="mt-4 text-purple-400 text-sm font-semibold">
                      Click to learn more →
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl animate-scaleIn">
            <div className="relative p-8">
              {/* Close */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>

              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                  {selectedService.icon && (
                    <selectedService.icon className="w-8 h-8 text-white" />
                  )}
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

              {/* Images */}
              {selectedService.images && (
                <div className="overflow-y-scroll h-96 space-y-4 p-2">
                  {selectedService.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`service-${i}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Features */}
              {selectedService.features && (
                <>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Key Features & Capabilities:
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                        <p className="text-gray-300 leading-relaxed">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* CTA */}
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
    </>
  );
}
