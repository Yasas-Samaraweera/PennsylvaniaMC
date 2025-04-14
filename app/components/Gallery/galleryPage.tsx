"use client"
import React, { useState } from 'react';
import { Leaf, Search } from 'lucide-react';

interface GalleryItem {
    id: string;
    imgSrc: string;
    title: string;
    description: string;
    category: string;
    relatedImages: string[];
}

const galleryData: GalleryItem[] = [
    {
        id: '1',
        imgSrc: '/assets/gallery/Katina2023/Katina1.png',
        title: '“Katina” 2023',
        description: '“Katina” 2023 at Pennsylvania Meditation Center',
        category: '',
        relatedImages: [
            '/assets/gallery/Katina2023/Katina2.png',
            '/assets/gallery/Katina2023/Katina3.png',
            '/assets/gallery/Katina2023/Katina4.png',
            '/assets/gallery/Katina2023/Katina5.png',
            '/assets/gallery/Katina2023/Katina6.png',
            '/assets/gallery/Katina2023/Katina7.png',
            '/assets/gallery/Katina2023/Katina8.png',
            '/assets/gallery/Katina2023/Katina9.png',
            '/assets/gallery/Katina2023/Katina10.png',
           
        ]
    },
    {
        id: '2',
        imgSrc: '/assets/gallery/potluck/Potluck1.png',
        title: '"Practice of Mindfulness and Potluck Meeting” 2023',
        description: '"Practice of Mindfulness and Potluck Meeting” 2023 at Pennsylvania Meditation Center',
        category: '',
        relatedImages: [
           '/assets/gallery/potluck/Potluck2.png', 
           '/assets/gallery/potluck/Potluck3.png', 
           '/assets/gallery/potluck/Potluck4.png',
           '/assets/gallery/potluck/Potluck5.png', 
           '/assets/gallery/potluck/Potluck6.png', 
           '/assets/gallery/potluck/Potluck7.png',
        ]
    },
    {
        id: '3',
        imgSrc: '/assets/gallery/vesak2022/Vesak1.png',
        title: '“Vesak” 2022',
        description: '“Vesak Ceremony” 2022 at Pennsylvania Meditation Center',
        category: '',
        relatedImages: [
            '/assets/gallery/vesak2022/Vesak2.png', 
           '/assets/gallery/vesak2022/Vesak3.png' ,
           '/assets/gallery/vesak2022/Vesak4.png',
           '/assets/gallery/vesak2022/Vesak5.png', 
           '/assets/gallery/vesak2022/Vesak6.png' ,
           '/assets/gallery/vesak2022/Vesak7.png',
           '/assets/gallery/vesak2022/Vesak8.png' ,
           '/assets/gallery/vesak2022/Vesak9.png',
        ]
    },
    {
        id: '4',
        imgSrc: '/assets/gallery/Katina21/Katina11.png',
        title: '“Katina” 2021',
        description: '“Katina” 2021 at Pennsylvania Meditation Center',
        category: 'Urban',
        relatedImages: [
            '/assets/gallery/katina21/Katina12.png', 
            '/assets/gallery/katina21/Katina13.png',
            '/assets/gallery/katina21/Katina14.png',
            '/assets/gallery/katina21/Katina15.png', 
            '/assets/gallery/katina21/Katina16.png',
            '/assets/gallery/katina21/Katina17.png',
            '/assets/gallery/katina21/Katina18.png', 
            '/assets/gallery/katina21/Katina19.png',
            '/assets/gallery/katina21/Katina110.png',
            '/assets/gallery/katina21/Katina112.png',
            
        ]
    },
    {
        id: '5',
        imgSrc: '/assets/gallery/samadhi/samadhi1.png',
        title: 'Samadhi Statue',
        description: 'Samadhi Statue at Pennsylvania Meditation Center',
        category: 'Urban',
        relatedImages: [
            
            '/assets/gallery/samadhi/samadhi2.png',
            '/assets/gallery/samadhi/samadhi3.png',
            '/assets/gallery/samadhi/samadhi4.png',
            '/assets/gallery/samadhi/samadhi5.png',
            '/assets/gallery/samadhi/samadhi6.png',
            '/assets/gallery/samadhi/samadhi7.png',
            '/assets/gallery/samadhi/samadhi8.png',
            '/assets/gallery/samadhi/samadhi9.png',
            '/assets/gallery/samadhi/samadhi10.png',
            '/assets/gallery/samadhi/samadhi11.png',
            '/assets/gallery/samadhi/samadhi12.png',
            '/assets/gallery/samadhi/samadhi13.png',
            '/assets/gallery/samadhi/samadhi14.png',
            '/assets/gallery/samadhi/samadhi15.png',
            '/assets/gallery/samadhi/samadhi16.png',
            
        ]
    },
    {
        id: '6',
        imgSrc: '/assets/gallery/walkingpath/WP-1.png',
        title: 'New Walking Path',
        description: 'New Walking Path at Pennsylvania Meditation Center',
        category: 'Urban',
        relatedImages: [
            
           '/assets/gallery/walkingpath/WP-2.png',
           '/assets/gallery/walkingpath/WP-3.png',
           '/assets/gallery/walkingpath/WP-4.png',
           '/assets/gallery/walkingpath/WP-5.png',
           '/assets/gallery/walkingpath/WP-6.png',
           '/assets/gallery/walkingpath/WP-7.png',
          
        ]
    },
    {
        id: '7',
        imgSrc: '/assets/gallery/katina2020/katina20-1.png',
        title: '“Katina” 2020',
        description: '“Katina” 2020 at Pennsylvania Meditation Center',
        category: 'Urban',
        relatedImages: [
            
           '/assets/gallery/katina2020/katina20-2.png',
          '/assets/gallery/katina2020/katina20-3.png',
          '/assets/gallery/katina2020/katina20-4.png',
          '/assets/gallery/katina2020/katina20-5.png',
          '/assets/gallery/katina2020/katina20-6.png',
          '/assets/gallery/katina2020/katina20-7.png',
        ]
    },
    {
        id: '8',
        imgSrc: '/assets/gallery/bawanaKuti/bavanaKuti12.png',
        title:'Construction of the Bhavana Kuti',
        description: 'Bhavana Kuti at Pennsylvania Meditation Center',
        category: 'Urban',
        relatedImages: [
            
        '/assets/gallery/bawanaKuti/bavanaKuti2.png',
        '/assets/gallery/bawanaKuti/bavanaKuti3.png',
        '/assets/gallery/bawanaKuti/bavanaKuti4.png',
        '/assets/gallery/bawanaKuti/bavanaKuti5.png',
        '/assets/gallery/bawanaKuti/bavanaKuti6.png',
        '/assets/gallery/bawanaKuti/bavanaKuti7.png',
        '/assets/gallery/bawanaKuti/bavanaKuti8.png',
        '/assets/gallery/bawanaKuti/bavanaKuti9.png',
        '/assets/gallery/bawanaKuti/bavanaKuti10.png',
        '/assets/gallery/bawanaKuti/bavanaKuti11.png',
        '/assets/gallery/bawanaKuti/bavanaKuti1.png',
        ]
    },
    
    {
        id: '9',
        imgSrc: '/assets/gallery/americanDhamma/supp8.png',
        title: 'Support for Sri Lankan School Children',
        description: 'American Dhamma Friends of PMC helped support Sri Lankan School Children',
        category: '',
        relatedImages: [
            '/assets/gallery/americanDhamma/supp2.png', 
            '/assets/gallery/americanDhamma/supp3.png', 
            '/assets/gallery/americanDhamma/supp4.png', 
            '/assets/gallery/americanDhamma/supp5.png', 
            '/assets/gallery/americanDhamma/supp6.png', 
            '/assets/gallery/americanDhamma/supp7.png', 
            '/assets/gallery/americanDhamma/supp1.png', 
            '/assets/gallery/americanDhamma/supp9.png', 
        ]
    },
    {
        id: '10',
        imgSrc: '/assets/gallery/sandwalk/Sand-Walk-9.png',
        title: 'Sand Walk Path Construction',
        description: 'Sand Walk at Pennsylvania Meditation Center',
        category: '',
        relatedImages: [
            '/assets/gallery/sandwalk/Sand-Walk-2.png',
            '/assets/gallery/sandwalk/Sand-Walk-3.png', 
            '/assets/gallery/sandwalk/Sand-Walk-4.png',
            '/assets/gallery/sandwalk/Sand-Walk-5.png',
            '/assets/gallery/sandwalk/Sand-Walk-6.png', 
            '/assets/gallery/sandwalk/Sand-Walk-7.png',
            '/assets/gallery/sandwalk/Sand-Walk-8.png',
            '/assets/gallery/sandwalk/Sand-Walk-1.png', 
        
           
        ]
    },
    {
        id: '11',
        imgSrc: '/assets/gallery/plant/plant1.png',
        title: 'Tree Planting Event',
        description: 'Tree Planting Event at Pennsylvania Meditation Center',
        category: '',
        relatedImages: [
            '/assets/gallery/plant/plant2.png',
            '/assets/gallery/plant/plant3.png',
            '/assets/gallery/plant/plant4.png',
            '/assets/gallery/plant/plant5.png',
            '/assets/gallery/plant/plant6.png',
            '/assets/gallery/plant/plant7.png',
            '/assets/gallery/plant/plant8.png',
            '/assets/gallery/plant/plant9.png',
            '/assets/gallery/plant/plant10.png',
            
           
        ]
    },
    {
        id: '12',
        imgSrc: '/assets/gallery/thripitaka/thripitaka9.png',
        title: 'Offering of The Great Thripitaka',
        description: 'Offering of The Great Thripitaka at Pennsylvania Meditation Center',
        category: '',
        relatedImages: [
        '/assets/gallery/thripitaka/thripitaka2.png',
        '/assets/gallery/thripitaka/thripitaka3.png',
        '/assets/gallery/thripitaka/thripitaka4.png',
        '/assets/gallery/thripitaka/thripitaka5.png',
        '/assets/gallery/thripitaka/thripitaka6.png',
        '/assets/gallery/thripitaka/thripitaka7.png',
        '/assets/gallery/thripitaka/thripitaka8.png',
        '/assets/gallery/thripitaka/thripitaka1.png',
            
           
        ]
    }


];

const GalleryPage: React.FC = () => {
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

    if (selectedItem) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
                <div className="container mx-auto">
                    <button 
                        onClick={handleBackToGallery}
                        className="mb-6 flex items-center text-green-700 hover:text-green-900 transition-colors"
                    >
                        ← Back to Gallery
                    </button>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <img 
                                src={selectedItem.imgSrc} 
                                alt={selectedItem.title}
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                            <div className="mt-6">
                                <h2 className="text-4xl font-light text-emerald-800 mb-4">
                                    {selectedItem.title}
                                </h2>
                                <p className="text-green-700 mb-4">
                                    {selectedItem.description}
                                </p>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    {selectedItem.category}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-light text-emerald-700 mb-6">
                                Related Images
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {selectedItem.relatedImages.map((img, index) => (
                                    <img 
                                        key={index}
                                        src={img} 
                                        alt={`Related ${selectedItem.title} ${index + 1}`}
                                        className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-light text-emerald-800 flex items-center gap-4">
                        <Leaf className="w-12 h-12 text-green-600" />
                        Meditation Gallery
                    </h1>
                    <div className="relative">
                        <input 
                            type="text"
                            placeholder="Search gallery..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded-full border border-green-200 focus:ring-2 focus:ring-green-300 transition-all"
                        />
                        <Search 
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" 
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredGallery.map((item) => (
                        <div 
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg">
                                <img 
                                    src={item.imgSrc} 
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <span className="text-xs bg-green-500/50 px-2 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredGallery.length === 0 && (
                    <div className="text-center text-green-700 mt-12">
                        No gallery items found
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;