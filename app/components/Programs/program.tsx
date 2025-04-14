"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// PROGRAM DATA
interface ProgramType {
    name: string;
    imgSrc: string;
    description: string;
    highlights: string[];
}

const programData: ProgramType[] = [
    {
        name: 'Vipassana Meditation Class & Dhamma Talk',
        imgSrc: '/assets/programs/dhammatalk.png',
        description: ' The session begins with metta chanting to develop lovingkindness, compassion, altruistic joy, and equanimity. This is followed by insight meditation, which helps us to recognize and to be aware of our true nature.',
        highlights: [
            'Each Thursday evening from 6 p.m. to 7:30 p.m',
            'EST followed by an hour-long Dhamma talk and discussion',
            'These classes are  offered free of charge', 
            'To join via zoom, please email phall621@gmail.com for information.',
            
        ]
    },
    {
        name: 'Mindfulness Meditation for Kids',
        imgSrc: '/assets/programs/kids.png',
        description: 'These classes help to teach children to become more aware and mindful, developing concentration and self-discipline. They also learn about the Four Dwellings, which are loving-kindness, compassion, altruistic joy, and equanimity.',
        highlights: [
            'Every Friday evening from 7 p.m. to 7:30 p.m',
            'EST beginning November 19, 2021', 
            'These classes are offered free of charge',
            'To join, please call Bhante at 814-954-9011 for information'
        ]
    },
    {
        name: 'Meditation/ Mindfulness Classes',
        imgSrc: '/assets/programs/program3.png',
        description: 'Find relief from stress, discover peacefulness, improve your mood and concentration, and develop resilience, compassion, and wisdom in your personal, family, and work life. Join Buddhist monk Bhante Chandrawansa as he guides you through timeless teachings of meditation and mindfulness with practical applications to modern life.',
        highlights: [
            'Every Monday from 7:00-8:00pm, beginning September 25, 2023',
            'At Bedford Church of the Brethren, 310 Donahue Manor Rd, Bedford, PA 15522',
            'Handicap-accessible fellowship hall', 
            'Bring a pillow, blanket/towel to sit and a water bottle',
            'Chairs available for those unable to sit on the floor',
            'Classes are free, donations welcome',
            'For more information: ven.chandrawansa@bhikkhu.net or 814-954-9011'
        ]
    },
    {
        name: 'Dharma Classes for Kids',
        imgSrc: '/assets/programs/program4.png',
        description: 'We warmly invite your child or young ones to join our free Dharma classes for kids on Zoom. Classes include Jataka Tales, stories from life of the Buddha, and Dharma discussions to help children learn Buddhist teachings in an engaging and age-appropriate way.Recommended books: "Morals in the Life Story of the Buddha: Stories and Activities for Youth" and "Stories of the Buddha" by M. Lisa Buschmann',
        highlights: [
            'Held on the first and third Sunday of each month',
            'Beginning at 10 a.m. EST',
            'Taught by Dharma teacher Lisa Buschmann',
            'Free Buddhist stories available at https://DharmaKids.org',
            'Classes are offered free of charge',
            'For more information, please email mlbuschmann@gmail.com'
        ]
    }
];

interface ProgramSectionProps {
    showAll?: boolean;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ showAll = false }) => {
    // Show only first 2 items on homepage, or all items on programs page
    const displayPrograms = showAll ? programData : programData.slice(0, 2);
    
    return (
        <div
             id="programs" 
             className="relative py-16 bg-gradient-to-b from-green-50 to-white"
        >  
            <div className="mx-auto max-w-2xl lg:max-w-7xl px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl text-center font-semibold mb-12 text-green-800">
                    Our Programs
                </h2>

                <div className="grid gap-16">
                    {displayPrograms.map((program, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-8 items-center rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                            {/* Image Column */}
                            <div className="bg-green-100 p-6 rounded-lg">
                                <div className="relative rounded-lg overflow-hidden">
                                    <Image
                                        src={program.imgSrc}
                                        alt={program.name}
                                        width={600}
                                        height={400}
                                        className="mx-auto object-cover w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="p-8 space-y-6">
                                <h3 className="text-2xl font-semibold text-green-700 mb-4">
                                    {program.name}
                                </h3>

                                <p className="text-lg text-stone-700 mb-6">
                                    {program.description}
                                </p>

                                <div className="space-y-4">
                                    {program.highlights.map((highlight, hIndex) => (
                                        <div 
                                            key={hIndex} 
                                            className="flex items-center space-x-3 text-stone-600"
                                        >
                                            <CheckCircleIcon className="h-6 w-6 text-green-500" />
                                            <span className="text-lg">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                               
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Show "View All Programs" button on homepage */}
                {!showAll && (
                    <div className="text-center mt-12">
                        <Link 
                            href="/programs/programsPage" 
                            className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-800 transition-colors duration-300"
                        >
                            View All Programs
                        </Link>
                    </div>
                )}
            </div>
        </div>    
    );
};

export default ProgramSection;