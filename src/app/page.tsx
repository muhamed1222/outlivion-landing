import FloatingNavbar from '@/components/floating-navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import SpeedSection from '@/components/speed-section'
import PrivacySection from '@/components/privacy-section'
import LocationsSection from '@/components/locations-section'
import FAQSection from '@/components/faq-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <FloatingNavbar />
      <HeroSection />
      <FeaturesSection />
      <SpeedSection />
      <PrivacySection />
      <LocationsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

