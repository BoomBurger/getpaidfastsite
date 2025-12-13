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
                  <span className="text-secondary relative">
                    <span className="absolute inset-0 blur-2xl opacity-40 text-secondary">Chase</span>
                    <span className="relative">Chase</span>
                  </span>{" "}
                  Late{" "}
                  <span className="text-primary relative">
                    <span className="absolute inset-0 blur-2xl opacity-40 text-primary">Payments</span>
                    <span className="relative">Payments</span>
                  </span>{" "}
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

        {/* Divider Line */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="border-t border-text/10"></div>
        </div>

        {/* Integrations Section */}
        <section className="pb-20 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">
              Integrates Seamlessly With
            </h2>
          </div>
          <div className="relative">
            <div className="flex justify-center">
              {/* Logos */}
              <div className="flex items-center gap-16 px-8">
                {/* Xero */}
                <div className="flex items-center justify-center h-12 w-24 opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-2xl font-bold text-text">Xero</span>
                </div>

                {/* Stripe */}
                <div className="flex items-center justify-center h-12 w-28 opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-2xl font-bold text-text">Stripe</span>
                </div>

                {/* Google */}
                <div className="flex items-center justify-center h-12 w-28 opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-2xl font-medium text-text">Google</span>
                </div>

                {/* Supabase */}
                <div className="flex items-center justify-center h-12 w-32 opacity-50 hover:opacity-100 transition-opacity">
                  <svg className="h-10" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)" />
                    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2" />
                    <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#249361" />
                        <stop offset="1" stopColor="#3ECF8E" />
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Vercel */}
                <div className="flex items-center justify-center h-12 w-24 opacity-50 hover:opacity-100 transition-opacity">
                  <svg className="h-6" viewBox="0 0 76 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor"/>
                  </svg>
                </div>

                {/* Railway */}
                <div className="flex items-center justify-center h-12 w-28 opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-2xl font-bold text-text">Railway</span>
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
