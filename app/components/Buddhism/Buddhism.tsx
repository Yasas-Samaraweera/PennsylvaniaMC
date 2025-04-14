// CardPage.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string | React.ReactNode;
  imageUrl?: string;
}

// Banner component with welcome note
const Banner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-700 to-green-500 text-white rounded-lg shadow-xl overflow-hidden mb-12">
      <div className="absolute inset-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="leaf" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 2C14 2 10 10 10 16C10 22 14 30 20 30C26 30 30 22 30 16C30 10 26 2 20 2Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf)" />
        </svg>
      </div>
      
      <div className="relative px-8 py-16 md:px-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Teachings of the Buddha</h1>
          <p className="text-lg mb-4">
            The Buddha taught that the Dhamma is like a mirror. Just as we check our reflection in the mirror 
            prior to meeting with other people, we can use the Dhamma to check ourselves for imperfections 
            and shortcomings. The Dhamma should be used for self-reflection.
          </p>
          <blockquote className="border-l-4 border-green-300 pl-4 italic mb-4">
            The Tathagatha (the blessed one) acts as he speaks, and speaks as he acts. And we can find 
            no teacher who does likewise, in every detail of doctrine, either in the past or in the present, 
            other than the Tathagatha.
          </blockquote>
          <p className="text-sm text-green-100 mt-2">
            &quot;ඒ භාග්‍යවතුන් වහන්සේ යම්සේ කියන සේක්ද එසේම කරන සේක. යම්සේ කරන සේක්ද එසේම කියන සේක.
            මෙසේ ධර්මානුධර්ම ප්‍රතිපත්තියෙන් යුක්ත වූ මේ අංගයෙන් සමන්විත වූ ඒ භාග්‍යවතුන් වහන්සේ හැර 
            වෙන කෙනෙකු අතීත කාලයෙහිද මේ වර්තමානයෙහිද නොම දක්නෙමු.&quot;
          </p>
        </div>
        <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center">
          
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-green-300 to-green-200"></div>
    </div>
  );
};

// Regular card component for the grid
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:transform hover:scale-105">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl || "/api/placeholder/400/200"} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  );
};

// Content card with alternating layout
interface ContentCardProps extends CardProps {
  index: number;
  category?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  index, 
  category = "BUDDHIST TEACHING" 
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className={`md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <img 
          src={imageUrl || "/api/placeholder/600/400"} 
          alt={title} 
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className={`md:w-1/2 p-6 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="text-green-600 font-medium text-sm mb-2">{category}</div>
        <h1 className="title-font text-2xl font-semibold text-gray-900 mb-3">{title}</h1>
        <div className="leading-relaxed mb-5 text-gray-600 overflow-y-auto max-h-96">{description}</div>
        <div className="flex items-center">
          
        </div>
      </div>
    </div>
  );
};

const CardPage: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "What is Buddhism?",
      description: (
        <>
          <p className="mb-2">Buddhism was founded by Prince Siddhartha Gautama in India in the sixth century B.C.E.</p>
          <p>Buddhists believe that human life exists in a cycle of suffering and rebirth (Samsāra), but that it is possible to escape this cycle forever by achieving a state of enlightenment (Nibbāna). Prince Siddhartha Gautama, known as the Buddha, was the first human being to reach this state of enlightenment.</p>
        </>
      ),
    },
    {
      title: "What is the Dhamma?",
      description: (
        <>
          <p className="mb-2">Dhamma are the teachings of the Buddha. Dhamma includes beautiful and profound teachings such as dependent origination (Paticca Samuppada), the five aggregates (Panca Skanda), the six faculties (Salayatana) and the action that destroys actions (Kammakkhaya kamma).</p>
          <p>Dhamma is a raft to cross the ocean of Samasara or the cycle of birth and death. Dhamma is not limited to a particular group of people, race, religion, or country. Any wise person who commits can rid themselves of worldling (sansaric) suffering by practicing the Buddhist Dhamma.</p>
        </>
      ),
    },
    {
      title: "Characteristics of Nibbana",
      description: (
        <>
          <p className="mb-2">Where consciousness is signless, boundless, all-luminous, That is where earth, water, fire and air find no footing, There both long and short, small and great, fair and foul,</p>
          <p>There Name and Form are wholly destroyed. With the cessation of consciousness this is all destroyed.</p>
          <p className="mt-2 italic">~Kevadda Sutta ~</p>
        </>
      ),
    },
    {
      title: "What are the Seven Enlightenment Factors?",
      description: (
        <>
          <p className="mb-2">Our journey is filled with dark and destructive forces, but the seven enlightenment factors bring a great light to dispel the darkness. By developing these seven enlightenment factors, the light we will bring gives us clarity that leads us to Nibbāna.</p>
          <p>The seven enlightenment factors help us to cross the river, breaking the cycle of Samsāra to attain enlightenment. These seven factors include the enlightenment factor of mindfulness, the enlightenment factor of investigation of Dhamma, the enlightenment factor of energy, the enlightenment factor of rapture, the enlightenment factor of tranquility, the enlightenment factor of concentration, and the enlightenment factor of equanimity.</p>
        </>
      ),
    },
    {
      title: "What is mindfulness?",
      description: (
        <>
          <p className="mb-2">Mindfulness is a practice that brings true happiness to humans. When our mind dwells on the past and or projects into the future, many types of mental sufferings may occur, such as anxiety, stress, panic attacks, and depression.</p>
          <p className="mb-2">Living with mental sufferings is not freedom nor is it the best way of taking advantage of this beautiful opportunity called life. Mindfulness means living in the present moment seeing each presently arisen state.</p>
          <p>Mindfulness is an umbrella that protects the mind from all the defilements that rain upon us during our daily lives. A mindful life is filled with inner happiness. Every human wants a peaceful and a happy life and the open secret is to practice the beauty of mindfulness.</p>
        </>
      ),
    },
    {
      title: "'Know Yourself-Know Others'",
      description: (
        <>
          <p className="mb-2">Know your own mind and body, and you will know others&lsquo; as well. One&#39;s facial expressions, speech, gestures, actions, all stem from one&lsquo;s state of mind.</p>
          <p>A Buddha, an enlightened being, can read these because he has experienced and seen with wisdom the states of mind that underlie them, just as wise older people, having passed through childhood, can understand the ways of children.</p>
          <p className="mt-2 italic">-Achaan Chah-</p>
        </>
      ),
    },
    {
      title: "What is the Noble Eightfold Path?",
      description: (
        <>
          <p className="mb-2">The Noble Eightfold Path is also known as the Middle Path, which one must practice to keep on the path to Nibbāna. This is a way of life between the two extremes of asceticism and great wealth.</p>
          <p>&ldquo;And what, friends, is the noble truth of the way leading to the cessation of suffering? It is just this Noble Eightfold Path; that is, right view (sammā diti), right intention (sammā sarikappa), right speech (sammā vāchā), right action (sāmma kammantha), right livelihood (sāmma ajiva), right effort (sāmma vāyāma), right mindfulness (sāmma sati), and right concentration (sāmma sammādhi).</p>
          <p className="mt-2 italic">–141 Saccavibhanga Sutta: The Exposition of the Truths, Middle Length Discourses</p>
        </>
      ),
    },
    {
      title: "What is loving kindness (Metta)?",
      description: (
        <>
          <p className="mb-2">Why should we practice loving kindness? The answer is simple, because loving kindness is a beautiful state of mind. By practicing loving kindness thoughts of anger and hatred vanish. We practice loving kindness not only for our beloved ones, but for all living beings and we do it without bounds.</p>
          <p className="mb-2">Whether they are weak or strong, omitting none, meek or mighty, short, medium, short, tall, seen and the unseen, those living near and far, born and yet to be born, may all beings be at ease. Let none deceive another or despise any being in any state. Let none through anger or ill-will wish harm upon another.</p>
          <p>Even as a mother protects her child with her life, her only child, so with a boundless heart should one cherish all living beings. Radiate kindness over the entire world and let it spread upwards to the skies and downwards to the depths, outwards and unbounded, free from hatred and ill-will.</p>
          <p className="mt-2 italic">(Metta Sutta, Sutta Nipata)</p>
        </>
      ),
    }
  ];

  const contentCards: ContentCardProps[] = [
    {
      title: "Buddha's everyday advice to his son, Venerable Rahula",
      description: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>When a talk on faith is being given, a person devoid of faith loses his temper and becomes irritated, hostile and stubborn; he displays anger, hatred and bitterness.</li>
            <li>When a talk on virtuous behavior is being given, an immoral person loses his temper and becomes irritated, hostile and stubborn; he displays anger, hatred and bitterness.</li>
            <li>When a talk on learning is being given, a person of little learning loses his temper and becomes irritated, hostile and stubborn; he displays anger, hatred and bitterness.</li>
            <li>When a talk on generosity is being given, miser loses his temper and becomes irritated, hostile and stubborn; he displays anger, hatred and bitterness.</li>
            <li>When a talk on wisdom is being given, an unwise person loses his temper and becomes irritated, hostile and stubborn; he displays anger, hatred and bitterness.</li>
          </ul>
          <p className="mt-3 text-sm italic">(The Numerical Discourses of the Buddha, The book of Five, Wrongly addressed talk)</p>
        </>
      ),
      imageUrl: "/assets/Buddhism/buddhism1.png",
      index: 0,
      category: "CORE TEACHING"
    },
    {
      title: "Effective Communication Skills",
      description: (
        <>
          <ul className="list-disc pl-5 space-y-2">
            <li>Give up five-fold sensual pleasures – so sweet, so charming. Going forth from home, with faith, be one who has put an end to suffering.</li>
            <li>Seek a remote lodging, secluded and noiseless. Be moderate in food.</li>
            <li>Have no attachment to robes, alms, requisites and lodging. Come not to this world again.</li>
            <li>Practice restraint with regard to the fundamental code and the five senses.</li>
            <li>Cultivate mindfulness as regards the body and be full of dispassionate.</li>
            <li>Avoid alluring, lust provoking objects of sense.</li>
            <li>Develop your one pointed, composed mind towards loathsomeness. Think not of the outward appearance of sense. Give up latent pride. Thus eradicating pride, you shall fare on in perfect peace.</li>
          </ul>
          <p className="mt-3 text-sm italic">(The Numerical Discourses of the Buddha, The book of Five, Wrongly addressed talk)</p>
        </>
      ),
      imageUrl: "/assets/Buddhism/buddhism2.png",
      index: 3,
      category: "COMMUNICATION"
    },
    {
      title: "Mindful Walking Meditation",
      description: (
        <>
          <div className="space-y-4">
            <p className="font-semibold">Technique to practice walking meditation:</p>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">STEP 1:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Begin with your left leg. Mentally state &ldquo;left…right…&quot; when you place your feet on the ground for the duration of your walking meditation time (20 minutes-1 hour daily is recommended)</li>
                <li>Keep a leisurely pace, neither too fast nor too slow</li>
                <li>Keep your eyes on the ground 4-5 feet in front of you</li>
                <li>When thoughts arise while you walk, stop walking and stand still. Watch the thought until it disappears. Then resume walking.</li>
                <li>When you reach the turning point, stand still, close your eyes and bring your attention to your standing posture for 1-2 minutes. Be sure to stand with feet hip-width apart to keep your balance. Open your eyes while you turn and mentally label &ldquo;turning…turning…turning&ldquo;</li>
                <li>Continue this technique daily for 2 weeks to 1 month</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">STEP 2:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>After 2 weeks to 1 month of practicing Step 1, start here</li>
                <li>With Step 2, start to walk more slowly (20 minutes-1 hour daily is recommended)</li>
                <li>When you start to walk and raise the leg, you label it as &ldquo;raising&ldquo;, and as you do so, pay attention to the movement of the raising and placing it down.</li>
                <li>Mentally label &ldquo;raising, placing, raising, placing…&quot; to coincide with the movement of your legs</li>
                <li>Continue this technique daily for approximately 2 weeks</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">STEP 3:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>After 2 weeks to 1 month of practicing Step 2, start here</li>
                <li>With Step 3, your walking pace should be even slower (20 minutes-1 hour daily is recommended)</li>
                <li>First, note the intention of raising your foot.</li>
                <li>Then when you start to walk, while slowly raising the foot, pay attention to the movement of the raising.</li>
                <li>Next, note the intention of moving the food forward.</li>
                <li>Then while slowly moving the foot forward, pay attention to the movement of the forward motion.</li>
                <li>Now, note the intention of the placing the foot down.</li>
                <li>Finally, while slowly placing the foot down, pay attention to the movement of the placing.</li>
                <li>(Note that you may miss some steps, but do not worry – continue your effort to be mindful of each intention and movement.)</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">STEP 4:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>After 2 weeks to 1 month of practicing Step 3, start here</li>
                <li>With Step 4, your walking pace should be the slowest (20 minutes-1 hour daily is recommended)</li>
                <li>Drop your labeling when you move your legs, try to see the details of the fine movements</li>
                <li>Pay attention to the smallest details of raising and lowering our foot (heel first, then toes, then big toe, then lift, bent knee, balanced on one leg, foot placed back down, big toe, all toes, heel)</li>
                <li>Watch as closely as possible to each minor detail of every small movement</li>
              </ul>
            </div>
            
            <p className="font-semibold">MINDFUL WALKING:</p>
            <p>When walking at your usual pace, interchangeably you can focus on the top half of your body, the movements of your legs, or your body as a whole.</p>
            <p className="italic">(Note that whenever you recognize your mind is talking, stop it, and bring your attention back to your body.)</p>
            
            <p className="font-semibold mt-4">Benefits of Walking Meditation:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Increased physical and mental endurance</li>
              <li>Compliments Vipassana, there is always balance in the Dhamma</li>
              <li>Balances the body, making all of its functions healthier and more orderly</li>
              <li>Samadhi gained from walking meditation, once established, is more enduring than other forms of practice</li>
              <li>Helps maintain a proper metabolism, healthful weight loss, and better digestion</li>
            </ul>
            
            <blockquote className="italic border-l-4 border-purple-500 pl-4 py-1">
              &quot;…While walking back and forth and sitting, purify your mind of obstructive states.&ldquo;
              <footer className="text-sm">-Middle Length Discourses, Ganakamoggallana Sutta</footer>
            </blockquote>
          </div>
        </>
      ),
      imageUrl: "/assets/Buddhism/buddhism3.png",
      index: 4,
      category: "MEDITATION PRACTICE"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Banner with Welcome Note */}
        <Banner />
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>

        {/* Content Section with Alternating Cards */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">Buddhist Teachings</h2>
          
          {contentCards.map((card, index) => (
            <ContentCard 
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              index={index}
              category={card.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPage;