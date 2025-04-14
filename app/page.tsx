import Banner from './components/Banner/index';
import Welcome from './components/Welcome/welcome';

import ProgramSection from './components/Programs/program';
import Gallery from './components/Reviews/review';
import Reviews from './components/Gallery/Gallery';
import { HomePageEvents } from './components/Events/EventsPage';

export default function Home() {
  return (
    <main>
      <Banner />
      <Welcome />
      <HomePageEvents/>
      <ProgramSection />
      <Gallery />
      <Reviews />
    </main>
  )
}
