import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Socail() 
{ 
     const items = [
    "Developed end-to-end conversion funnels in GoHighLevel, integrating forms, contracts, surveys, and automated follow-ups.",
    "Assigned dynamic lead stages for smarter tracking,prioritization, and tailored engagement.",
    "Integrated real-time analytics dashboards to monitor KPIs and fine-tune funnel performance.",
    " Boosted appointment rates and client acquisition by up to [X]% (insert metric if available).",
    "Incorporated A/B testing to identify the best-performing p age layouts, messages, and offers.",
    " Automated nurture sequences to engage leads at every stage until conversion.",
  ];

  return (
    <>
    <div className="w-full max-w-[800px] h-[200px] sm:h-[300px] bg-dots rounded-[340px] absolute top-[50px] left-1/2 -translate-x-1/2 z-0"></div>
<div className="px-135">
<div className="hidden sm:flex justify-center items-center mt-10 sm:mt-20 mx-auto gap-2 px-10 py-2 bg-black rounded-full border border-[#141414] relative z-10">
  <img src="Star 1 → SVG (1).svg" alt="logo" className="w-4 h-6 sm:h-10" />
  <span className="text-[#b3b3b3] whitespace-nowrap text-sm sm:text-base">n 8 n</span>
</div>
</div>

{/* <d?v className="w-[800px] h-[500px] bg-dots rounded-[340px] absolute top-[130px] left-1/2 -translate-x-1/2 z-0"></div> */}
<div className="flex items-center justify-center bg-black">
  <div className="text-6xl font-bold shine-text">
    <div className="my-4">FUNNEL ARCHITECTURE  </div>
  </div>
</div>

<div className="py-20 flex justify-center">
      <motion.img
        src="Funnel.JPG"
        alt="centerimg"
        className="w-[1160px] h-[566px] rounded-2xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.98 }}
      />
    </div>

<div className="flex justify-start font-semibold text-3xl sm:text-4xl lg:text-6xl text-white pb-5">
  Description
</div>

<ul className="space-y-6">
        {items.map((text, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 text-white text-base sm:text-lg lg:text-xl font-light leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <span className="text-green-400 text-lg mt-1">✔</span>
            <span>{text}</span>
          </motion.li>
        ))}
      </ul>
 <div className="grid grid-cols-1 py-14 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-8 lg:px-12">

  <Link to="/bitzsol1" className="w-full">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden 
          shine-box cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="text-white text-base md:text-xl lg:text-xl font-medium pb-3 text-center">
            FUNNEL ARCHITECTURE PART ONE
          </div>
          <img
            src="Capture9.png"
            alt=""
            className="mb-4 w-full rounded-lg object-contain"
          />
        </motion.div>
      </Link>

      {/* Card 2 - Right se */}
      <Link to="/bitzsol2" className="w-full">
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden 
          shine-box cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="text-white text-base md:text-xl lg:text-xl font-medium pb-3 text-center">
            FUNNEL ARCHITECTURE PART TWO
          </div>
          <img
            src="Capture16.JPG"
            alt=""
            className="mb-4 w-full rounded-lg object-contain"
          />
        </motion.div>
      </Link>

    </div>

 <div className="py-10 relative overflow-hidden">
  <div className="bg-black border-2 border-[#0a0a0a] py-10 rounded-3xl relative text-center px-6 md:px-12 lg:px-20">
    
    {/* Logo */}
    <div className="flex justify-center">
      <img src="logo-light.svg (1).svg" alt="" className="w-28 md:w-32" />
    </div>

    {/* Dots Background */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[200px] md:h-[300px] bg-dots rounded-[340px] z-0 opacity-30"></div>

    {/* Headings */}
    <div className="relative z-10">
      <h2 className="font-semibold text-3xl md:text-5xl text-white py-4">Let’s Turn Your</h2>
      <h2 className="font-semibold text-3xl md:text-5xl text-white pb-6">Dream Into Reality</h2>
      
      <p className="font-normal text-base md:text-xl text-[#b0b0b0] max-w-2xl mx-auto pb-7">
        We bring your vision to life with creativity and precision. Let’s make it happen.
      </p>
    </div>

    {/* Gradient Line */}
    <div className="flex justify-center py-4 relative z-10">
      <div className="w-40 md:w-64 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </div>

    {/* Button / Image */}
    <div className="flex justify-center relative z-10">
      <img src="Group 31.svg" alt="" className="w-32 md:w-40 h-10" />
    </div>

    {/* Footer Text */}
    <div className="flex justify-center text-[#b0b0b0] font-normal text-sm md:text-[16px] pt-3 relative z-10">
      © 2024 Bitzsol Inc. All rights reserved.
    </div>
  </div>
</div>

    </>
  );
}
