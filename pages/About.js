import { useState } from "react"
import Image from "next/image"
import cat2 from "../public/images/Black_background.jpeg"
import cat3 from "../public/images/pc.jpeg"
import cat4 from "../public/images/w.jpeg"
import cat44 from "../public/images/ad3.jpeg"

import cat6 from "../public/images/ar.webp"
import cat7 from "../public/images/n.png"
import cat8 from "../public/images/sa.webp"
import cat9 from "../public/images/v.png"

import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/company-mission-statement-hero-@2x.jpeg"
import b from "../public/images/1145359.webp"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/1552756305626.jpeg"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"
import Head from "next/head"

export default function about() {
  return (
    <div className="bg-black h-screen">
      <Head>
        <title>
          About
        </title>
      </Head>
      <main className="bg-black h-max">

        <Image src={cat3}>
        </Image>
        <div className="flex flex-items-center justify-center pt-12 pb-12 underline decoration-indigo-500 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">Meet the Team</div>

        <div className="flex flex-row h-7/8 bg-gradient-to-r from-slate-900 to-black">

          <div className="w-1/2">
            <div className="flex flex-items-center justify-center pt-12 pb-8 underline decoration-indigo-500 underline-offset-8 decoration-4 uppercase tracking-wide text-2xl text-white font-extralight semibold">President/CEO</div>
            <div className="flex flex-items-center justify-center pb-12   underline-offset-8 decoration-4 tracking-wide text-3xl text-white font-extralight semibold">Aditya Vasantharao</div>
            <div className="text-white pr-16 pl-16">
              <div className="">
                <h1>
                  Hi! I&apos;m Aditya, the president of Project Caelus, and a senior at TJHSST. Oftentimes we believe that high-schoolers—due to financial constraints and gaps in knowledge—are limited in what they can achieve, especially when it comes to large-scale engineering projects that are more suited to being conducted in corporate R&D labs or PhD labs at large, world-renowned universities. I joined Project Caelus to prove that this isn&apos;t the case—that it&apos;s definitely possible for high schoolers to conduct groundbreaking research that makes the stuff of sci-fi movies a reality. As the president of Project Caelus, I’m responsible for managing the team&apos;s overall operations and cutting-edge engineering work, resourcing strategy, cultivating organizational structure and culture, and representing the organization to our partners. Through Project Caelus, I&apos;m also a guest lecturer at the Social Entrepreneurship Laboratory (BMGT 486U) at the University of Maryland&apos;s Smith School of Business.
                </h1>
              </div>


            </div>
          </div>

          <div className=" w-1/2">
            <Image src={cat44}>
            </Image>
          </div>

        </div>

        <div className="pr-48 pl-48 pt-12 flex flex-row">


          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Vice President - Technology</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Eric Feng</a>
                    <p className="mt-2 text-black">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Vice President - Operations</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Richa Misra</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 flex flex-row">
          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-3">
            <div className=" rounded-3xl  bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Propulsion Co-Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Jessica Chen</a>
                    <p className="mt-2 text-black">
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Propulsion Co-Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Tanmay Neema</a>
                    <p className="mt-2 text-black">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Structures Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Santiago Criado</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-3">
            <div className=" rounded-3xl  bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Manufacturing Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Ronel Sahoo</a>
                    <p className="mt-2 text-black">
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-3">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Software Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Nurdin Hossain</a>
                    <p className="mt-2 text-black">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 flex flex-row">

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Avionics Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Harika Akundi</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Outreach Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Anya Raval</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Finance Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Mihika Dusad</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Networking Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Sai Mattapalli</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transition ease-in-out hover:-translate-y-2 hover:scale-105 duration-300 pl-3 pr-6">
            <div className=" rounded-3xl bg-black">
              <div className="md:flex">
                <div className="rounded-3xl shadow-2xl">
                  <Image className="rounded-t-3xl object-cover md:h-full md:w-full" src={cat4} alt="">
                  </Image>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-extralight semibold">Social Media Lead</div>
                    <a href="#" className="block mt-1 text-2xl leading-tight font-extralight semibold text-white hover:underline">Aarushi Bommidi</a>
                    <p className="mt-2 text-black">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-items-center justify-center pt-12 pb-8 underline decoration-indigo-500 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">We are all making it happen</div>


        <div className="h-3/4 bg-slate-900">

          <div className="flex flex-row">

            <div className="rounded-3xl pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2 pt-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

          </div>

          <div className="flex flex-row">

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

          </div>

          <div className="flex flex-row">

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

          </div>

          <div className="flex flex-row">

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

            <div className="pr-1 pl-1 pb-2">
              <Image className="rounded-t-2xl" src={cat4} alt="">
              </Image>
            </div>

          </div>

        </div>

        <div className="flex flex-items-center justify-center pt-12 pb-8 underline decoration-indigo-500 underline-offset-8 decoration-4 uppercase tracking-wide text-4xl text-white font-extralight semibold">Including our Sponsors</div>
        <div className=" h-screen">
          <div className="pl-10 pr-10 snap-x mx-auto snap-mandatory h-screen flex w-screen overflow-scroll">


            <div className="bg-gradient-to-r from-slate-900 to-black w-screen snap-start flex-shrink-0">
              <div className="flex flex-row">

                <div className=" pt-48 p-6 w-1/2">
                  <a href="https://www.nasa.gov/" className="underline decoration-indigo-500 underline-offset-8 decoration-4 pt-12 flex items-center justify-center mt-1 text-8xl leading-tight font-extralight semibold text-indigo-500 hover:underline">NASA</a>
                  <p className="mt-2 text-xl font-medium text-indigo-500">
                  </p>
                </div>
                <div className="pl-12 pt-24 w-1/2">
                  <Image src={cat7} alt="">
                  </Image>

                </div>
              </div>
            </div>





            <div className="bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">


              <div className="pt-16 pr-32 pl-32">
                <Image src={cat6} alt="">
                </Image>

              </div>

            </div>
            <div className="bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">


              <div className="pt-48 pr-32 pl-32">
                <Image src={cat9} alt="">
                </Image>

              </div>

            </div>
            <div className="bg-gradient-to-r from-slate-900 to-black h-screen w-screen snap-start flex-shrink-0 flex flex-row">


              <div className="pt-16 pr-32 pl-32">
                <Image src={cat8} alt="">
                </Image>

              </div>

            </div>



          </div>
        </div>

        <div className="flex items-center justify-center pt-48 pb-48 h-3/4 bg-black font-extralight text-white text-2xl">
          <div>
            <h1>
              We are a team.
            </h1>
            <h1>
              We are a community.
            </h1>
            <h1>
              We provide opportunity.
            </h1>
            <h1>
              We share our experiences.
            </h1>
            <h1>
              We are...
            </h1>
            <h1>
              Project Caelus
            </h1>
          </div>
          <div className="underline decoration-indigo-500 underline-offset-8 decoration-4 pl-12">
            <h1>
              - The 2022 Project Caelus Team
            </h1>
          </div>
        </div>
        <div className="font-thin bg-slate-900 flex flex-row items-center justify center">

          <h1 className="text-white text-2xl pl-80 pt-4 pb-4">
            Home
          </h1>
          <h1 className="text-white text-2xl pl-20 pt-4 pb-4">
            Projects
          </h1>
          <h1 className="text-white text-2xl pl-20 pt-4 pb-4">
            About
          </h1>
          <h1 className="text-white text-2xl pl-20 pt-4 pb-4">
            Project Caelus 2022
          </h1>
          <h1 className="text-white text-2xl pl-20 pt-4 pb-4">
            Social Media
          </h1>
        </div>
      </main>
    </div>

  )
}