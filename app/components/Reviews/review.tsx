"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    Address: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Shelly H",
        Address: ' Bedford, PA',
        comment: 'Classes help me stay focused for the week on my goals of taking care of my mind, body, spirit, and actions. They have been especially helpful in my journey to overcome significant health struggles and stressors of daily life. Bhante has a special way of teaching, and the class discussions are thought-provoking, inspiring, and supportive. What a nice feeling to be part of such a kind and conscientious group!',
        imgSrc: '/assets/Reviews/profile.svg',
    },
    {
        name: "Patricia H",
        Address: 'Orbisonia, PA',
        comment: 'Meditation and learning the Dhamma are life-changing.  For me, these teachings have shown me great truths.  I understand that suffering is part of what it means to be human, but through meditation and the Dhamma I discovered that my wrong perceptions were only increasing my suffering.  As I am beginning to understand the concept of impermanence and non-self, I am free to enjoy this life even more because illusions are no longer clouding my vision',
        imgSrc: '/assets/Reviews/profile.svg',
    },
    {
        name: "Bridgit M",
        Address: ' McConnellsburg, PA',
        comment: 'I love having the opportunity to meditate with the PA Meditation Center. I have found that meditation helps with calming my brain chatter, reducing my stress, releasing any anxiety and especially helping to support my community with kind thoughts and loving expressions. Keep up the great work!',
        imgSrc: '/assets/Reviews/profile.svg',
    },
    {
        name: "Beth K",
        Address: 'Blue Bell',
        comment: 'I found these meditation sessions when I was struggling mentally and physically. I wasn’t showing up for myself, or my friends and family, in a healthy way. It was as if I was living my life from my head, instead of from my heart… But that has changed because of these sessions. Peace is growing in and around me because of the teachings and the practice of meditation. And I can hear my heart again.',
        imgSrc:'/assets/Reviews/profile.svg',
    },
    {
        name: "Jet W",
        Address: 'Mercersburg PA',
        comment: 'The pandemic was full of surprises for me. If you told me that I could participate in a meditation class from my spare bedroom a year ago, I would have been puzzled. But through zoom and the PA Meditation Center along with its helpful participants this is now possible. I had always wanted to learn about meditation and this has been a great way to “get your toes in the water” and try to learn more. Meditation has been a process of engagement, and I find with the group, I am able to stick to it longer. The overall practice has been helpful in reducing anxiety, and has retaught me to be a good listener at home and work.',
        imgSrc: '/assets/Reviews/profile.svg',
    },
    {
        name: "Maria T",
        Address: 'Chambersburg PA',
        comment: 'I have been practicing meditation and learning about Buddhist philosophy for the last 2.5 years with the PA Meditation Center. Being more mindful of the present moment, and aware of my mind’s ever-changing thoughts and feelings is just one of the benefits that these teachings have brought to my life since I began this practice. With this meditation practice, it provides a resource of also being more mindful of how we perceive our experiences and recenter by coming back to our breath. This is useful not just when quietly sitting, but when it is hard to sleep, the body is under stress, or before quickly reacting to circumstances around us. Buddhist philosophy and learning the Dhamma has granted me a better understanding and acceptance of impermanent nature of my human experience, my mind, and the world around me. The Dhamma has supported me to cultivate more compassion, patience, tolerance, and generosity. Also, I have met a wonderful group of people in our weekly meditation and Dhamma talks, and through the PA Meditation Center. It has been a truly nourishing, fascinating, and inspiring journey and I am so grateful for the experience with the Dhamma!',
        imgSrc: '/assets/Reviews/profile.svg',
    },
    {
        name: "Sandra B",
        Address: ' Austin, TX',
        comment: 'I was fairly new to Buddhism and was seeking help in my meditation practice to have a better life. I gradually found that making meditation a daily practice brought peacefulness to my relationships with myself and loved ones. I received such meaningful and life changing teachings. The Dhamma became clearer to my understanding even though its beauty is most often mysterious and difficult to grasp. Most importantly, I’ve observed that my suffering, discontentment and anger have diminished and mostly disappeared. By following Dhamma my life has a quality of calm and happiness, unknown to me heretofore. The four Noble Truths, the Eightfold Path, and several loving kindness chants occupy my mind most of the time. I am a 68-year-old woman who is so glad to experience the emotional, spiritual and physical benefits of the Dhamma teachings. May all those who make these classes available be blessed.',
        imgSrc: '/assets/Reviews/profile.svg',
    }
]

export default class TestimonialSlider extends Component {
    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 800,
            autoplaySpeed: 5000,
            cssEase: "ease-in-out",
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <section 
                id="Reviews" 
                className="py-6 bg-slate-50"
            >  
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-3">Reviews</h2>
                        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
                        
                    </div>
                    
                    <Slider {...settings}>
                        {postData.map((item, index) => (
                            <div key={index} className="px-3 py-2">
                                <div className="bg-white rounded-lg shadow-sm p-6 h-full transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-4">
                                            <Image 
                                                src={item.imgSrc} 
                                                alt={`${item.name} avatar`} 
                                                width={60} 
                                                height={60} 
                                                className="rounded-full border-2 border-indigo-100"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-slate-800">{item.name}</h4>
                                            <p className="text-sm text-slate-500">{item.Address}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon 
                                                key={i} 
                                                className={i < 4 ? "text-amber-400 w-5 h-5" : "text-slate-300 w-5 h-5"} 
                                            />
                                        ))}
                                    </div>
                                    
                                    <blockquote className="text-slate-600 italic mb-2">
                                        {item.comment}
                                    </blockquote>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}
