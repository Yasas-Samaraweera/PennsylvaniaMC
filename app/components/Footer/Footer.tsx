import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'https://www.facebook.com/pameditation/www.facebook.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 18
    },
    {
        imgSrc: '/assets/footer/youtube2.svg',
        link: 'https://www.youtube.com/',
        width: 18
    },
]

const products: ProductType[] = [
    {
        id: 1,
        section: "",
        link: ['', '', '', '', ''],
    },
    {
        id: 2,
        section: "",
        link: ['', '', '', '', '']
    },
    {
        id: 3,
        section: "",
        link: ['', '', '', '', '']
    }
]

const footer = () => {
    return (
        <div 
            id="Footer" 
            className="relative bg-cover bg-center py-5"
            style={{
                backgroundImage: "url('/assets/gallery/backgroungd.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        > 
            <div className="mx-auto max-w-2xl sm:pt-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-2 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
                    {/* COLUMN-1 */}
                    <div className='sm:col-span-6 lg:col-span-5 flex flex-col items-center'>
                        {/* Logo - Centered */}
                        <div className="flex justify-center">
                            <Image src="/assets/logo/logo.png" alt="logo" width={240} height={80} />
                        </div>
                        <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-4 mb-4 lg:mb-6 text-center'></h3>
                        
                        {/* Buttons container - centered with appropriate size */}
                        <div className="flex justify-center w-full mb-6">
                            {/* Join Community Button */}
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpk2MWrt1iuFmjtbl2vsAKHIxJ9vWzlZFYq_zzSN8KsQJAgA/viewform">
                                <button className="bg-green-700 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg flex items-center">
                                    <span>Join Community</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        
                        {/* Social links - centered with reduced height */}
                        <div className='flex gap-4 justify-center mb-6'>
                            {socialLinks.map((items, i) => (
                                <Link href={items.link} key={i}>
                                    <div className="bg-green-200 h-10 w-10 shadow-md rounded-full flex items-center justify-center footer-icons hover:bg-green-500 transition-all duration-300">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={items.width} className="sepiaa" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CLOUMN-2/3/4 */}
                    {products.map((product) => (
                        <div key={product.id} className="sm:col-span-2 text-center">
                            <p className="text-green-800 text-lg font-medium mb-6">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-4'>
                                        <Link href="/" className="text-green-700 hover:text-green-500 text-base font-normal space-links transition-all duration-300">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* All Rights Reserved */}
                <div className='py-6 md:flex items-center justify-between border-t border-t-green-200 mt-4'>
                    {/* Copyright text */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h4 className='text-green-800 text-sm font-normal'>© Copyright 2024 · Pennsylvania Meditation Center</h4>
                    </div>
                    
                    <div className="flex gap-5 justify-center md:justify-start">
                        <h4 className='text-green-800 text-sm font-normal hover:text-green-600 transition-all duration-300'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-green-600 opacity-25 w-0.5"></div>
                        <h4 className='text-green-800 text-sm font-normal hover:text-green-600 transition-all duration-300'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default footer;
