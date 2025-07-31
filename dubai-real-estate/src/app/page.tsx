import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DevelopersSection from '@/components/DevelopersSection';
import ProjectsSection from '@/components/ProjectsSection';
import InvestmentCalculator from '@/components/InvestmentCalculator';
import WhyDubaiSection from '@/components/WhyDubaiSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <DevelopersSection />
      <ProjectsSection />
      <InvestmentCalculator />
      <WhyDubaiSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
