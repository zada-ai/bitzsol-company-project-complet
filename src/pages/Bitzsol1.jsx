import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Socail() 
{ 

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
    <div className="my-4">PART ONE  </div>
  </div>
</div>
<div className="flex justify-start font-semibold text-3xl sm:text-4xl lg:text-6xl text-white pb-1">
  Description
</div>

<ul className="list-disc pl-6 space-y-4 text-white text-base sm:text-lg lg:text-xl font-light my-7 w-full max-w-[1150px] leading-relaxed text-justify">
  <li>
    Developed end-to-end conversion funnels in GoHighLevel, integrating forms, contracts, surveys, and automated follow-ups.
  </li>
  <li>
    Assigned dynamic lead stages for smarter tracking,
prioritization, and tailored engagement.
  </li>
  <li>
    ntegrated real-time analytics dashboards to monitor KPIs and fine-tune funnel performance.
  </li>
  <li>
    Boosted appointment rates and client acquisition by up to
[X]% (insert metric if available).
  </li>
  <li>
   Incorporated A/B testing to identify the best-performing p age layouts, messages, and offers.
  </li>
  <li>
    Automated nurture sequences to engage leads at every stage until conversion.
  </li>
</ul>

<div className="py-10 flex justify-center">
  <motion.img
    src="app-gohighlevel-com-v2-preview-W8GOXfBucUr0TYEaGA75-notrack-true-08-07-2025_02_56_PM.png"
    alt="animated"
    className="w-full max-w-[1200px] rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  />
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
