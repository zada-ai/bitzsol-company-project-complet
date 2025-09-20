import { ArrowDownLeftIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <>
    <div className="md:px-80 py-19  lg:px-120 overflow-hidden">
  <div className='flex justify-center  gap-0.5 bg-black rounded-full border-solid border-2 border-[#141414] '>
    <img src="availible.JPG" alt="logo" className="w-5 h-5  md:w-5 md:h-5 pt-1" />
    <span className="text-white whitespace-nowrap">Availible now.Only 3 spots left</span>
    
    </div>
    </div>
<div className="w-[800px] h-[500px] bg-dots rounded-[340px] absolute top-[120px] left-1/2 -translate-x-1/2 z-0"></div>
<div className="flex items-center justify-center bg-black">
  <div className="text-5xl font-bold whitespace-nowrap lg:text-7xl lg:font-extrabold shine-text">
    <div className="my-4">Automation Agency</div>
    <div className="my-4">Beyond ✦ Limits.</div>
    <div className="my-4">Amplified With AI.</div>
  </div>
</div>
<div className="text-white text-2xl font-light my-12">Design services at your fingertips,Pause or cancel at anytime.</div>
<div className="flex justify-center items-center bg-black my-6.5">
  <button className="flex justify-center items-center relative px-7 py-4 font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF] hover:bg-[linear-gradient(90deg,#FC66BD_21.42%,#0064DA_60.71%,#03D9AF_100%)] hover:bg-[length:100%_100%] hover:animate-[]">
    {/* animated gradient background */}
    <span className="absolute inset-0 shines-text"></span>

    {/* button content */}
    <span className="relative z-10 flex items-center gap-2">
      Learn More
      <ArrowDownLeftIcon className="h-4 w-4 rotate-270" aria-hidden="true" />
    </span>
  </button>
</div>
<div className="w-[700px] h-[200px] top- left-1/2 -translate-x-1/2 flex flex-col items-center  justify-center relative overflow-hidden bg-[#010101]">
      {/* Heading */}
      <p className="text-white text-[14px] font-[400] leading-[14px] font-['Plus Jakarta Sans'] mb-6">
        Our services are featured on
      </p>

      {/* Logos Row with Scroll Effect */}
      <div className="logo-slider relative top-[60px] w-full overflow-hidden">
        <div className="logo-track flex items-center gap-16 overflow-hidden">
       <img src="Container.png" alt="Grapho" className="h-[45px]" />
          <img src="Container (1).svg" alt="Signum" className="h-[45px]" />
          <img src="Container (1).png" alt="Vectra" className="h-[45px]" />
          <img src="Container (2).png" alt="Optimal" className="h-[45px]" />
          {/* repeat again for infinite loop */}
        <img src="Container.png" alt="Grapho" className="h-[45px]" />
          <img src="Container (1).svg" alt="Signum" className="h-[45px]" />
          <img src="Container (1).png" alt="Vectra" className="h-[45px]" />
          <img src="Container (2).png" alt="Optimal" className="h-[45px]" />
        </div>
      </div>

      {/* Blur effect left/right */}
      <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#010101] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#010101] to-transparent z-10"></div>
    </div>
     <div className="bg-black text-white  py-24 md:py-24">
      <div className="grid grid-cols-1 items-center px-5 md:grid-cols-2  gap-12">
        
        {/* Left Content */}
        <div className="">
          <h1 className=" md:text-5xl font-bold leading-snug gap-2">
            Flexible AI
            <span className="text-pink-500">   workflow automation</span>
           <span> for technical teams</span>
           <span className='text-black'>hello woeld of the</span>
          </h1>

          <p className=" leading-relaxed text-[20px] md:text-[20px] py-15">
            Build with the precision of code or the speed of drag-n-drop. 
            Host with on-prem control or in-the-cloud convenience.
            R!n gives you more freedom to implement multi-step AI agents 
            and integrate apps than any other tool.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex ">
          <div className="rounded-2xl bg-[#111] p-4 shadow-lg">
            <img
              src="Image Tab 1.png" // apni image ka path yahan do
              alt="Lightning"
              className="rounded-lg w-[300px] md:w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black text-white py-12">
      <div className="  px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Ai Automation{" "}
          <span className="text-pink-500">Portfolio</span>
        </h2>
</div>
    </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
  
  {/* Card 1 */}
<Link to="/home">
      <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-8 overflow-hidden shine-box cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-light pb-3 text-center">
          SOCIAL MEDIA CONTENT PUBLISHER
        </div>
        <img
          src="Screenshot_20250916-132643.jpg"
          alt=""
          className=" mb-4 w-80 lg:w-100 mx-auto"
        />
        <div className="text-white font-light text-[12px]">
          An n8n workflow utilizing OpenAI GPT-4 and LangChain that automates
          content creation and publishing across Twitter (X), Instagram,
          Facebook, LinkedIn, Threads, and YouTube Shorts. It dynamically
          composes prompts and schemas from Google Docs, generates contextual
          posts with AI, creates matching images using pollinations.ai, and
          publishes or archives content with approvals and notifications.
        </div>
      </div>
    </Link>

  {/* Card 2 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-6 overflow-hidden shine-box">
    <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-light pb-3 text-center">
   LEAD QUALIFICATION AND DEAL CREATION
    </div>
    <img src="Screenshot_20250916-132652.jpg" alt="" className="mx-auto mb-4 w-80 lg:w-100" />
    <div className="text-white font-light text-sm ">
      This n8n workflow automates cold email response analysis using Gmail, OpenAI GPT-4, and Pipedrive CRM. It checks replies for interest in meetings, qualifies leads with AI, and creates deals in Pipedrive for interested prospects,streamlining sales outreach processes.
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-7 overflow-hidden shine-box">
   <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-light pb-3 text-center">
      DYNAMIC USER INTERVIEW WORKFLOW
    </div>
    <img src="Screenshot_20250916-132658.jpg" alt="" className="mx-auto mb-4 w-80 lg:w-100 object-cover" />
    <div className="text-white font-light text-sm ">
      Automates AI-driven user interviews using n8n forms, Groq LLM, Redis session management (via Upstash), and Google Sheets for transcript storage. It dynamically asks interview questions, records answers in sessions, and displays transcripts on completion.
    </div>
  </div>
</div>
<div className="grid  lg:grid-cols-2 py-10 px-34 ">
  {/* Card 2 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-6 overflow-hidden shine-box">
    <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-light pb-3 text-center">
   MULTI CHANNEL LEAD QUALIFICATION
    </div>
    <img src="Screenshot_20250916-132703.jpg" alt="" className="mx-auto mb-4 w-80 lg:w-100" />
    <div className="text-white font-light text-sm ">
      This n8n workflow automates multi-channel lead qualification by verifying emails, domains, and phone numbers, then segmenting leads into Hot, Warm, or Cold. Qualified leads are synced with HubSpot as contacts, deals, or opportunities.Follow-ups are triggered automatically through Gmail,SMS/WhatsApp, and Slack. Finally, all lead data is logged into Google Sheets for tracking and reporting.
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-7 overflow-hidden shine-box">
   <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-light pb-3 text-center">
      ASANA TASK RESCHEDULER & CLEANER
    </div>
    <img src="Screenshot_20250916-132709.jpg" alt="" className="mx-auto mb-4 w-80 lg:w-100 object-cover" />
    <div className="text-white font-light text-sm ">
      Automates Asana task management by rescheduling overdue open tasks to today's date and deleting completed tasks. Uses Asana API with n8n scheduling and conditional logic nodes to keep workspace organized and up-to-date daily.
    </div>
  </div>
</div>
      <div className="py-10">
<div className="bg-black  border-2 border-[#0a0a0a] py-10 rounded-3xl ">
  <div className="flex justify-center">
    <img src="logo-light.svg (1).svg" alt="" className="w-[116px ] " />
    
  </div>
  <div className="w-[800px] h-[300px] bg-dots rounded-[340px] absolute top-[px] left-1/2 -translate-x-1/2 z-0"></div>
  <div className="font-semibold text-5xl text-white py-7">Let’s Turn Your</div>
    <div className="font-semibold text-5xl text-white pb-7">Dream Into Reality</div>
    <div className="font-normal text-xl text-[#b0b0b0] pb-7 px-105">We bring your vision to life with creativity
and precision. Let’s make it happen.</div>
<div className="flex justify-center py-4">
<div className="w-100 h-1 [background:linear-gradient(90deg,rgba(252,102,189,0)_0%,#FC66BD_25%,#FC66BD_75%,rgba(252,102,189,0)_100%)] "></div>

</div>
<div className="flex justify-center">
<img src="Group 31.svg" alt="" className="w-40 h-10" />
</div>
<div className="flex justify-center text-[#b0b0b0] font-normal text-[16px]  pt-3">© 2024 Bitzsol Inc. All rights reserved.</div>
</div>
</div>

    
    </>
  );
}
