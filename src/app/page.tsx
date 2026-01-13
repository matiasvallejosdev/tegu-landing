import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getWaitlistCount } from "@/app/actions/waitlist";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const waitlistCount = await getWaitlistCount();

  return (
    <>
      <Navbar />
      <main>
        <Hero waitlistCount={waitlistCount} />
        <ValueProps />
        <HowItWorks />
        <Features />
        {/* <Pricing /> */}
        <FAQ />
        <WaitlistForm initialCount={waitlistCount} />
      </main>
      <Footer />
    </>
  );
}
