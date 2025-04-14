
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import App from './App';
import ProgramsPage from './components/Programs/programsPage';

export const metadata = {
  title: 'PMC',
  description: 'Community organization dedicated to harmony and growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen">
          <App/>
    
          
        </main>
        <Footer />
      </body>
    </html>
  );
}
