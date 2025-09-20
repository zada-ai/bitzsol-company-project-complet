import { useEffect, useState } from "react";
export default function Socail() 
{ 
  const [isPlaying, setIsPlaying] = useState(false);
    const [comment, setComment] = useState("");
const [showInput, setShowInput] = useState(false);

  const handleToggleInput = () => {
    setShowInput((prev) => !prev);
  };

  const handleSubmit = () => {
    alert(`Your comment: ${comment}`);
    setComment("");
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // scroll na ho
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <div className="my-4">ASANA TASK </div>
    <div className="my-4">RESCHEDULER & CLEANER</div>
  </div>
</div>
<div className="py-20 ">
  <img src="Screenshot_20250916-132709.jpg" alt="centerimg" className="w-[1160px] h-[566px] rounded-2xl" />
</div>


<div className="flex justify-start font-semibold text-3xl sm:text-4xl lg:text-6xl text-white pb-1">
  Description
</div>

<div className="text-white text-base sm:text-lg lg:text-xl font-light my-7 w-full max-w-[1150px]">
  Automates Asana task management by rescheduling overdue open tasks to today's date and deleting completed tasks. Uses Asana API with n8n scheduling and conditional logic nodes to keep workspace organized and up-to-date daily.
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

<div className="relative flex justify-center items-center bg-[#0d0d0d] rounded-2xl border-3 border-[#0d0d0d] px-12 py-15">
  
  <div className=" bg-black w-[1082.399px] h-[491.692px] rounded-xl">
  <div className="flex justify-center items-center  bg-black">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-lg border-4 border-gray-400 hover:scale-105 transition-transform duration-200 absolute top-60"
      >
        {isPlaying ? (
          // Pause wali image (jab play ho)
         <svg xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 31%)" viewBox="0 0 24 24" stroke-width="1.5" stroke="hsl(0, 0%, 31%)" class="size-10 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

        ) : (
          // Play wali image (jab pause ho)
          <svg xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 31%)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="hsl(0, 0%, 31%)" className="size-10 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>

        )}
      </button>
    </div>
    <div className="absolute bottom-2 left-25 -translate-x-1/2 bg-[#625DF5] rounded-3xl px-3 py-3">
      <img src="Frame.svg" alt="videoopen" className="w-[18px] h-[18px] mx-auto" />
    </div>
    <div className="py-5 px-2 flex">
  <div className="bg-white rounded-2xl p-3 text-sm w-fit shadow-md ml-auto">
    Join us at Chronicle! 👋
  </div>
</div>
<div className="bg-[rgb(13,13,13)] px-2 py-2 rounded-2xl inline-flex flex-col items-center gap-2">
  {/* 1x Button */}
  <button
    onClick={() => console.log("1x clicked")}
    className="flex items-center gap-1 text-white text-[9px] hover:scale-105 transition-transform"
  >
    <img 
      src="Frame (1).svg" 
      alt="" 
      className="w-[10px] h-[10px]" 
    />
    <span>1x</span>
  </button>

  {/* 4 min Button */}
  <button
    onClick={() => console.log("4 min clicked")}
    className="text-white text-sm hover:scale-105 transition-transform"
  >
    4 min
  </button>
  
</div>
<button className='flex text-white absolute bottom-45 left-[43%] bg-[#0d0d0d] rounded-3xl border-2 border-[#0d0d0d] px-3 py-1 gap-1.5'>
    <img src="Frame.png" alt="" className='w-[10px] ' />
  <div className=" ">Save to watch later</div>
  </button>
  <div className="flex  gap-2 border-white  border-solid text-white absolute top-135 left-[30%] ">
    <div className="flex justify-start ">
      <button className=''>😂</button>
      <button className=''>😍</button>
      <button className=''>😮</button>
      <button className=''>🙌</button>
      <button className=''>👍</button>
      <button className=''>👎</button>
      <button className=''>
        <img src="logos.svg" alt="" className='w-7' />
      </button>

          
        

    </div>
  <div className="p-5">
      {/* Comment Button */}
      <button
        onClick={handleToggleInput}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {showInput ? "Hide Box" : "Comment"}
      </button>

      {/* Input + Enter button (only when comment box open) */}
      {showInput && (
        <div className="flex items-center mt-3 border border-gray-400 rounded overflow-hidden w-full max-w-sm">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type here..."
            className="flex-1 px-3 py-2 text-black outline-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2"
          >
            Enter
          </button>
        </div>
      )}
    </div>
    <button
  onClick={() => alert("record a video")}
  className='flex  py-7'
>
  <img
    src="Frame.svg"
    alt="videoopen"
    className="w-[18px] h-[18px] my-1"
  />
  <span className="text-white">Record a video</span>
</button>

  </div>
  </div>
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
