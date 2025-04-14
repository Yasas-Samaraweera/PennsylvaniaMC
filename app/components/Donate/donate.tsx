import React from 'react';

const SimplifiedDonationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl text-center text-gray-800 mb-3">Support Our Temple</h1>
        <p className="text-center text-gray-700 mb-8">
          To support our temples programs, retreats, events, and maintenance
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              {/* Temple Image */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/assets/Donate/donate.png" 
                  alt="Meditation Temple" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Large Donate Button */}
              <div className="p-8 text-center">
                <p className="text-gray-700 mb-6">
                  Your generous donations help us maintain our temple, support our resident monks, 
                  organize community events, and continue to provide a peaceful sanctuary for meditation and spiritual growth.
                </p>
                <a 
                  href="https://www.paypal.com/donate?token=a09A1XhV5RA373D6di_tK1V6fNHmA11tcNJRWcrd5LFGIXyTsdJEmotlSjMndpWCf6EEBd9EkRyo0pBv"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white text-xl font-medium py-4 px-8 rounded-lg shadow-md transition-colors w-full md:w-auto md:min-w-64"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </div>
            </div>

            {/* Notice Board */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-amber-100 p-4 border-l-4 border-amber-500">
                <h3 className="text-xl font-medium text-amber-800 mb-2">Notice Board</h3>
                <div className="text-amber-700">
                  <p className="mb-3">
                    <strong>April 15, 2025:</strong> Meditation retreat registration is now open. Limited spots available.
                  </p>
                  <p className="mb-3">
                    <strong>May 1, 2025:</strong> Temple closing early (3pm) for special cleaning.
                  </p>
                  <p>
                    <strong>June 10, 2025:</strong> Annual temple celebration - All are welcome to join us for this special day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Donation Categories */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="bg-green-700 p-4 text-white font-medium">
                Donation Categories
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span>→</span>
                    <span>Monthly Donation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>→</span>
                    <span>Temple Maintenance Fund</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>→</span>
                    <span>Event Sponsoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>→</span>
                    <span>Resident Monk Expenses Fund</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Upcoming Event */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="bg-green-700 p-4 text-white font-medium">
                Upcoming Event
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">Mindful Morning Fundraising</h3>
                <p className="text-gray-700 mb-2">April 26, 2025 from 9:00 am</p>
                <p className="text-gray-600 text-sm mb-4">
                  Join us for a morning of mindfulness and community support.
                </p>
                <a 
                  href="/Events/allEventsPage" 
                  className="inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-700 p-4 text-white font-medium">
                Contact Us
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  Please do not hesitate to contact us if you have any questions or concerns.
                </p>
                <a 
                  href="/Contact/contactPage" 
                  className="inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedDonationPage;