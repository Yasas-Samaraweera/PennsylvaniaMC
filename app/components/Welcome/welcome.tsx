"use client"
import React from "react";
import Image from "next/image";
import { AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

const WelcomeBanner = () => {
    return (
      <div 
          id="Welcome" 
          className="relative bg-cover bg-center py-16"
          style={{
            backgroundImage: "url('/assets/gallery/backgroungd.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
      >     
        <div className="relative bg-transparent py-20 overflow-hidden">
            <div className="absolute inset-0 bg-white bg-opacity-10">
                {/* This creates a semi-transparent white overlay that allows the background image to show through */}
            </div>
            
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                {/* Decorative Lotus */}
                <div className="flex justify-center mb-10">
                    <div className="p-4 rounded-full">
                        <Image
                            src="/assets/logo/logo.png"
                            alt="Lotus flower"
                            width={80}
                            height={80}
                            className="opacity-80"
                        />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 leading-tight">
                    Welcome 
                    <br />
                    <span className="text-green-900 font-bold">Pennsylvania Meditation Center</span>
                </h1>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="md:col-span-2 flex justify-center">
                    <div className="space-y-4 text-center max-w-2xl">
                       <p className="text-gray-600 text-center">
                        Pennsylvania Meditation Center is a place of tranquility for all who would like to live a more peaceful life through mindfulness, meditation and the study and practice of the Buddha’s teachings. Located in south central Pennsylvania, it was incorporated in 2004 as International Buddhist Society of Pennsylvania.
                       </p>
                     </div>
                   </div>
                 </div>

                {/* Quote Section */}
                <div className=" bg-opacity-20 backdrop-blur-sm rounded-xl p-10 shadow-lg border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-900"></div>
                    <p className="italic text-gray-700 mb-6 text-xl font-serif leading-relaxed">
                        Wisdom springs from meditation; without meditation wisdom wanes. Having known these two paths of progress and decline, let a person so conduct himself that his wisdom may increase.
                    </p>
                    <p className="text-green-900 font-semibold text-lg">
                        — The Buddha
                    </p>
                </div>

                {/* Decorative Divider */}
                <div className="flex justify-center mt-12">
                    <div className="w-32 h-1 bg-indigo-200 rounded"></div>
                </div>
            </div>
        </div>
      </div>   
    );
};

export default WelcomeBanner;

