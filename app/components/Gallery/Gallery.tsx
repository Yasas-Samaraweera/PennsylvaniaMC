"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Search, ArrowLeft } from "lucide-react";

// GALLERY ITEM INTERFACE
interface GalleryItem {
    id: string;
    imgSrc: string;
    title: string;
    description: string;
    category: string;
    relatedImages: string[];
}

// GALLERY DATA
const galleryData: GalleryItem[] = [
    {
        id: '1',
        imgSrc: '/assets/gallery/Katina2023/Katina1.png',
        title: '"Katina" 2023',
        description: '"Katina" 2023 at Pennsylvania Meditation Center',
        category: 'Ceremony',
        relatedImages: [
            '/assets/gallery/Katina2023/Katina2.png',
            '/assets/gallery/Katina2023/Katina3.png',
            '/assets/gallery/Katina2023/Katina4.png',
            '/assets/gallery/Katina2023/Katina5.png',
            '/assets/gallery/Katina2023/Katina6.png',
            '/assets/gallery/Katina2023/Katina7.png',
            '/assets/gallery/Katina2023/Katina8.png',
            '/assets/gallery/Katina2023/Katina9.png',
        ]
    },
    {
        id: '2',
        imgSrc: '/assets/gallery/potluck/Potluck1.png',
        title: '"Practice of Mindfulness and Potluck Meeting" 2023',
        description: 'Mindfulness practice and community gathering at Pennsylvania Meditation Center',
        category: 'Community',
        relatedImages: [
           '/assets/gallery/potluck/Potluck2.png', 
           '/assets/gallery/potluck/Potluck3.png', 
           '/assets/gallery/potluck/Potluck4.png',
           '/assets/gallery/potluck/Potluck5.png', 
           '/assets/gallery/potluck/Potluck6.png', 
        ]
    },
    {
        id: '3',
        imgSrc: '/assets/gallery/vesak2022/Vesak1.png',
        title: '"Vesak" 2022',
        description: '"Vesak Ceremony" 2022 at Pennsylvania Meditation Center',
        category: 'Ceremony',
        relatedImages: [
            '/assets/gallery/vesak2022/Vesak2.png', 
           '/assets/gallery/vesak2022/Vesak3.png',
           '/assets/gallery/vesak2022/Vesak4.png',
           '/assets/gallery/vesak2022/Vesak5.png', 
           '/assets/gallery/vesak2022/Vesak6.png',
        ]
    },
    {
        id: '4',
        imgSrc: '/assets/gallery/Katina21/Katina11.png',
        title: '"Katina" 2021',
        description: '"Katina" 2021 at Pennsylvania Meditation Center',
        category: 'Ceremony',
        relatedImages: [
            '/assets/gallery/katina21/Katina12.png', 
            '/assets/gallery/katina21/Katina13.png',
            '/assets/gallery/katina21/Katina14.png',
            '/assets/gallery/katina21/Katina15.png', 
            '/assets/gallery/katina21/Katina16.png',
        ]
    },
    {
        id: '5',
        imgSrc: '/assets/gallery/samadhi/samadhi1.png',
        title: 'Samadhi Statue',
        description: 'Samadhi Statue at Pennsylvania Meditation Center',
        category: 'Structure',
        relatedImages: [
            '/assets/gallery/samadhi/samadhi2.png',
            '/assets/gallery/samadhi/samadhi3.png',
            '/assets/gallery/samadhi/samadhi4.png',
            '/assets/gallery/samadhi/samadhi5.png',
            '/assets/gallery/samadhi/samadhi6.png',
        ]
    },
    {
        id: '6',
        imgSrc: '/assets/gallery/walkingpath/WP-1.png',
        title: 'New Walking Path',
        description: 'New Walking Path at Pennsylvania Meditation Center',
        category: 'Structure',
        relatedImages: [
           '/assets/gallery/walkingpath/WP-2.png',
           '/assets/gallery/walkingpath/WP-3.png',
           '/assets/gallery/walkingpath/WP-4.png',
           '/assets/gallery/walkingpath/WP-5.png',
           '/assets/gallery/walkingpath/WP-6.png',
        ]
    }
];

const GalleryCarousel = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredGallery = galleryData.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleItemClick = (item: GalleryItem) => {
        setSelectedItem(item);
    };
    
    const handleBackToGallery = () => {
        setSelectedItem(null);
    };
    
    // If an item is selected, show the detailed view
    if (selectedItem) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
                <div className="container mx-auto">
                    <button 
                        onClick={handleBackToGallery}
                        className="mb-6 flex items-center text-green-700 hover:text-green-900 transition-colors"
                    >
                        <ArrowLeft className="mr-2" /> Back to Gallery
                    </button>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="w-full h-96 relative overflow-hidden rounded-2xl shadow-lg">
                                <Image 
                                    src={selectedItem.imgSrc}
                                    alt={selectedItem.title}
                                    fill
                                    objectFit="cover"
                                    className="rounded-2xl"
                                />
                            </div>
                            <div className="mt-6">
                                <h2 className="text-4xl font-light text-emerald-800 mb-4">
                                    {selectedItem.title}
                                </h2>
                                <p className="text-green-700 mb-4">
                                    {selectedItem.description}
                                </p>
                                {selectedItem.category && (
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        {selectedItem.category}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-light text-emerald-700 mb-6">
                                Related Images
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {selectedItem.relatedImages.slice(0, 9).map((img, index) => (
                                    <div key={index} className="relative h-32 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
                                        <Image 
                                            src={img}
                                            alt={`Related ${selectedItem.title} ${index + 1}`}
                                            fill
                                            objectFit="cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    // Settings for the slider component - updated to show 4 slides
    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    
    // Main gallery carousel view
    return (
        <div 
            id="gallery" 
            className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-16"
        >
            <div className="relative mx-auto max-w-7xl sm:py-4 px-4 lg:px-8">
                <div className="sm:flex justify-between items-center mb-12">
                    <h3 className="text-emerald-800 text-4xl lg:text-5xl font-light flex items-center gap-4">
                        <Leaf className="w-10 h-10 text-green-600" />
                        Meditation Gallery
                    </h3>
                    <div className="flex items-center mt-4 sm:mt-0">
                        <div className="relative mr-4">
                            <input 
                                type="text"
                                placeholder="Search gallery..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 rounded-full border border-green-200 focus:ring-2 focus:ring-green-300 transition-all"
                            />
                            <Search 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" 
                                size={18}
                            />
                        </div>
                        <Link href={'/Gallery/galleryPage'} className="text-green-700 hover:text-green-900 text-lg font-medium transition-colors">
                            View All&nbsp;&gt;
                        </Link>
                    </div>
                </div>

                <Slider {...settings}>
                    {filteredGallery.map((item) => (
                        <div key={item.id} className="px-2">
                            <div 
                                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                                onClick={() => handleItemClick(item)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                
                                <div className="relative h-72 w-full">
                                    <Image 
                                        src={item.imgSrc} 
                                        alt={item.title} 
                                        fill
                                        objectFit="cover"
                                        className="rounded-2xl"
                                    />
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="bg-black bg-opacity-40 p-3 rounded-lg backdrop-blur-sm">
                                        <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                                        <p className="text-sm opacity-90 mb-2 line-clamp-2">{item.description}</p>
                                        {item.category && (
                                            <span className="inline-block bg-green-500/60 px-2 py-1 rounded-full text-xs">
                                                {item.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                
                {filteredGallery.length === 0 && (
                    <div className="text-center text-green-700 mt-12">
                        No gallery items found
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryCarousel;