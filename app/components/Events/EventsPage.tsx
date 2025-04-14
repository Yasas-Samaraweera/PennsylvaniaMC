"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Event Interface
interface Event {
    id: number;
    title: string;
    description: string | React.ReactNode;
    date: string;
    time: string;
    location: string;
    imgSrc: string;
    featured?: boolean;
}

// Sample Events Data
const eventsData: Event[] = [
    {
        id: 1,
        title: 'A Mindful Morning Fundraising Event',
        description: 'Email Beth Kedra for Registrations: bethked28@gmail.com Hosted by Bhante Chandrawansa, Beth Kedra, and Matthew',
        date: 'April 26, 2025',
        time: '9:00 AM - 11:00 AM',
        location: ' St. John’s Lutheran Church, 1802 Skippack Pk, Blue Bell, PA 19422.',
        imgSrc: '/assets/event/event1,2.png',
        featured: true
    },
    {
        id: 2,
        title: 'Mindfulness Meditation Workshop',
        description: 'Register by March 18th to reserve your spot.Conducted by Bhante Chandra.',
        date: 'March 23, 2025',
        time: '2:30 PM - 5:30 PM',
        location: 'Bedford Church of the Brethern, 310 Donahue Manor Road, Bedford, PA 15522.',
        imgSrc: '/assets/event/event1,2.png',
        featured: true
    },
    {
        id: 3,
        title: 'Katina Robe Offering Ceremony-2024',
        description: (
            <>
                Please RSVP by 23rd October 2024 using this{' '}
                <a 
                    href="https://docs.google.com/spreadsheets/u/0/d/1SEVN6RZX5AedchoQjteHb21Bw8kDo8SGDGOYrfiYn8s/htmlview" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#4CAF50] font-medium hover:underline"
                    onClick={(e) => e.stopPropagation()} 
                >
                    LINK
                </a>
                . Conducted by Bhante Chandrawansa.
            </>
        ),
        date: 'October 26, 2024',
        time: '10:00 AM - 1:00 PM',
        location: 'Pennsylvania Meditation Center, 1999 South Valley Rd., Crystal Spring, PA 15536.',
        imgSrc: '/assets/event/event3.png',
        featured: true
    },
    {
        id: 4,
        title: 'Sambhudda Wandana ',
        description: 'Conducted by Venerable Nagawea Rahula',
        date: 'September 21, 2024',
        time: '4:00 PM ',
        location: 'Pennsylvania Meditation Center, 1999 South Valley Rd., Crystal Spring, PA 15536.',
        imgSrc: '/assets/event/event4.png',
        featured: true
    },
    {
        id: 5,
        title: 'Summer Camp (Yoga, stories and Dhamma discussions, guided meditation, and fun outdoor games)',
        description: 'Join us for a free, day-long spiritual gathering filled with mindfulness, movement, and meaningful conversation. The event will feature guided meditation led by Bhante Chandrawansa, gentle yoga with Christi Bonello, and inspiring Dhamma stories and discussion by Lisa Buschmann. Lunch will be provided, and we kindly encourage participants to wear comfortable clothing to fully enjoy the experience. All are welcome to this peaceful and enriching event.',
        date: 'September 5, 2024',
        time: '10:00 AM - 5:00 PM',
        location: 'Pennsylvania Meditation Center, 1999 South Valley Rd., Crystal Spring, PA 15536.',
        imgSrc: '/assets/event/event5.png',
    },{
        id: 26,
        title: 'Practice of Mindfulness and Potluck Meeting – July 13th 2024',
        description: 'Conducted by Bhante Chandrawansa.Information: Potluck dinner, bring a dish to share with everyone.',
        date: 'July 13, 2024',
        time: '2:00 PM - 6:00 PM',
        location: 'Pennsylvania Meditation Center, 1999 South Valley Rd., Crystal Spring, PA 15536.',
        imgSrc: '/assets/event/event26.png',
    },
    {
        id: 6,
        title: 'Silent Meditation Retreat-2024',
        description: 'Experience the healing power of sound vibrations with ancient instruments and vocal toning.',
        date: 'June 28,29 and 30 2024',
        time: ' 4:00 PM on the 28th - 4:00 PM on the 30th',
        location: 'Cliff House, 4H Camp, Riverhead, NY 11901.',
        imgSrc: '/assets/event/event6.png',
    },
    {
        id: 7,
        title: 'All Day Meditation Retreat-2024',
        description: 'We kindly request all participants to dress in simple, comfortable attire—preferably all white—to honor the theme of simplicity and mindfulness throughout the day. The event will be conducted by Bhante Chandrawansa, offering a serene space for meditation and reflection. To help us prepare, please RSVP by texting 1-814-617-0452 and confirm your attendance. We look forward to sharing this peaceful experience with you.',
        date: 'June 02, 2024',
        time: '  9:00 AM  4:00 PM',
        location: 'Pennsylvania Meditation Center, 1999 South Valley Rd., Crystal Spring, PA 15536.',
        imgSrc: '/assets/event/event7.png',
    },
    {
        id: 8,
        title: 'Vesak Ceremony-2024 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'May 19, 2024',
        time: '10:00 AM -12:00 PM',
        location: 'Pennsylvania Meditation Center.',
        imgSrc: '/assets/event/event8.png',
        featured: true
    },
    {
        id: 9,
        title: 'Katina Robe Offering Ceremony-2023 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'October 08, 2023',
        time: '10:00 AM ',
        location: 'Pennsylvania Meditation Center, 1999 South Valley Rd., Crystal Spring, PA 15536.',
        imgSrc: '/assets/event/event9.png',
        featured: true
    },
    {
        id: 10,
        title: 'Celebration of Lord Buddha’s Birthday, Mark his Enlightenment and Passing Away Ceremony-2023 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'May 28, 2023',
        time: '10:00 AM - 12:00 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event10.png',
        featured: true
    },
    {
        id: 11,
        title: 'Katina Robe Offering Ceremony-2022 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'October 23, 2022',
        time: '10:00 AM',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event11.png',
        featured: true
    },
    {
        id: 12,
        title: 'Buddanussathi Bhawana Program-August 27th, 2022',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'September 24, 2022',
        time: '3:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event12.png',
        featured: true
    },
    {
        id: 13,
        title: 'Practice of Mindfulness and Potluck Meeting -2022 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'September 17, 2022',
        time: '2:00 PM - 6:00 PM ',
        location: '1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event13.png',
        featured: true
    },
    {
        id: 14,
        title: 'Buddanussathi Bhawana Program-August 27th, 2022 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'August 27, 2022',
        time: '5:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event14.png',
        featured: true
    },
    {
        id: 15,
        title: 'Buddanussathi Bhawana Program-July 30th, 2022 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'July 30, 2022',
        time: '5:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event15.png',
        featured: true
    },
    {
        id: 16,
        title: 'Meditation at The Enchanted Moon in Johnstown, PA ',
        description: 'Conducted by Bhante Chandrawansa.Meditation and Modern Buddhism class with Buddhist monk Bhante Chandrawansa. Learn practical ways to feel empowered to change yourself and change the world. Classes include guided meditations, teachings and practical tools to live a more happy and meaningful life. Learn practical ways to feel empowered to change yourself and change the world. These classes include guided meditations, a short teaching and practical inner tools to apply to your daily life. The focus is on solutions to problems in daily life, authentic optimism and the development of altruistic love and compassion. Please bring a pillow, blanket or towel to class to sit on. Stay hydrated and bring a bottle of water. Chairs will be provided for those unable to sit on the floor. Class ends with discussion so bring your questions about meditation, spirituality, Buddhism and or life.',
        date: 'July 13, 2023',
        time: '6:00 PM - 7:00 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event16.png',
        featured: true
    },
    {
        id: 17,
        title: 'Buddanussathi Bhawana Program-June 26th, 2022',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'June 26, 2022',
        time: '5:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event17.png',
        featured: true
    },
    {
        id: 18,
        title: 'One Day Meditation Program  – Starting June until September 2022 ',
        description: 'Conducted by Bhante Chandrawansa, 1st session – June 19th 2022 from 9:00AM to 4:30PM  2nd session – July 24th 2022 from 9:00AM to 4:30PM  3rd session – August 21st 2022 from 9:00AM to 4:30PM  4th session – September 18th 2022 from 9:00AM to 4:30PM ',
        date: 'June 19,July 24,August 21 and September 18, 2022',
        time: 'every day,9:00 AM - 4:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '',
        featured: true
    },
    {
        id: 19,
        title: 'Chanting the Qualities of Buddha – Starting in June until September 2022 ',
        description: 'Conducted by Bhante Chandrawansa,1st session – June 26th 2022 from 6:30PM to 7:30PM  2nd session – July 30th 2022 from 5:30PM to 7:30PM  3rd session – August 27th 2022 from 5:30PM to 7:30PM  4th session – September 25th 2022 from 5:30PM to 7:30PM ',
        date: 'June 26,July 30,August 27 and September 25, 2022',
        time: 'every day,6:30 PM - 7:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event10.png',
        featured: true
    },
    {
        id: 20,
        title: 'Vesak Ceremony-2022 ',
        description: 'Conducted by Bhante Chandrawansa',
        date: 'May 29, 2022',
        time: '5:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '/assets/event/event20.png',
        featured: true
    },
    {
        id: 21,
        title: 'Potluck, Meditation & Dhamma Discussion – April 24th',
        description: '',
        date: 'April 24, 2023',
        time: '9:00 AM - 4:30 PM ',
        location: 'Pennsylvania Meditation Center,1999 S Valley Rd,Crystal Spring,PA 15536',
        imgSrc: '',
        featured: true
    },
    {
        id: 22,
        title: 'Sinhala New Year Event-2022 ',
        description: '',
        date: 'April 14, 2022',
        time: '10:30 AM  ',
        location: 'Pennsylvania Meditation Center',
        imgSrc: '',
        featured: true
    },
    {
        id: 23,
        title: 'Pennsylvania Meditation Center’s New Year Celebration -January 01st 2022',
        description: '',
        date: 'January 01, 2022',
        time: '10:30 AM ',
        location: 'Pennsylvania Meditation Center',
        imgSrc: '',
        featured: true
    },
    {
        id: 24,
        title: 'Katina Puja and Dana-2021',
        description: '',
        date: 'November 06, 2021',
        time: '10:30 AM ',
        location: 'Pennsylvania Meditation Center',
        imgSrc: '/assets/event/event24.png',
        featured: true
    },
    {
        id: 25,
        title: 'The Samadhi Buddha Statue Opening Ceremony',
        description: 'The new Samadhi Buddha statue, sponsored by Yasith Nanayakkara, his wife Pavithra Wijethunga and son Thisen Nanayakkara, along with others, was unveiled and established with the arrival of the Bhikkhu Sangha on Saturday, September 25, 2021. May this wholesome offering be a cause for all of them to attain the bliss of Nibbana in this very Gauthama Buddha Sasana!May this also be a cause for all the donors and volunteers to attain Nibbana in this Gauthama Buddha Sasana! May this wonderful meritorious action lead all living beings to peace and happiness!!!',
        date: 'September 25, 2021',
        time: '10:30 AM ',
        location: 'Pennsylvania Meditation Center',
        imgSrc: '/assets/event/event25.png',
        featured: true
    }

    // Add more events as needed
];

interface EventsPageProps {
    isHomePage?: boolean;
    showAllEvents?: boolean;
}

const EventsPage: React.FC<EventsPageProps> = ({ isHomePage = false, showAllEvents = false }) => {
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [imageFullScreen, setImageFullScreen] = useState(false);

    // Filter and search events
    useEffect(() => {
        let result = eventsData;

        // For home page, show only 4 events (featured ones first)
        if (isHomePage) {
            // Get featured events first
            const featuredEvents = result.filter(event => event.featured);
            // If fewer than 4 featured events, add non-featured events
            if (featuredEvents.length < 4) {
                const nonFeaturedEvents = result.filter(event => !event.featured);
                result = [...featuredEvents, ...nonFeaturedEvents].slice(0, 4);
            } else {
                result = featuredEvents.slice(0, 4);
            }
        } 
        // For the all events page with search functionality
        else if (searchTerm) {
            result = result.filter(event => {
                const descriptionText = typeof event.description === 'string' 
                    ? event.description.toLowerCase() 
                    : ''; // Empty string for ReactNode descriptions in search
                
                return event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    descriptionText.includes(searchTerm.toLowerCase());
            });
        }

        setFilteredEvents(result);
    }, [searchTerm, isHomePage, showAllEvents]);

    // Function to handle clicking on an event
    const handleEventClick = (event: Event) => {
        setSelectedEvent(event);
        setImageFullScreen(false);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedEvent(null);
        setImageFullScreen(false);
    };

    // Function to toggle image full screen mode
    const toggleImageFullScreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setImageFullScreen(!imageFullScreen);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f5f0] to-[#e6f2e6] py-16">
            <div className="container mx-auto px-4 xl:px-32">
                {/* Header with Search (only show search on full events page) */}
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl font-extralight text-[#2c5e2e] mb-4">
                        {isHomePage ? 'Upcoming ' : 'All '}
                        <span className="font-bold text-[#1a3d1a]">Events</span>
                    </h1>
                    <p className="text-[#3a6f3a] max-w-2xl mx-auto mb-6">
                        Discover transformative experiences that nurture your mind, body, and spirit.
                    </p>
                    
                    {/* Search Input - Only show on full events page (not homepage) */}
                    {!isHomePage && (
                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                <input 
                                    type="text"
                                    placeholder="Search events..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 rounded-full border-2 border-[#a0d2a0] focus:outline-none focus:ring-2 focus:ring-[#4CAF50] text-[#2c5e2e] transition-all duration-300"
                                />
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4CAF50]" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Events Grid */}
                <AnimatePresence>
                    {filteredEvents.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                            {filteredEvents.map((event, index) => (
                                <motion.div 
                                    key={event.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: index * 0.1 
                                    }}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                                    onClick={() => handleEventClick(event)}
                                >
                                    {/* Event Image */}
                                    <div 
                                        className="h-64 bg-cover bg-center relative"
                                        style={{
                                            backgroundImage: `url(${event.imgSrc})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'grayscale(20%) brightness(0.9)'
                                        }}
                                    >
                                        
                                    </div>

                                    {/* Event Details */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-[#1a3d1a] mb-3">
                                            {event.title}
                                        </h3>
                                        <div className="text-[#3a6f3a] mb-4 space-y-2 text-sm">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4CAF50]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {event.date}
                                            </p>
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4CAF50]" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                {event.time}
                                            </p>
                                        </div>
                                        <p className="text-[#3a6f3a] mb-4 text-sm line-clamp-3">
                                            {event.description}
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#4CAF50] font-semibold">
                                                View Details →
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 text-[#2c5e2e]"
                        >
                            <p className="text-3xl mb-4">No events found</p>
                            <p className="mb-6 text-[#3a6f3a]">Try a different search or category</p>
                            <button 
                                onClick={() => {
                                    setSearchTerm('');
                                }}
                                className="bg-[#2c5e2e] text-white px-6 py-3 rounded-lg hover:bg-[#1a3d1a] transition-colors"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* View More Events Button - Only on home page */}
                {isHomePage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <Link href="/Events/allEventsPage" className="inline-block bg-[#2c5e2e] text-white px-8 py-4 rounded-full hover:bg-[#1a3d1a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 text-lg font-medium">
                            View All Events
                        </Link>
                    </motion.div>
                )}
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Enhanced Event Image Banner */}
                            <div className="relative">
                                {/* Main Image Container - With scrollable functionality */}
                                <div 
                                    className={`${imageFullScreen ? 'h-screen max-h-[70vh]' : 'h-64 md:h-96'} w-full relative overflow-hidden transition-all duration-300`}
                                >
                                    {/* Scrollable Image */}
                                    <div 
                                        className={`w-full h-full ${imageFullScreen ? 'overflow-y-auto' : ''}`}
                                        onClick={toggleImageFullScreen}
                                    >
                                        <div
                                            className={`bg-cover bg-center relative w-full ${imageFullScreen ? 'h-auto min-h-full' : 'h-full'}`}
                                            style={{
                                                backgroundImage: `url(${selectedEvent.imgSrc})`,
                                                backgroundSize: imageFullScreen ? 'contain' : 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: imageFullScreen ? 'no-repeat' : '',
                                                filter: 'grayscale(20%) brightness(0.9)'
                                            }}
                                        >
                                            {/* This div ensures the background image has height when in fullscreen mode */}
                                            {imageFullScreen && <div className="w-full pb-[100%]"></div>}
                                        </div>
                                    </div>

                                    {/* Overlay with accent color */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a3d1a] via-transparent to-black opacity-50 pointer-events-none"></div>

                                    {/* Image Pattern Overlay */}
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTkuOTg4IDAgMCA1OS45OTQgMCA2MCA2MCA2MFYwek0yNCAzMGwzMC0zMCAwIDMweiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-40 pointer-events-none"></div>
                                    
                                    {/* Zoom/Expand icon */}
                                    <button
                                        onClick={toggleImageFullScreen}
                                        className="absolute bottom-4 left-4 bg-white bg-opacity-30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-opacity-40 transition-all duration-300 shadow-md border border-white border-opacity-20 z-10"
                                        aria-label={imageFullScreen ? "Exit fullscreen" : "View fullscreen"}
                                    >
                                        {imageFullScreen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* Close button */}
                                    <button 
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 bg-white bg-opacity-30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-opacity-40 transition-all duration-300 shadow-md border border-white border-opacity-20 z-10"
                                        aria-label="Close modal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Title Card - Positioned to overlap the image but only in normal mode */}
                                {!imageFullScreen && (
                                    <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
                                        <div className="mx-8 bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#4CAF50]">
                                            <div className="flex items-center">
                                                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3d1a]">{selectedEvent.title}</h2>
                                                <div className="ml-auto bg-[#e6f3e6] p-2 rounded-full text-[#4CAF50]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            {/* Event Details - Only show when not in fullscreen image mode */}
                            {!imageFullScreen && (
                                <div className="p-8 pt-16">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="md:col-span-2">
                                            <h3 className="text-xl font-semibold text-[#1a3d1a] mb-4 flex items-center">
                                                <span className="inline-block w-1 h-6 bg-[#4CAF50] mr-3 rounded"></span>
                                                About This Event
                                            </h3>
                                            <p className="text-[#3a6f3a] mb-6 leading-relaxed">
                                                {selectedEvent.description}
                                            </p>
                                        </div>
                                        
                                        <div className="bg-[#f8fcf8] rounded-xl p-6 shadow-sm border border-[#e6f3e6]">
                                            <h3 className="text-xl font-semibold text-[#1a3d1a] mb-4 flex items-center">
                                                <span className="inline-block w-1 h-6 bg-[#4CAF50] mr-3 rounded"></span>
                                                Event Details
                                            </h3>
                                            
                                            <div className="space-y-5">
                                                <div className="flex items-start">
                                                    <div className="bg-[#e6f3e6] p-2 rounded-lg mr-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4CAF50]" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-[#1a3d1a]">Date</p>
                                                        <p className="text-[#3a6f3a]">{selectedEvent.date}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-start">
                                                    <div className="bg-[#e6f3e6] p-2 rounded-lg mr-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4CAF50]" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-[#1a3d1a]">Time</p>
                                                        <p className="text-[#3a6f3a]">{selectedEvent.time}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-start">
                                                    <div className="bg-[#e6f3e6] p-2 rounded-lg mr-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4CAF50]" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9l-4.24 4.25a1 1 0 01-1.42 0L5.05 13.9a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-[#1a3d1a]">Location</p>
                                                        <p className="text-[#3a6f3a]">{selectedEvent.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Home Page Events Component - For showing 4 events on the home page
export const HomePageEvents: React.FC = () => {
    return <EventsPage isHomePage={true} />;
};

export default EventsPage;