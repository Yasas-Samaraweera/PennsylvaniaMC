"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// BANNER DATA
interface BannerType {
    imgSrc: string;
    title: string;
    subtitle: string;
}

const bannerData: BannerType[] = [
    {
        imgSrc: '/assets/banner/Home.png',
        title: 'PENNSYLVANIA MEDITATION CENTER',
        subtitle: 'DEVELOP SPIRITUALITY THAT UNVEILS HAPPINESS'
    },
    {
        imgSrc: '/assets/banner/banner.jpg', // Assuming you have a second banner image
        title: 'LEARN PRACTICE THE TEACHINGS OF THE BUDDHA',
        subtitle: 'GROUP MEDITATION AND DHARMA DISCUSSION',
      
    },
    {
        imgSrc: '/assets/banner/banner2.jpg', // Optional third image
        title: 'DEVELOP SPIRITUALITY THAT UNVEILS HAPPINESS',
        subtitle: 'ANCIENT TEACHINGS FOR A MODERN WORLD'
    }
];

const HeroBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        appendDots: (dots: any) => (
            <div style={{
                position: 'absolute',
                bottom: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <ul style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false
                }
            }
        ]
    };

    return (
        <div id="home-section" className="relative w-full">
            <Slider {...settings}>
                {bannerData.map((banner, index) => (
                    <div key={index} className="relative w-full h-screen">
                        <div className="absolute inset-0">
                            <Image 
                                src={banner.imgSrc} 
                                alt={`Banner ${index + 1}`}
                                fill
                                priority
                                className="object-cover w-full h-full"
                            />
                        </div>
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                            <div className="text-center text-white max-w-2xl px-4">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                    {banner.title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-8">
                                    {banner.subtitle}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HeroBanner;
