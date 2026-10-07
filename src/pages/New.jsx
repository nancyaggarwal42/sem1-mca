import React from 'react'
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Brain,
  Heart,
  Sprout,
  Sparkles,
  Flower2,
} from "lucide-react";

const New = () => {
  return (
    <div className='h-screen overflow-hidden bg-[#060B16] relative'>
        <div className="relative z-10 min-h-screen max-w-[1600px] grid grid-cols-1 lg:grid-cols-2">

            {/* left */}
            <div className="left flex flex-col px-6 py-8 sm:px-10 md:px-16 lg:px-12 xl:px-20">

                {/* logo */}
                <div className="logo flex gap-3 w-fit items-center">
                <div className="flex h-12 w-12 items-center justify-center text-[#A78BFA]">
                <Flower2 size={42} strokeWidth={1.5} />
                </div>
                <a href='/' className="flex flex-col items-start">
                    <h2 className='text-white font-bold text-xl tracking-tight'>Serenity <span className='text-[#A78BFA]'>steps</span></h2>
                    <p className='text-[#94A3B8] text-xs tracking-[0.8rem'> Heal · Grow · Be You </p>
                </a>
                </div>

                {/* main */}
                <div className="my-auto py-14 lg:py-10">
                    <p className="mb-5 flex items-center gap-2 text-sm font-medium tracking-wide text-[#A78BFA]">
                     <Sparkles size={16} />
                     YOUR JOURNEY STARTS HERE
                   </p>
                   <p className='max-w-xl text-4xl tracking-tight leading-tight m:text-5xl xl:text-[52px] font-semibold'>A healthier mind <br /> builds a <span className='bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] bg-clip-text text-transparent'>brighter you</span></p>
                   <p className='mt-6 leading-7 text-sm text-[#B8C4DA] sm:text-base'>Take the first step towards your well-being. <br /> We're here to support you, every step of the way.</p>

                   <div className="mt-10 grid max-w-xl grid-cols-3">

              {/* Detect */}
              <div className="border-r border-[#334155]/80 pr-3 sm:pr-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#17243B]/90 text-[#93B4FF]">
                  <Brain size={23} />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Detect
                </h3>

                <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#B8C4DA] sm:text-sm">
                  Understand what you're facing
                </p>
              </div>

              {/* Heal */}
              <div className="border-r border-[#334155]/80 px-3 sm:px-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#17243B]/90 text-[#67D8FF]">
                  <Heart size={23} />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Heal
                </h3>

                <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#B8C4DA] sm:text-sm">
                  Personalized recovery plans
                </p>
              </div>

              {/* Grow */}
              <div className="pl-3 sm:pl-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#17243B]/90 text-[#67D8FF]">
                  <Sprout size={23} />
                </div>

                <h3 className="text-sm font-semibold text-white sm:text-base">
                  Grow
                </h3>

                <p className="mt-2 max-w-[130px] text-xs leading-5 text-[#B8C4DA] sm:text-sm">
                  A better, stronger you
                </p>
              </div>

            </div>
                </div>
            </div>
            <section className='flex flex-col px-5 pb-10 sm:px-10 lg:px-8 lg:py-12 xl:px-16'>
              <div className="sm:p-9 md:p-10 rounded-[24px] border w-full max-w[470px] border-[#273449] bg-[#090E19]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              {/* heading */}
              <div className="mb-8">
                <h2 className='flex items-center gap-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl'>Welcome back <Sparkles
                  size={23}
                  className="fill-[#8B5CF6]/20 text-[#A78BFA]"
                /></h2>
                <p className='text-[#A9BBD9] text-sm  mt-3 sm:text-base'>Sign in to continue</p>
              </div>
              {/* form */}
              <form action=""></form>
              </div>
            </section>
        </div>
    </div>
  )
}

export default New