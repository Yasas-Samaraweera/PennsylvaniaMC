import React from 'react';

interface PublicationType {
  id: number;
  title: string;
  pdfLink: string;
}

const BuddhistPublicationsPage: React.FC = () => {
  const publications: PublicationType[] = [
    { id: 1, title: 'Dependent Origination', pdfLink: 'https://www.pameditation.info/wp-content/uploads/2021/10/Dependent-Origination.pdf' },
    { id: 2, title: 'Development of Benevolence', pdfLink: 'https://www.pameditation.info/wp-content/uploads/2021/10/Development-of-Benevolence.pdf' },
    { id: 3, title: 'Metta Sutta', pdfLink: 'https://www.pameditation.info/wp-content/uploads/2021/10/Metta-Sutta.pdf' },
    { id: 4, title: 'Pali Words and Definitions', pdfLink: 'https://www.pameditation.info/wp-content/uploads/2021/10/Pali-Words-and-Definitions.pdf' },
    { id: 5, title: 'Six Sets of Six', pdfLink: 'https://www.pameditation.info/wp-content/uploads/2021/10/Six-Sets-of-Six.pdf' },
    { id: 6, title: 'Seven Enlightenment Factors', pdfLink: 'https://www.pameditation.info/wp-content/uploads/2021/11/Seven-Enlightenment-Factors.pdf' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Subtle top border */}
      <div className="h-2 bg-gradient-to-r from-green-300 via-green-500 to-green-300"></div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-green-800 mb-4">Buddhist Publications</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        {/* Meditation Information */}
        <div className="mb-16 flex flex-col md:flex-row gap-12 items-center bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-serif text-green-700 mb-4">Mindful Learning</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Because being mindful is key in learning how to meditate, we have included some 
              publications to assist you in your learning. One example is the <span className="font-semibold text-green-700">loving-kindness 
              meditation</span>. Loving-kindness, or <em className="italic text-green-600">metta</em>, as it is called in the Pali language, is 
              unconditional and all inclusive. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              We extend loving-kindness, making no judgments as to whether one <p>{"deserves"}</p> it or not. 
              We begin by extending that loving-kindness first to ourselves, and then to others, and, 
              finally, toward all living things. Meditation practice requires dedication, energy, and 
              perseverance, but the results are very beautiful and rewarding.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg border-4 border-green-100">
              <img
                src="/assets/resources/Publications.png"
                alt="Buddha statue"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Publications List */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
          <h2 className="text-3xl font-serif text-green-800 mb-8">Available Publications</h2>
          
          <ul className="space-y-6">
            {publications.map((pub) => (
              <li key={pub.id} className="flex items-center group">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-800 rounded-full font-bold mr-4 shadow-md group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {pub.id}
                </div>
                <a 
                  href={pub.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-green-700 hover:text-green-500 group-hover:translate-x-2 transition-all duration-300 flex items-center"
                >
                  {pub.title}
                  <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center py-8 px-6 bg-green-50 rounded-xl border border-green-100">
          <p className="text-green-800 text-lg mb-4">
            These publications are provided to help you on your mindfulness journey.
          </p>
          <p className="text-sm text-green-600">
            Click on any title to download the PDF document.
          </p>
        </div>
        
      
      </div>
    </div>
  );
};

export default BuddhistPublicationsPage;