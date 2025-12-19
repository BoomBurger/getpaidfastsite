import Navbar from "@/components/Navbar";
import DashboardMockup from "@/components/DashboardMockup";
import AudioPlayerOverlay from "@/components/AudioPlayerOverlay";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 pt-24 pb-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-6">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up">
                  Never{" "}
                  <span className="text-secondary">Chase</span>{" "}
                  Late{" "}
                  <span className="text-primary">Payments</span>{" "}
                  Again
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-text-muted leading-relaxed animate-fade-in-up animation-delay-200">
                  Let AI automatically call your late paying clients, while you focus on <span className="text-primary font-medium">growth</span> :D
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex gap-4 lg:justify-start justify-center animate-fade-in-up animation-delay-400">
                  <a
                    href="#pricing"
                    className="inline-block px-8 py-3.5 bg-background text-white rounded-full font-semibold text-base border-2 border-white/20 hover:border-white/40 transition-colors"
                  >
                    Check Pricing
                  </a>
                  <a
                    href="https://dashboard.getpaidfast.ai/register"
                    className="inline-block px-8 py-3.5 bg-text text-background rounded-full font-semibold text-base hover:bg-secondary transition-colors"
                  >
                    Use For Free
                  </a>
                </div>
              </div>

              {/* Right Column - Dashboard Mockup */}
              <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-600">
                <div className="relative">
                  <div style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)'
                  }}>
                    <DashboardMockup />
                  </div>
                  <AudioPlayerOverlay />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <ProblemSection />

        {/* Divider Line */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="border-t border-text/10"></div>
        </div>

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Divider Line */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="border-t border-text/10"></div>
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* Divider Line */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="border-t border-text/10"></div>
        </div>

        {/* Pricing Section */}
        <PricingSection />

        {/* Divider Line */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="border-t border-text/10"></div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Divider Line */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="border-t border-text/10"></div>
        </div>

        {/* Final CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
