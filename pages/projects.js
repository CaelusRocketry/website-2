import { useState } from 'react'
import Image from "next/image"
import cat2 from "../public/images/Black_background.jpeg"
import cat23 from "../public/images/Screen Shot 2022-04-23 at 10.03.41 AM.png"
import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/company-mission-statement-hero-@2x.jpeg"
import b from "../public/images/1145359.webp"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/1552756305626.jpeg"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"
import Head from 'next/head'
// import { Main } from 'next/document'
import cat1 from "../public/images/e.png"
import cat3 from "../public/images/e2.png"
import cat4 from "../public/images/pid.png"
import cat5 from "../public/images/pid2.webp"
import cat6 from "../public/images/enginer.webp"
import cat7 from "../public/images/ki.webp"
import cat8 from "../public/images/c1.webp"
import cat9 from "../public/images/cal3.webp"
import cat10 from "../public/images/li_auto_x2.jpg"
import cat11 from "../public/images/c3.webp"

const myLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80/${src}?w=${width}&q=${quality || 75}`
  }
export default function projects() {
    return (
      <div>
        <Head>
        <title>
          About
        </title>
      </Head>
      <main className='h-screen'>
      <div className = "bg-gradient-to-r from-slate-900 to-black h-screen">

      <div className = "bg-gradient-to-r from-slate-900 to-black">
          <div className = "flex flex-items justify-center pt-12">
          <div className="underline decoration-red-400 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">Completed</div>
        </div>
        <div className = "pt-12 flex flex-row">
    <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-3">
    <div className=" rounded-3xl  bg-black">
  <div className="md:flex">
    <div className="rounded-3xl shadow-2xl">
      <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Ethanol Cold Flow</a>
      <p className="mt-2 text-black">
      </p>
      
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Nitrous Cold Flow (Water)</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Nitrous Cold Flow</a>
      <p className="mt-2 text-black">

</p>
    </div>
  </div>
</div>
</div>
  </div>

  </div>



            
      </div>

      <div className = "bg-gradient-to-r from-slate-900 to-black">
          <div className = "flex flex-items justify-center pt-24">
          <div className="underline decoration-red-400 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">In Progress</div>
        </div>
        <div className = "pt-12 flex flex-row">

    <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-48 pr-3">
    <div className=" rounded-3xl  bg-black">
  <div className="md:flex">
    <div className="rounded-3xl shadow-2xl">
      <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Full Cold Flow</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-48">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Static Engine Fire</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  

 

  </div>



            
      </div>

      <div className = "pb-8 bg-gradient-to-r from-slate-900 to-black">
          <div className = "flex flex-items justify-center pt-24">
          <div className="underline decoration-red-400 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">Planned</div>
        </div>
        <div className = "pt-12 flex flex-row">
    
    <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-3 pb-12">
    <div className=" rounded-3xl  bg-black">
  <div className="md:flex">
    <div className="rounded-3xl shadow-2xl">
      <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Callisto I</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3 pb-12">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Callisto II</a>
      <p className="mt-2 text-black">
      </p>
    </div>
  </div>
</div>
</div>
  </div>

  

  <div className = "transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6 pb-12">
  <div className=" rounded-3xl bg-black">
  <div className="md:flex">
  <div className="rounded-3xl shadow-2xl">
  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={b} alt="">
    </Image>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Project Caelus</div>
      <a href="#" className="block mt-1 text-3xl leading-tight font-extralight semibold text-red-400 hover:underline">Callisto III</a>
      <p className="mt-2 text-black">

</p>
    </div>
  </div>
</div>
</div>
  </div>

  </div>


  </div>


<div class="snap-x mx-auto snap-mandatory h-screen flex w-screen overflow-scroll">


  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">
    <div>
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Ethanol Cold Flow</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">September 2020</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">In this test, we ran water pressurized with nitrogen gas through our Ethanol tower in order to verify our system and get readings on pressure and temperature. This cold flow test was our first major checkpoint to our way to Callisto 1 and required a great effort from each subsystem.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Elements (Propulsion)</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">The ethanol cold flow test hardware largely consists of valves, piping, and tanks. The valves and piping are bolted to two aluminum plates and a tower made of 8020s. The piping is layed out in a simple geometric pattern that allows us to identify and access any valve in the system.</div>
    <div className="p-6">
      <a href="https://www.youtube.com/watch?v=QW5VUM-bRI4" className="underline decoration-indigo-500 underline-offset-8 decoration-4 pt-12 flex items-center justify-center mt-1 text-4xl leading-tight font-extralight semibold text-indigo-500 hover:underline">Video</a>
      <p className="mt-2 text-xl font-medium text-indigo-500">
</p>
</div>
    </div>

    <div className="pt-6 pr-6 pl-12">
        <Image src={cat1} alt="">
        </Image>
        <Image src={cat3} alt="">
        </Image>
        </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div className = "pr-24">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Nitrous Cold Flow (Water)</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">December 2020</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-base text-white font-extralight semibold">In this test, we will run water pressurized with nitrogen gas through our nitrogen tower, mirroring that of our preliminary ethanol cold flow test. Our oxidizer, nitrous oxide, is self-pressurizing. This means that in a certain temperature range, liquid nitrous oxide will boil off and create a gas that exerts a pressure on the remaining nitrous oxide liquid. This means that unlike our fuel (ethanol), which requires a nitrogen tank to pressurize, nitrous oxide can pressurize itself and takes out the need for any K-bottle. However, since nitrous is a rather dangerous material, we have decided to first perform this preliminary nitrous oxide test where we replace the nitrous oxide with water and add in a nitrogen tank for pressurization.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Elements (Propulsion)</div>
    <div className="pt-6 pl-6 tracking-wide text-base text-white font-extralight semibold">Like the completed ethanol cold flow, the nitrous oxide (water) cold flow test includes tanks and a similarly structured test stand. However, since we want to mirror our current plumbing layout to that of the nitrous cold flow test (with nitrous), the P&ID looks a little different from that of the ethanol cold flow test.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Elements (Programming)</div>
    <div className="pt-6 pl-6 tracking-wide text-base text-white font-extralight semibold">So, what did the programming team do to help make the cold flow a reality? Well, hidden behind thousands of lines of elegant code are 2 key programs - a simple control loop known as RCA (read, control, actuate) that is controlled by MCL (Main Control Loop) and our ground station software.</div>
    <div className="pt-6 pl-6 tracking-wide text-base text-white font-extralight semibold">The ground station can be thought of as a 'hub' on Earth that will communicate with our rocket 100km above the air! Ground station can actuate valves on the rocket, soft/hard abort in case anything goes wrong, receive live data pertaining to the rocket, request specific data from the rocket, and more. Currently, it does all this through web sockets over WiFi, but we will have to look into long-range communication methods in the future.</div>

    </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div className = "h-1/2 w-1/2">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Nitrous Cold Flow</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">February 2021</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">This is the second part of nitrous cold flow testing. In this test, we run nitrous oxide through our nitrous tower to verify our system, get pressure and temperature readings, and ensure a safe enviornment for testing with nitrous. Nitrous oxide is a rather dangerous chemical, so much safety regarding handling nitrous research needs to be completed in order to progress with our test.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Elements (Propulsion)</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">The main difference between the nitrous cold flow (water) and the nitrous cold flow is that this test runs actual nitrous oxide, without a separate tank for pressurization, through our nitrous tower compared to running water pressurized with nitrogen through our nitrous tower. Nitrous oxide was chosen as our oxidizer due to its low safety hazards in comparison to other oxidizer choices and its unique self-pressurizing property.</div>

    </div>

    <div className="h-1/2 w-1/2 pt-36 pr-6 pl-36">
        <Image src={cat4} alt="">
        </Image>

        </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div className = "h-1/2 w-1/2">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Full Cold Flow</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">April 2022</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
   <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">In this test, we will run both nitrous oxide through our nitrous tower and water pressurized with nitrogen through our ethanol tower and feed the resulting propellants through the injector and into the combustion chamber. This test requires the integration of both towers and much work will need to be done in terms of combining procedures and hazard prevention.</div>
   <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">More information to come!</div>

    </div>

    <div className="h-1/2 w-1/2 pt-6 pr-6 pl-12">
        <Image src={cat5} alt="">
        </Image>
        </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div className = "h-1/2 w-1/2">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Static Engine Fire</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">July 2022</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">In this test, we will run ethanol pressurized with nitrogen gas through our ethanol tower and nitrous oxide through our nitrous tower and feed these into the injector and into the combustion chamber, where they will ignite and go through the nozzle to get a reading on the thrust. This test has particular emphasis on ignition, injector functionality, and hazard prevention since it models what our actual rocket's interior will consist of.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">More information to come!</div>
    
    </div>

    <div className="h-1/2 w-1/2 pt-6 pr-6 pl-12">
        <Image src={cat6} alt="">
        </Image>
        <Image src={cat7} alt="">
        </Image>
        </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div>
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Callisto I</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">July 2023</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">Callisto I will be the first liquid bi-propellant rocket to be flown by Project Caelus. Its primary mission is to test the avionics, software defined radio (SDR), video streaming, passive control systems, recovery systems, launchpad preparations, and launch procedures. As the first of the three Callisto rockets, Callisto I will be a major milestone in our progress to reaching the Karman line.</div>
    
    </div>

    <div className="pt-6 pr-6 pl-12">
        <Image src={cat8} alt="">
        </Image>
        <Image src={cat9} alt="">
        </Image>
        </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div>
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Callisto II</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">June 2024</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">The purpose of Callisto II is to serve as an intermediate testing platform between Callisto I, our first flight, and Callisto III, our projected attempt at a suborbital flight. The possibilities of multi-engine stages, solid strap-on boosters, and a high altitude optimized upper stage are still on the table. Perhaps the greatest innovation in this iteration of the Callisto family is the implementation of a helium dynamic pressure regulation system (DPR) to ensure constant and controlled chamber pressures throughout the entirety of the flight. In addition, due to the projected top speed and high altitudes, the recovery and communication systems may need to be redesigned entirely.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">More information to come!</div>
    
    </div>

    <div className="pt-6 pr-6 pl-12">

        <Image src={cat10} alt="">
        </Image>
        </div>

  </div>

  <div className = "bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">

    <div className = "h-1/2 w-1/2">
    <div className="pt-6 pl-6 tracking-wide text-4xl text-white font-extralight semibold">Callisto III</div>

    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">June 2025</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">Description</div>
    <div className="pt-6 pl-6 tracking-wide text-xl text-white font-extralight semibold">Callisto III is the culmination of the immense dedication and passion our team will have put into this project. Our final goal, to reach the Karman line (100 km) and successfully recover the rocket, will be achieved with this massive 9 meter long, ~100 kN liftoff thrust rocket projected to cost over $50,000. The engineering challenges associated with this are evidently difficult — massive combustion instability problems, large cooling circuits, and a more complex ground station communication system. The statistics for this flight are not yet determined at this point.</div>
    <div className="pt-6 pl-6 tracking-wide text-2xl text-indigo-500 font-extralight semibold">More information to come!</div>
    
    </div>

    <div className="h-1/2 w-1/2 pt-6 pr-6 pl-12">
        <Image src={cat11} alt="">
        </Image>

        </div>

  </div>
  
  
  </div>
  <div className = "font-thin bg-slate-900 flex flex-row items-center justify center">

<h1 className = "text-white text-2xl pl-80 pt-4 pb-4">
  Home
</h1>
<h1 className = "text-white text-2xl pl-20 pt-4 pb-4">
  Projects
</h1>
<h1 className = "text-white text-2xl pl-20 pt-4 pb-4">
  About
</h1>
<h1 className = "text-white text-2xl pl-20 pt-4 pb-4">
  Project Caelus 2022
</h1>
<h1 className = "text-white text-2xl pl-20 pt-4 pb-4">
  Social Media
</h1>
</div>
  </div>


            

      </main>
      </div>
      
    )
  }

  //USE THE CAROUSEL FROM TAILWIND