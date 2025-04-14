"use client"
import React, { useState } from 'react';
import { Book, MapPin, Users, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const sectionNavigation = [
    { 
      id: 'mission', 
      icon: <Leaf className="w-6 h-6 mr-2" />, 
      label: 'Our Mission' 
    },
    { 
      id: 'teachers', 
      icon: <Users className="w-6 h-6 mr-2" />, 
      label: 'Our Sangha' 
    },
    { 
      id: 'history', 
      icon: <Book className="w-6 h-6 mr-2" />, 
      label: 'Our History' 
    },
    { 
      id: 'location', 
      icon: <MapPin className="w-6 h-6 mr-2" />, 
      label: 'Our Location' 
    }
  ];

  // Function to handle the community button click
  const handleJoinCommunity = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdpk2MWrt1iuFmjtbl2vsAKHIxJ9vWzlZFYq_zzSN8KsQJAgA/viewform";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="bg-white shadow-xl rounded-full w-32 h-32 mx-auto mb-6 overflow-hidden border-4 border-green-100 flex items-center justify-center">
            <img 
              src="/assets/logo/logo.png" 
              alt="Pennsylvania Meditation Center Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-extralight text-green-900 tracking-wide">
            Pennsylvania Meditation Center
          </h1>
          <p className="text-xl text-green-700 mt-4 max-w-2xl mx-auto">
            A sanctuary of mindfulness, peace, and spiritual growth
          </p>
        </header>

        {/* Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {sectionNavigation.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                flex items-center px-6 py-3 rounded-full transition-all duration-300 
                ${activeSection === section.id 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-white text-green-800 hover:bg-green-100 shadow-md'}
              `}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Mission Section */}
          {activeSection === 'mission' && (
            <div className="p-12 space-y-6 animate-fade-in">
              <h2 className="text-3xl font-light text-green-800 text-center mb-6">
                Our Mission
              </h2>
              <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
                <p className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                Our Center is a place for everyone who wishes to explore, learn or practice meditation and teachings of the Buddha in the Theravada Buddhist tradition.  We welcome all to our serene, relaxing, and friendly environment to find relief from the stress of everyday life and to be inspired to tread the path of enlightenment.  Our teacher, a Theravada Buddhist monk with years of training in meditation, provides a variety of programs to enrich us with Dharma knowledge as well as guides and inspires us to practice mindfulness and meditation.  It is by these practices that we find our lives becoming more peaceful and meaningful, and that we develop resilience, compassion, wisdom and other positive qualities that improve our personal, family and work life.
                </p>
                <p className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                  Our deepest commitment is to support individual well-being through mindfulness, 
                  compassion, and the healing practices of Dhamma.
                </p>
                <p className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                We serve a congregation that is diverse in age, background, and ethnicity, and united in its inspiration and enthusiasm to learn and practice the teachings of the Buddha.
                </p>
              </div>
            </div>
          )}

          {/* Teachers Section */}
          {activeSection === 'teachers' && (
            <div className="p-12 animate-fade-in">
              <h2 className="text-3xl font-light text-green-800 text-center mb-12">
                Our Spiritual Leaders
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    name: "Ven. Dr. Harispattawe Mangala Nayaka Thero",
                    bio: "Nayaka Thero is the teacher and mentor of our resident chief incumbent, Ven. Huruluwewe Chandrawansa Thero. Ven. Mangala was ordained into the Ramañña Nikaya branch of monks and later, at age 34, founded the Sri Saranatha Dharma Vidya Peetha Mahapirivena, known also as Sri Sudhammananda Samanera Bhikkhu Training Centre, in Halloluwa, Kandy, Sri Lanka in 1992.  Since then, Nayaka Thero has ordained and trained more than 400 novice monks under his tutelage.Currently there are more than 15 temples with monasteries under Nayaka Thero's auspices in Sri Lanka, serving more than 10,000 devotees and educating many children in the Buddha Dhamma.  In 2005, Nayaka Thero began touring overseas to bring the Buddha's teachings to different countries.  During a visit to Washington D.C., Nayaka Thero met Mr. Asoka Ganhewa and his wife, who invited him to our Center here in Pennsylvania.Seeing the peaceful vistas at our Center and knowing the American people's thirst for meditation, Nayaka Thero had the vision to expand it from a temple into a meditation center. Consequently, in 2016 Nayaka Thero urged his student Ven. Chandrawansa to come to the United States and bring his vision to fruition. When Ven. Dr. Mangala can take a break from his duties at the Bhikkhu training center and monasteries in Sri Lanka, Nayaka Thero visits our Center and Nayaka Thero's enthusiastic devotees here in the United States.",
                    image: "/assets/about/Nayakathero.png"
                  },
                  {
                    name: "Bhante Ariyawansa",
                    bio: "Bhante Ariyawansa is a resident monk at the PA Meditation Center. Bhante Ariyawansa began training at the Sri Sudhammananda Samanera Bhikkhu Training Center in Hallaluwa, Kandy, Sri Lanka in 2003. Bhante Ariyawansa received higher ordination as a Bhuddist monk in 2014.Bhante Ariyawansa was a resident monk at the Bhikkhu Training Center where Bhante Ariyawansa preached The Dhamma and taught devotees. In 2021, Bhante Ariyawansa came to the U.S. where he began teaching devotees at the PA Meditation Center in Crystal Spring, PA. Bhante Ariyawansa currently continues his teaching.Bhante Ariyawansa delivers his messages and seminars in Sinhalese. He is currently studying English. He has also participated in several long-term meditation retreats for Bhuddist monks.Bhante Ariyawansa looks forward to seeing you at the Meditation Center.",
                    image: "/assets/about/Bhante-Ariyawansa.png"
                  },
                  {
                    name: "Bhante Chandrawansa",
                    bio: "Bhante Chandrawansa is our resident and chief incumbent monk.  Bhante Chandrawansa began his training as a monk at the Sri Sudhammananda Samanera Bhikkhu Training Centre, in Halloluwa, Kandy, Sri Lanka in 2002 and received higher ordination as a Buddhist monk in 2008. Bhante Chandrawansa received Bachelor of Arts degree from University of Kelaniya, Sri Lanka.Bhante Chandrawansa was a resident monk at the Bhikkhu Training Centre, preaching the Dhamma and teaching devotees as well as the novice monks until 2015 when Bhante Chandrawansa went to Canada to serve as assistant clergy at the Ottawa Inter-Community Buddhist Society, teaching and leading discussions in English.Currently, Bhante Chandrawansa delivers his sermons and conducts discussions in English, even on highly complex Buddhist subjects.  Upon the request of Bhante Chandrawansa's teacher Ven. Dr Mangala and our Center, Bhante Chandrawansa came to Pennsylvania in 2016 and began serving our Center as the resident monk.Over the last few years, Bhante Chandrawansa has participated in several intensive long term meditation retreats for Buddhist monks, to enhance his meditation teaching skills. Bhante Chandrawansa now conducts meditation programs and retreats not only at our Center but also at the Long Island Buddhist Meditation Center and other venues in the United States.",
                    image: "/assets/about/Bhante-Chandrawansa.png"
                  }
                ].map((teacher, index) => (
                  <div 
                    key={teacher.name} 
                    className="bg-green-50 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg"
                  >
                    <div className="w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-green-200">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-4">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-700">{teacher.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Section */}
          {activeSection === 'location' && (
            <div className="p-12 animate-fade-in">
              <h2 className="text-3xl font-light text-green-800 text-center mb-12">
                Our Peaceful Sanctuary
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                      Location Details
                    </h3>
                    <p className="text-gray-700">
                    Pennsylvania Meditation Center is located in a beautiful valley in rural south central Pennsylvania, nestled in the scenic Appalachian Mountains. This tranquil atmosphere is ideal for meditative retreats for mindfulness training that result in inner peace. The Center is located within a two-hour drive of the DC Metro area, and easily accessible from Interstate 70 (Exit 151), Route 30, and the PA Turnpike (Exit 161).
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                      Accommodations
                    </h3>
                    <p className="text-gray-700">
                      We offer limited overnight accommodations. Nearby lodging is available in Breezewood, PA.
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="/assets/about/location.png " 
                    alt="Meditation Center Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* History Section */}
          {activeSection === 'history' && (
            <div className="p-12 animate-fade-in">
              <h2 className="text-3xl font-light text-green-800 text-center mb-12">
               Our History
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  
                    <p className="text-gray-700">
                    Our Center opened and was incorporated in 2004 as International Buddhist Society of Pennsylvania, in fulfillment of the vision of Mr. Asoka Ganhewa and his wife to provide a Buddhist temple suitable for weekend Dhamma retreats in a peaceful rural setting that is removed from the bustle of the city yet accessible to families and working individuals.  The generous support from the wider Sri Lankan American community, both monastic and laypersons, and the local community, made the vision a reality as Dhamma programs grew and flourished over the years.
                    </p>
                    <p className="text-gray-700">
                    Due to the inspiration of Ven. Dr. Mangala to serve the wider community and to expand our temple to become specialized in meditation, our chief monk, Bhante Chandrawansa, has carried out that vision, expanding our Center's programs to include meditation retreats and group meditation not only at the Center but also at libraries, a local prison, and on Zoom.</p>
                  </div>
          
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="/assets/about/Asoka.png " 
                    alt="Meditation Center Location" 
                    className="w-auto h-autoh-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button 
            onClick={handleJoinCommunity}
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;