import { motion } from "framer-motion";
export default function Socail() 
{ 
  const items = [
    "AI-Powered Missed Call Automation – Automatically responds to missed calls with AI-driven SMS follow-ups, ensuring no lead is lost and increasing engagement rates.",
    "Appointment Confirmation & Review Request – Sends automatic appointment confirmations and follow-up review requests to improve customer satisfaction and retention.",
    "FAQ Auto Reply – Delivers instant answers to common inquiries via automated messaging, reducing manual workload for support teams.",
    "Lead Workflow – Automates lead capture, qualification, and nurturing to accelerate the sales process.",
    "Multi-Location Smart Routing – Routes incoming leads or messages to the correct location/team based on predefined rules, ensuring faster response times.",
    "Form Data to n8n Integration – Sends form submission data to n8n for advanced automation and integration with external systems.",
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
    <div className="my-4">
   </div>
    <div className="my-4">AUTOMATION WORKFLOWS</div>
  </div>
</div>
<div className="py-20 flex justify-center">
      <motion.img
        src="workflow.png"
        alt="centerimg"
        className="w-[1160px] h-[566px] rounded-2xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.98 }}
      />
    </div>


<div className="w-full max-w-5xl mx-auto px-6 py-12">
      {/* Heading */}
      <motion.h2
        className="text-white font-bold text-2xl sm:text-4xl lg:text-3xl mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Automated Workflows in GoHighLevel 🚀
      </motion.h2>

      {/* List */}
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
    </div>



    <div className="py-10 flex justify-center">
      <motion.img
        src="Screenshot 2025-09-18 at 4.54.26 PM.png"
        alt="animated"
        className="w-full max-w-[1200px] rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>


<div className="flex justify-start items-center bg-black my-6">
  <button className="flex justify-start relative px-6 sm:px-9 py-3 sm:py-4 font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF]">
    {/* animated gradient background */}
    <span className="absolute inset-0 shines-text"></span>

    {/* button content */}
    <span className="relative z-10 flex items-center gap-2">
      Contact US
    </span>
  </button>
</div>


   
<div className="flex flex-col sm:flex-row px-6 sm:px-12 pt-10 sm:pt-20 gap-6 text-[#c4c4c4]">
  
  {/* Box 1 */}
  <div className="rounded-3xl bg-[#0d0d0d] flex items-center gap-3 py-3 px-4 shine-box overflow-hidden relative">
    <div className="border border-[#171717] bg-[#010101] rounded-full w-10 h-10 flex justify-center items-center">
      <img src="sPmibGCLfmQVJHX0tlJqMt1ZOb8.svg fill.svg" alt="" className="w-7 h-7" />
    </div>
    <div className="font-medium text-[15px] whitespace-nowrap">
      SOCIAL MEDIA CONTENT PUBLISHER
    </div>
  </div>

  {/* Box 2 */}
  <div className="rounded-3xl bg-[#0d0d0d] flex items-center gap-3 py-3 px-4 shine-box overflow-hidden relative">
    <div className="border border-[#171717] bg-[#010101] rounded-full w-10 h-10 flex justify-center items-center">
      <img src="Icon Image → TpMsQ4JuQXH87CLdEKVrih7OjaY.svg.svg" alt="" className="w-7 h-7" />
    </div>
    <div className="font-medium text-[15px] whitespace-nowrap">
      LEAD QUALIFICATION AND DEALCREATION
    </div>
  </div>

  {/* Box 3 */}
  <div className="rounded-3xl bg-[#0d0d0d] flex items-center gap-3 py-3 px-4 shine-box overflow-hidden relative">
    <div className="border border-[#171717] bg-[#010101] rounded-full w-10 h-10 flex justify-center items-center">
      <img src="Icon Image → fGRMJzZ1klCadiGWxHOwXOZ9qK0.svg.svg" alt="" className="w-7 h-7" />
    </div>
    <div className="font-medium text-[15px] whitespace-nowrap">
      DYNAMIC USER INTERVIEW WORKFLOW
    </div>
  </div>
</div>

<div className="flex flex-col sm:flex-row px-4 sm:px-60 pt-10 gap-5 text-[#c4c4c4]">
  {/* Card 1 */}
  <div className="rounded-3xl bg-[#0d0d0d] flex gap-2 py-3 px-3 shine-box overflow-hidden relative">
    <div className="border-[#171717] border bg-[#010101] rounded-full w-10 h-10 flex items-center justify-center">
      <img
        src="Icon Image → OT81xXSmHrXj05Gjwm0H4r7m0L8.svg.svg"
        alt=""
        className="w-7 h-7"
      />
    </div>
    <div className="font-medium text-[15px] flex items-center whitespace-nowrap">
      MULTI CHANNEL LEAD QUALIFICATION
    </div>
  </div>

  {/* Card 2 */}
  <div className="rounded-3xl bg-[#0d0d0d] flex gap-2 py-3 px-3 shine-box overflow-hidden relative">
    <div className="border-[#171717] border bg-[#010101] rounded-full w-10 h-10 flex items-center justify-center">
      <img
        src="Icon Image → Hy7hoU7QAz66ago0Fs6owYjA.svg.svg"
        alt=""
        className="w-7 h-7"
      />
    </div>
    <div className="font-medium text-[15px] flex items-center whitespace-nowrap">
      AS ANATASK RESCHEDULER & CLEANER
    </div>
  </div>
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
