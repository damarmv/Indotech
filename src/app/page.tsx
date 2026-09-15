import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Partners from '@/components/Partners';
import Timeline from '@/components/Timeline';
import ServicePackages from '@/components/ServicePackages';
import VideoManagement from '@/components/VideoManagement';
import CommandCenter from '@/components/CommandCenter';
import CctvAlarm from '@/components/CctvAlarm';
import AccessControl from '@/components/AccessControl';
import Networking from '@/components/Networking';
import InteractiveKiosk from '@/components/InteractiveKiosk';
import DigitalSignage from '@/components/DigitalSignage';
import SoftwareApplication from '@/components/SoftwareApplication';
import Advantages from '@/components/Advantages';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Partners />
      <ServicePackages />
      <VideoManagement />
      <CommandCenter />
      <CctvAlarm />
      <AccessControl />
      <Networking />
      <InteractiveKiosk />
      <DigitalSignage />
      <SoftwareApplication />
      <Advantages />
      <Gallery />
      <Footer />
      <WhatsAppFloatingButton />
      <Toaster />
    </main>
  );
}
