import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import AnimatedTitle from './AnimatedTitle';


gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about" className='min-h-screen w-screen'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <p className='font-general text-sm uppercase md:text-[10px] fade'>
            Welcome to Zentry
        </p>

        <AnimatedTitle title=" Disc<b>o</b>ver  the world's <br /> l<b>a</b>rgest shared adventure"
        containerClass="mt-5 !text-black text-center"/>


        <div className='about-subtext'>
            <p>The Game of Games begins-your life, now an epic MMORPG</p>
            <p>
                Zentry unities every player from countless games and platforms
            </p>
        </div>
      </div>
      
      
      <div className='h-dvh w-screen' id='clip' >
      {/* style={{
            clipPath: "polygon(0 0, 0 100%, 100% 85%, 100% 15%)",
            
          }} */}
        <div className='mask-clip-path about-image' >
            <img src="img/about.webp"
            alt="Background"
            className='absolute left-0 top-0 size-full object-cover'
            />
        </div>
        <img src="img/about-2.webp"
            alt="Background"
            className='absolute h-[1200px] -left-3 -top-[250px] size-full object-cover z-20'
        />
      </div>
    </div>
  )
}

export default About


// ----------------------------------------------------------------------------------


// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/all';
// import React from 'react';
// import AnimatedTitle from './AnimatedTitle';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   useGSAP(() => {
//     const clipAnimation = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#clip",
//         start: "center center",
//         end: "+=800 center",
//         scrub: 0.8,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     // clipAnimation.fromTo('.mask-clip-path', 
//     //     {clipPath: "polygon(0 0, 0 100%, 100% 85%, 100% 15%)",
//     //     },
//     //     {
//     //         clipPath: "polygon(0% 0%, 90% 0%, 90% 90%, 0% 90%)"
//     // });
    
//     clipAnimation.to(".mask-clip-path", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       ease: "power1.inOut",
//       width: "100vw",
//       height: "100vh",
//       borderRadius: 0,
//     });
//   });

//   return (
//     <div id="about" className="min-h-screen w-screen bg-light-blue">
//       {/* Header Section */}
//       <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
//         <p className="font-general text-sm uppercase md:text-[10px]">
//           Welcome to Zentry
//         </p>

//         <AnimatedTitle
//           title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
//           containerClass="mt-5 !text-black text-center"
//         />

//         <div className="about-subtext text-center ">
//           <p>The Game of Games begins—your life, now an epic MMORPG</p>
//           <p>Zentry unites every player from countless games and platforms</p>
//         </div>
        
//       </div>

     
//       <div className="h-dvh w-screen relative" id="clip">
//         <div
//           className="mask-clip-path about-image relative"
//           style={{
//             clipPath: "polygon(9% 0, 73% 6%, 85% 90%, 15% 100%)",
//             // (0 0, 0 100%, 100% 85%, 100% 15%)
//           }}
//         >
//           <img
//             src="img/about.webp"
//             alt="Background"
//             className="absolute left-0 top-0 size-full object-cover"
//           />
//         </div>
        
//         <img
//           src="img/about-2.webp"
//           alt="Overlay"
//           className="absolute h-[880px] -left-3 -top-[150px] size-full object-cover z-20"
//         />
//       </div>
//     </div>
//   );
// };

// export default About;

