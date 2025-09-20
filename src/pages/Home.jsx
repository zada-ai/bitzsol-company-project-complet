import { ArrowDownLeftIcon ,ChevronDownIcon, } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";



export default function Home() 
{  const [count, setCount] = useState(0);
  const [c, setc] = useState(0);
  const [reviews, setr] =useState(0);
  const [posting, setn] =useState(0);

  // First counter (0 → 150)
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i === 150) {
        clearInterval(interval);
      }
    }, 20);
  }, []);

  // Second counter (0 → 4.9 with decimal steps)
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 0.1; // increase by 0.1
      setc(Number(i.toFixed(1))); // show only 1 decimal place
      if (i >= 4.5) {
        clearInterval(interval);
      }
    }, 20);
  }, []);
  //3rd 
    useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setr(i);
      if (i === 99) {
        clearInterval(interval);
      }
    }, 20);
  }, []);
 useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setn(i);
      if (i === 85) {
        clearInterval(interval);
      }
    }, 20);
  }, []);

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
  <div className="text-5xl font-bold whitespace-nowrap lg:text-7xl lg:font-extrabold shine-text text-white">
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
       <img src="Item → Logo 1 → gtA2k0HxvLgyb2ShavqPh2ut8M.svg (1).png" alt="Grapho" className="h-[35px]" />
          <img src="Item → Logo 2 → v8pRoXjGv8Kuqg4GJYQjdWqJD0.svg (1).png" alt="Signum" className="h-[35px]" />
          <img src="Item → Logo 3 → z6DLxkMPmuYBeO3zshpNfjAxLg8.svg (2).png" alt="Vectra" className="h-[35px]" />
          <img src="Item → Logo 4 → tnjkbQJwRbdGkxEcDO0Jqu1aTZM.svg (1).png" alt="Optimal" className="h-[35px]" />
          <img src="Item → Logo 5 → 497xK9DhewPLaDj5d8bkw0cAg.svg (1).png" alt="Zapfast" className="h-[35px]" />

          {/* repeat again for infinite loop */}
        <img src="Item → Logo 1 → gtA2k0HxvLgyb2ShavqPh2ut8M.svg (1).png" alt="Grapho" className="h-[35px]" />
          <img src="Item → Logo 2 → v8pRoXjGv8Kuqg4GJYQjdWqJD0.svg (1).png" alt="Signum" className="h-[35px]" />
          <img src="Item → Logo 3 → z6DLxkMPmuYBeO3zshpNfjAxLg8.svg (2).png" alt="Vectra" className="h-[35px]" />
          <img src="Item → Logo 4 → tnjkbQJwRbdGkxEcDO0Jqu1aTZM.svg (1).png" alt="Optimal" className="h-[35px]" />
          <img src="Item → Logo 5 → 497xK9DhewPLaDj5d8bkw0cAg.svg (1).png" alt="Zapfast" className="h-[35px]" />
        </div>
      </div>

      {/* Blur effect left/right */}
      <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#010101] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#010101] to-transparent z-10"></div>
    </div>
 <div className="py-10 flex justify-center text-center">
    <div className="px-5 py-1 border-2 border-solid border-[#141414] rounded-full text-[#efefef] decoration-solid fontlight text-[13px]  shine-box overflow-hidden relative ">Why Us</div>
 </div>
 <div className="flex justify-center font-semibold text-6xl text-white pb-1px  ">Experience the Benefits</div>
<div className="flex justify-center text-6xl text-white font-semibold gap-2 ">
    <div className="">of</div>
    <div className="text-[#fc65bd] shineses-text ">Our Expertise</div>


</div>
    <div className="flex justify-center  items-center text-white text-2xl font-light py-7">That driver impactful gain powerfull results</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-15 px-4">
  
  {/* Card 1 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-8 overflow-hidden lg:shine-box">
    <img src="like.JPG" alt="" className=" mb-4 w-80 lg:w-100" />
    <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-bold pb-3 text-center">
      Innovative Approach
    </div>
    <div className="text-white text-sm md:text-base lg:text-xl text-center px-2 lg:px-3">
      Look for works that reflect a unique character and differentiate
      in a crowded marketplace.
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-6 overflow-hidden lg:shine-box">
    <img src="button.JPG" alt="" className="mx-auto mb-4 w-80 lg:w-100" />
    <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-bold pb-3 text-center">
      Seamless Experience
    </div>
    <div className="text-white text-sm md:text-base lg:text-xl text-center px-2 lg:px-3">
      A seamless user experience across all devices, ensuring every
      interaction connects with the user.
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-full h-auto lg:h-100 lg:w-100 bg-[#1c1c1c] rounded-2xl p-6 lg:px-7 overflow-hidden lg:shine-box">
    <img src="fan.JPG" alt="" className="mx-auto mb-4 w-80 lg:w-100" />
    <div className="text-white text-base md:text-xl lg:text-3xl font-semibold lg:font-bold pb-3 text-center">
      Ongoing Partnership
    </div>
    <div className="text-white text-sm md:text-base lg:text-xl text-center px-2 lg:px-7">
      Find a new partner easily, not just offer, who will support even after the project ends.
    </div>
  </div>
</div>

<div className="flex justify-center items-center bg-shines-text py-25">
  <button className="flex justify-center items-center relative px-5 py-3 font-semibold text-white rounded-full border-[#FC66BD] border-1 overflow-hidden group bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF] hover:bg-[linear-gradient(90deg,#FC66BD_21.42%,#0064DA_60.71%,#03D9AF_100%)] hover:bg-[length:100%_100%] hover:animate-[]">
    
    <span className="absolute inset-0 shines-text"></span>

    
    <span className="relative z-10 flex items-center gap-2 text-[20px]">
      See Pricing
      <ArrowDownLeftIcon className="h-4 w-4 rotate-270" aria-hidden="true" />
    </span>
  </button>
</div>
<div className="flex justify-center items-center   py-8 ">
    <div className="bg-black rounded-full text-white border-[#121212] border-1 border-solid px-5 py-1 decoration-solid font-light shine-box overflow-hidden relative ">Why Us</div>
</div>

<div className="flex flex-wrap justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold py-0.5 text-center whitespace-normal lg:whitespace-nowrap">
  <div className="text-white">We Drive</div>
  <div className="text-[#fc65bd]">Businesses</div>
</div>

<div className="flex flex-wrap justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center whitespace-normal lg:whitespace-nowrap">
  <div className="text-white">To The</div>
  <div className="text-[#fc65bd]">Forefront</div>
  <div className="text-white">Of The Industries</div>
</div>

<div className="flex flex-wrap justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold py-0.5 text-center whitespace-normal lg:whitespace-nowrap">
  <div className="text-white">Through Comprehensive</div>
</div>

<div className="flex flex-wrap justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold py-0.5 text-center whitespace-normal lg:whitespace-nowrap">
  <div className="text-white">AI</div>
  <div className="text-[#fc65bd]">Automation.</div>
</div>

<div className="text-white py-3.5">
  <div className="px-4 sm:px-8 md:px-16 lg:px-24 text-base sm:text-lg md:text-xl font-normal text-center sm:text-left">
    First impressions matter. That's why our mission is to create clean, enduring designs
    that elevate. First impressions matter. That's why our mission.
  </div>
</div>

<div className="flex justify-center items-center bg-black py-3">
  <button
    className="flex justify-center items-center relative 
               px-4 sm:px-6 md:px-8 
               py-2 sm:py-3 md:py-4 
               font-semibold text-white rounded-full 
               border border-[#FC66BD] overflow-hidden  
               bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF] 
               hover:bg-[linear-gradient(90deg,#FC66BD_21.42%,#0064DA_60.71%,#03D9AF_100%)] 
               hover:bg-[length:100%_100%]"
  >
    {/* Shine effect */}
    <span className="absolute inset-0 shines-text"></span>

    {/* Text + Icon */}
    <span className="relative z-10 flex items-center gap-2 
                     text-sm sm:text-base md:text-lg lg:text-xl">
      Book a Call
      <ArrowDownLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 rotate-270" aria-hidden="true" />
    </span>
  </button>
</div>


<div className="flex justify-center items-center   pt-20 ">
    <div className="bg-black rounded-full text-white border-[#121212] border-1 border-solid px-5 py-1 decoration-solid font-light shine-box overflow-hidden relative ">Work That Make Us Proud</div>
</div>
<div className="sm:text-2xl flex justify-center gap-2 lg:text-5xl font-medium py-0.5 ">
    <div className="text-white">Recent Works, Notable Impact  </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 lg:py-15">
  {/* Left Side */}
  <div className="text-white py-5 sm:py-7 px-4 sm:px-6">
    <div className="border-l-2 border-[#7d325e] pl-4 sm:pl-6">
      <div className="font-[Plus Jakarta Sans] font-medium text-2xl sm:text-3xl py-4 sm:py-7">
        Grapho AI
      </div>
      <div className="text-base sm:text-lg leading-relaxed">
        That’s Why We Leverage AI to Create Impactful, Lasting
        <br />
        Experiences that Engage, and Transform Every Interaction.
      </div>
    </div>

    {/* Card 1 */}
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center py-4 border border-[#212121] rounded-lg px-3 gap-2">
        <div className="font-[Plus Jakarta Sans] font-medium text-xl sm:text-2xl md:text-3xl">
          VectraOps
        </div>
        <div className="text-sm sm:text-base md:text-lg sm:pl-3">
          34% increase in online sales.
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center py-4 border border-[#212121] rounded-lg px-3 gap-2">
        <div className="font-[Plus Jakarta Sans] font-medium text-xl sm:text-2xl md:text-3xl">
          Signum
        </div>
        <div className="text-sm sm:text-base md:text-lg sm:pl-3">
          47% increase in new customers.
        </div>
      </div>
    </div>
  </div>

  {/* Right Side */}
  <div className="bg-black px-4 sm:px-8 lg:px-12 py-5 relative flex justify-center items-center">
    <div className="bg-[#212121] flex justify-center items-center px-2 sm:px-4 py-3.5 rounded-2xl relative">
      <img
        src="a8a98c5807cf3974d6cc9c0a3dd1d08761436bac.png"
        alt="logo"
        className="w-[250px] sm:w-[320px] lg:w-[400px] h-auto object-contain"
      />
      <img
        src="Logo → pusyr1VnoNXsMai5sxpx5EBYI0.svg.svg"
        alt=""
        className="w-20 sm:w-28 lg:w-40 absolute left-5 sm:left-10 bottom-5"
      />
      <img
        src="tBVLYztqR9ShbPVeBZ7MjKjLP8.svg fill.svg"
        alt=""
        className="w-16 sm:w-24 lg:w-30 absolute right-5 sm:right-10 bottom-5"
      />
    </div>
  </div>
</div>


<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-white py-8 px-4 sm:px-10 md:px-20 lg:px-48 text-center">
  {/* Active Users */}
  <div className="border-b md:border-b-0 md:border-r border-[#0d0d0d] pb-4 md:pb-0 md:px-5">
    <div className="font-medium text-3xl sm:text-4xl lg:text-5xl">{count}k+</div>
    <div className="text-sm sm:text-base">Active Users</div>
  </div>

  {/* Rating */}
  <div className="border-b md:border-b-0 md:border-r border-[#0d0d0d] pb-4 md:pb-0 md:px-5">
    <div className="font-medium text-3xl sm:text-4xl lg:text-5xl">{c}</div>
    <div className="whitespace-nowrap text-sm sm:text-base">Rating out of 5</div>
  </div>

  {/* Reviews */}
  <div className="border-b md:border-b-0 md:border-r border-[#0d0d0d] pb-4 md:pb-0 md:px-5">
    <div className="font-medium text-3xl sm:text-4xl lg:text-5xl">{reviews}k+</div>
    <div className="text-sm sm:text-base">Positive Reviews</div>
  </div>

  {/* Satisfied Users */}
  <div className="pb-4 md:pb-0 md:px-5">
    <div className="font-medium text-3xl sm:text-4xl lg:text-5xl">{posting}k+</div>
    <div className="text-sm sm:text-base">Users Satisfied</div>
  </div>
</div>


<div className="py-20 text-white">

    <div className="pt-10 flex justify-center text-center">
    <div className="px-5 py-1 border-2 border-solid border-[#141414] rounded-full text-[#efefef] decoration-solid fontlight text-[14px]  shine-box overflow-hidden relative ">Our Services</div>
 </div>
</div>
<div className="flex justify-center gap-2 text-5xl font-medium py-0.5 ">
    <div className="text-white">Expertise That Drives Quality  </div>
</div>
<div className="text-white py-10 px-6 md:px-20 lg:px-40 relative overflow-hidden">
  <div className="relative z-10 text-center md:text-left">
    With deep expertise, we deliver quality solutions that drive
    success and exceed industry standards consistently.
  </div>
  {/* Shine overlay */}
  <span className="absolute inset-0 shine-text"></span>
</div>

<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
  <div className="bg-[#2e2e2e] rounded-4xl w-90 h-100 justify-center py-10 px-5 relative shine-box overflow-hidden">
    <span className="shine"></span>

    <div className="font-medium text-3xl text-white">Plan & Organize</div>
    <div className="mt-4 relative">
      <img src="YX9i3N9waLZ4JydRrYz5jum2W5o.png.svg" alt="" className="w-[320px] h-[190px]" />
      <div className="absolute top-1/2 left-15 w-50 h-[1px] bg-[#1f1f1f]"></div>
      <div className="absolute top-15 left-15 w-50 h-[1px] bg-[#1f1f1f] rotate-19 origin-top-left"></div>
      <div className="absolute bottom-15 left-15 w-50 h-[1px] bg-[#1f1f1f] -rotate-19 origin-bottom-left"></div>
      <div className="absolute top-18 left-35 bg-[#050505] border-[#262626] border-1 rounded-full px-6 py-6"></div>
      <div className="absolute top-21 left-38">
        <img src="Icon Image → sv2a4eygGjiTAs6GVt1u05sNYo.svg.svg" alt="" className='w-[22px] h-[24px]' />
      </div>
      <div className="absolute top-12 left-60 bg-[#050505] border-[#262626] border-1 px-3 py-3"></div>
      <div className="absolute top-13 left-61">
        <img src="Icon Image → K4mauElkun2mVNvT5AVW15LwJWI.svg.svg" alt="" className='w-[17px] h-[22px]' />
      </div>
      <div className="absolute top-20 left-60 bg-[#050505] border-[#262626] border-1 px-3 py-3"></div>
      <div className="absolute top-20.5 left-61">
        <img src="Icon Image → hpu0TmZwLCrVSOtd6hOIG7lP8.svg.svg" alt="" className='w-[17px] h-[22px]' />
      </div>
      <div className="absolute top-29 left-60 bg-[#050505] border-[#262626] border-1 px-3 py-3"></div>
      <div className="absolute top-30.5 left-61.5">
        <img src="7bxHqxSQqyn94XGykE6IVNtw1Eo.svg.svg" alt="" className='w-[14px] h-[14px]' />
      </div>
    </div>
    <div className="font-normal text-[18px] text-white py-2.5 px-[-1]">
      We enhance efficiency by integrating apps and reducing downtime.
    </div>
  </div>
  <div className="bg-[#2e2e2e] rounded-4xl w-90 h-100 text-white shine-box overflow-hidden relative">
    <span className="shine"></span>

    <div className="font-medium text-3xl text-white pt-12">Custom Projects</div>
    <div className="mt-4 relative grid grid-cols-2">
      <div className="flex flex-col justify-center mt-1 h-47 pt-2 px-10 mx-10 bg-[#0d0d0d] rounded-l-2xl text-[12px]">
        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
      </div>
      <div className="text-white bg-black w-54 h-47 absolute left-30 top-1 rounded-r-2xl text-[12px] pt-7">
        <pre>
{`contract ChatBot {
  address public owner;
  int private response;

  constructor() {
    owner = msg.sender;
  }
}`}
        </pre>
      </div>
    </div>
    <div className="font-normal text-[18px] text-white py-2.5 px-[-1]">
      We created a versatile chatbot that understands diverse questions.
    </div>
  </div>

 
  <div className="bg-[#2e2e2e] rounded-4xl w-90 h-100 shine-box overflow-hidden relative">
    <span className="shine"></span>

    <div className="font-medium text-3xl text-white pt-12">Smart Automation</div>
    <div className="relative">
      <img src="RQWGh7f8Cnb8blhaJXengKND4Bw.png.svg" alt="" className='w-[400px] px-5 pt-5' />
      <div className="absolute top-12 left-25">
        <img src="Active 2.svg" alt="" />
      </div>
    </div>
    <div className="font-normal text-[18px] text-white py-3 px-5">
      We analyze operations and suggest AI solutions to boost efficiency.
    </div>
  </div>

</div>

<div className="flex flex-wrap px-30 pt-20 gap-5 text-[#c4c4c4]">
  <div className="rounded-3xl bg-[#0d0d0d] flex gap-2 py-3 px-3 shine-box overflow-hidden relative">
    <span className="shine"></span>
    <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
      <img src="sPmibGCLfmQVJHX0tlJqMt1ZOb8.svg fill.svg" alt="" className='w-7 h-7' />
    </div>
    <div className="font-medium text-[15px] pt-2 whitespace-nowrap">AI-Driven Solutions</div>
  </div>
  <div className="rounded-3xl bg-[#0d0d0d] flex gap-2 pt-3 px-3 shine-box overflow-hidden relative">
    <span className="shine"></span>
    <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
      <img src="Icon Image → TpMsQ4JuQXH87CLdEKVrih7OjaY.svg.svg" alt="" className='w-7 h-7' />
    </div>
    <div className="font-medium text-[15px] pt-2 whitespace-nowrap">Serverless Computing</div>
  </div>
  <div className="rounded-3xl bg-[#0d0d0d] flex gap-2 pt-3 px-3 shine-box overflow-hidden relative">
    <span className="shine"></span>
    <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
      <img src="Icon Image → fGRMJzZ1klCadiGWxHOwXOZ9qK0.svg.svg" alt="" className='w-7 h-7' />
    </div>
    <div className="font-medium text-[15px] pt-2 whitespace-nowrap">Cloud Integration</div>
  </div>


  <div className="rounded-3xl bg-[#0d0d0d] flex gap-2 pt-3 px-3 shine-box overflow-hidden relative">
    <span className="shine"></span>
    <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
      <img src="Icon Image → OT81xXSmHrXj05Gjwm0H4r7m0L8.svg.svg" alt="" className='w-7 h-7' />
    </div>
    <div className="font-medium text-[15px] pt-2 whitespace-nowrap">Data Insight</div>
  </div>

</div>

<div className="flex px-60   pt-10 gap-5 text-[#c4c4c4] " >
    <div className="rounded-3xl bg-[#0d0d0d]  flex gap-2 py-3 px-3 shine-box overflow-hidden relative ">
        <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
            <img src="Icon Image → Hy7hoU7QAz66ago0Fs6owYjA.svg.svg" alt="" className='w-7 h-7' />
        </div>
        <div className="font-medium text-[15px] pt-2 whitespace-nowrap">Analytics</div>
    </div>
    <div className="rounded-3xl bg-[#0d0d0d]  flex gap-2 pt-3 px-3 shine-box overflow-hidden relative ">
        <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
            <img src="Icon Image → QKgOGYR4rTNLO3KDEZLPDU6wvU.svg.svg" alt="" className='w-7 h-7' />
        </div>
        <div className="font-medium text-[15px] pt-2 whitespace-nowrap">API Security</div>
    </div>
    <div className="rounded-3xl bg-[#0d0d0d]  flex gap-2 pt-3 px-3 shine-box overflow-hidden relative ">
        <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
            <img src="Icon Image → FuYRMfKxtC6kJDq6v671cgsNGY.svg.svg" alt="" className='w-7 h-7' />
        </div>
        <div className="font-medium text-[15px] pt-2 whitespace-nowrap">Real-Time</div>
    </div>
    <div className="rounded-3xl bg-[#0d0d0d]  flex gap-2 pt-3 px-3 shine-box overflow-hidden relative ">
        <div className="border-[#171717] border-1 bg-[#010101] rounded-full w-10 h-10 pt-1 pl-1"> 
            <img src="Icon Image → 0EJSat3AKzJRdD6xxuuiwMg63y4.svg.svg" alt="" className='w-7 h-7' />
        </div>
        <div className="font-medium text-[15px] pt-2 whitespace-nowrap">Ad Targeting</div>
    </div>
</div>
<div className="py-10 flex justify-center text-center">
    <div className="px-5 py-1 border-2 border-solid border-[#141414] rounded-full text-[#efefef] decoration-solid fontlight text-[13px]  shine-box overflow-hidden relative ">Simple Pricing</div>
 </div>
  <div className="flex justify-center font-semibold text-5xl text-white pb-1px  ">Transparent Pricing Plans</div>
  <div className="text-[#6b6b6b] text-xl py-10">We offer adaptable pricing solutions for businesses of any size.</div>
<div className="flex justify-center gap-5 px-20 py-5 ">
    <div className="rounded-3xl w-70 h-120 bg-[#1f1f1f] py-7 pr-35 relative overflow-hidden shine-box">
        <div className="text-white text-2xl">Standard</div>
        <div className="text-white whitespace-nowrap pt-7 pl-5 text-[18px]">Ideal for small teams.</div>
        <div className="flex text-white pl-3 pt-4.5">
            <div className="font-semibold text-5xl font-[Plus Jakarta sans] ">$900</div>
            <div className="pt-6">/month</div>
        </div>
        <div className="flex justify-center items-center py-7  px-35 ">
  <button className="flex justify-center items-center relative px-30 py-3.5  font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF] hover:bg-[linear-gradient(90deg,#FC66BD_21.42%,#0064DA_60.71%,#03D9AF_100%)] hover:bg-[length:100%_100%] hover:animate-[]">
    {/* animated gradient background */}
    <span className="absolute inset-0 shines-text"></span>

    {/* button content */}
    <span className="relative z-10 flex items-center gap-1 whitespace-nowrap">
      Get Started
      <ArrowDownLeftIcon className="h-4 w-4 rotate-180" aria-hidden="true" />
    </span>
  </button>
</div>
<div className="text-[17px] text-[#FFFFFF] pl-7 whitespace-nowrap">What's Included:</div>
<div className="flex pt-5 pl-5 whitespace-nowrap gap-2 items-center">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl ">Up to 10 users</div>
</div>
<div className="flex pt-5 pl-5 whitespace-nowrap gap-2">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl">Basic support</div>
</div>
<div className="flex pt-5 pl-5 whitespace-nowrap gap-2">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl">Standard features</div>
</div>


        
        
    </div>
        <div className="rounded-3xl w-120 h-120 bg-[#1f1f1f] py-7 pr-35 shine-box overflow-hidden relative">
        <div className="flex px-3.5 gap-2">
        <div className="text-white text-2xl pl-3">Pro</div>
        <div className="bg-[#171717] rounded-full px-3  text-white text-[14px]">
            popular
        </div>
        </div>
        <div className="text-white whitespace-nowrap pt-7 pl-5 text-[18px]">Designed for expanding teams and advanced needs.</div>
        <div className="flex text-white pl-3 pt-4.5">
            <div className="font-semibold text-5xl font-[Plus Jakarta sans] ">$1,600</div>
            <div className="pt-6">/month</div>
        </div>
        <div className="flex  items-center py-7  pl-6 ">
  <button className="flex justify-center items-center relative px-55 py-3.5  font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF] hover:bg-[linear-gradient(90deg,#FC66BD_21.42%,#0064DA_60.71%,#03D9AF_100%)] hover:bg-[length:100%_100%] hover:animate-[]">
    {/* animated gradient background */}
    <span className="absolute inset-0 shines-text"></span>

    {/* button content */}
    <span className="relative z-10 flex items-center gap-1 whitespace-nowrap">
      Get Started
      <ArrowDownLeftIcon className="h-4 w-4 rotate-180" aria-hidden="true" />
    </span>
  </button>
</div>
<div className="text-[17px] text-[#FFFFFF] pr-3 whitespace-nowrap">What's Included:</div>
<div className="grid grid-cols-2 pr-20 ">
<div className="flex  pt-5 pl-5  whitespace-nowrap gap-2 items-center">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl  ">Up to 10 users</div>
</div>
<div className="flex pt-5 pl-35 whitespace-nowrap gap-2 ">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl ">Priority support</div>
</div>
<div className="flex pt-5 pl-5 whitespace-nowrap gap-2 ">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl">Enhanced Security</div>
</div>
<div className="flex pt-5 pl-35 whitespace-nowrap gap-2">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl">Advanced Analytics</div>
</div>

<div className="flex pt-5 pl-5 whitespace-nowrap gap-2">
    <div className="">
    <div className="rounded-full w-6 h-6 bg-[#1f1f1f] border-2 border-white">
    <img src="Vector.svg" alt=""  className='w-30  pl-2.5 pb-5.5' />
    </div>
    </div>
    <div className="text-white text-xl">Custom workflows</div>
</div>
     </div>
</div>
</div>
 <div className="py-10 flex justify-center text-center">
    <div className="px-5 py-1 border-2 border-solid border-[#141414] rounded-full text-[#efefef] decoration-solid fontlight text-[13px]  shine-box overflow-hidden relative ">What Our Users Say</div>
 </div>
<div className="flex justify-center font-semibold text-5xl text-white pb-1px ">Trusted by Businesses Like Yours</div>
<div className="flex gap-11 bg-black p-10 rounded-2xl">
  <div className="border-2 border-black rounded-2xl overflow-hidden">
    <img
      src="nBQ60rZ6hCZgMQXeeDqcaAPJBs.jpg.svg"
      alt="profile"
      className="w-[300px] h-[300px] object-cover"
    />
  </div>

  {/* Right side - Content */}
  <div className="flex flex-col gap-6 max-w-xl">
    {/* Logo + Zapfast */}
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF]">
        <img
          src="sPmibGCLfmQVJHX0tlJqMt1ZOb8.svg fill.svg"
          alt="zapfast logo"
          className="w-6 h-6 invert brightness-0"
        />
      </div>
      <div className="text-white text-xl font-semibold">Zapfast</div>
    </div>

    {/* Testimonial text */}
    <div className="text-white text-3xl leading-snug">
      "Automatix's Fusion Of AI And Innovation Set Our Project Apart. Their
      Solutions Are Second To None."
    </div>

    {/* Person name + role */}
    <div className="text-white">
      <span className="font-bold text-lg">Zidane Muharto</span>{" "}
      <span className="text-gray-400">Chief Technology Officer</span>
    </div>

    {/* Stats */}
    <div className="flex gap-10 text-white">
      <div>
        <div className="text-2xl font-bold">73%</div>
        <div className="text-sm text-gray-400">Sales increase in first month.</div>
      </div>
      <div>
        <div className="text-2xl font-bold">5X</div>
        <div className="text-sm text-gray-400">Faster customer resolutions.</div>
      </div>
    </div>
  </div>
</div>
<div className="bg-black py-16 px-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    {/* Card 1 */}
    <div className="flex flex-col items-center text-white max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <img src="Vector (1).svg" alt="CreativeEdge" className="w-6 h-6" />
        <span className="font-semibold text-lg">CreativeEdge</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-pink-500 text-xl">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-200 text-[15px] leading-relaxed mb-6 px-2">
        "The creativity and AI expertise from Automatix set a new benchmark for our industry. Highly recommended!"
      </p>

      {/* Name + Role */}
      <div>
        <div className="font-semibold text-base">Agus Blimbing</div>
        <div className="text-sm text-gray-400">Tech Manager</div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-white max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <img src="Vector (4).svg" alt="BrightNest" className="w-6 h-6" />
        <span className="font-semibold text-lg">BrightNest</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-pink-500 text-xl">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-200 text-[15px] leading-relaxed mb-6 px-2">
        "Automatix's revolutionary AI approach and creative solutions elevated our project. Stellar performance!"
      </p>

      {/* Name + Role */}
      <div>
        <div className="font-semibold text-base">Steve Kebaler</div>
        <div className="text-sm text-gray-400">AI Developer</div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-white max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <img src="Vector (5).svg" alt="PrimeCore" className="w-6 h-6" />
        <span className="font-semibold text-lg">PrimeCore</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
          <span key={i} className="text-pink-500 text-xl">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-200 text-[15px] leading-relaxed mb-6 px-2">
        "The blend of AI and creativity at Automatix transformed our vision into reality. Exceptional support!"
      </p>

      {/* Name + Role */}
      <div>
        <div className="font-semibold text-base">John Kepanjen</div>
        <div className="text-sm text-gray-400">E-Commerce Stack</div>
      </div>
    </div>

  </div>
</div>
<div className="py-10 flex justify-center text-center">
    <div className="px-5 py-1 border-2 border-solid border-[#141414] rounded-full text-[#efefef] decoration-solid fontlight text-[13px]  shine-box overflow-hidden relative ">Our Creative Minds</div>
 </div>
  <div className="flex justify-center font-semibold text-5xl text-white pb-1px  ">The People Behind The Magic</div>
  <div className="text-[#6b6b6b] text-xl py-10">Meet our talented team turning ideas into exceptional results.</div>

  <div className="bg-black py-16 px-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
    
    {/* Member 1 */}
    <div className="flex flex-col items-center">
      <img 
        src="cSmkP38FJ52IdVqefVv60WL94pY.jpg.svg" 
        alt="Alif Kepanjen" 
        className="w-64 h-80 object-cover rounded-2xl"
      />
      <div className="text-white text-lg font-semibold mt-4">Alif Kepanjen</div>
      <div className="text-gray-400 text-sm">CEO</div>
    </div>

    {/* Member 2 */}
    <div className="flex flex-col items-center">
      <img 
        src="eiYrlw2iUfN5yz2yCOMfSMA9uao.jpg.svg" 
        alt="Jennifer Sukun" 
        className="w-64 h-80 object-cover rounded-2xl"
      />
      <div className="text-white text-lg font-semibold mt-4">Jennifer Sukun</div>
      <div className="text-gray-400 text-sm">Business Development</div>
    </div>

    {/* Member 3 */}
    <div className="flex flex-col items-center">
      <img 
        src="2gN8IoNAOZFMzwH3PrivG3JS4A.jpg.svg" 
        alt="David Pakis" 
        className="w-64 h-80 object-cover rounded-2xl"
      />
      <div className="text-white text-lg font-semibold mt-4">David Pakis</div>
      <div className="text-gray-400 text-sm">Tech Officer</div>
    </div>

    {/* Member 4 */}
    <div className="flex flex-col items-center">
      <img 
        src="sNKKH3vzRIxCHveUQcWbtBbnNA.jpg.svg" 
        alt="Radu Klojen" 
        className="w-64 h-80 object-cover rounded-2xl"
      />
      <div className="text-white text-lg font-semibold mt-4">Radu Klojen</div>
      <div className="text-gray-400 text-sm">Infrastructure</div>
    </div>

  </div>
</div>
<div className="py-10 flex justify-center text-center">
    <div className="px-5 py-1 border-2 border-solid border-[#141414] rounded-full text-[#efefef] decoration-solid fontlight text-[13px]  shine-box overflow-hidden relative ">Need to Know</div>
 </div>
  <div className="flex justify-center font-semibold text-5xl text-white pb-1px  ">Frequently Asked Questions</div>
  <div className="flex flex-col items-center space-y-3 pt-6">

  {/* Question 1 */}
  <select className="w-[600px] px-6 py-3 rounded-lg bg-black text-[#bfbfbf]">
    <option disabled selected>
      What makes Automatix different from other agencies?
    </option>
    <option>We use AI + Innovation</option>
    <option>Creative Teamwork</option>
    <option>Faster Results</option>
  </select>

  {/* Question 2 */}
  <select className="w-[600px] px-6 py-3 rounded-lg bg-black   text-[#bfbfbf]">
    <option disabled selected>
      How does AI enhance the services provided by Automatix?
    </option>
    <option>AI gives faster automation</option>
    <option>Data-driven insights</option>
    <option>Better personalization</option>
  </select>

  {/* Question 3 */}
  <select className="w-[600px] px-6 py-3 rounded-lg bg-black  text-[#bfbfbf]">
    <option disabled selected>
      How does Automatix ensure the quality of its AI solutions?
    </option>
    <option>Continuous testing</option>
    <option>Expert supervision</option>
    <option>Client feedback integration</option>
  </select>

  {/* Question 4 */}
  <select className="w-[600px] px-6 py-3 rounded-lg bg-black  text-[#bfbfbf]">
    <option disabled selected>
      Does Automatix offer customized solutions?
    </option>
    <option>Yes, tailored AI strategies</option>
    <option>Industry-specific services</option>
    <option>Full customization available</option>
  </select>

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
