import Hero from "./components/hero";
import OrderProcess from "./components/OrderProcess";
import BusinessExperience from "./components/services";
import ContactForm from "./components/contact";
import PricingPlan from "./components/pricingSection";
import FAQ from "./components/FAQ";
import Testimonials from "./components/testimonials";
import { MarqueeDemo } from "./components/marquee";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {" "}
      {/* Add overflow-x-hidden to prevent horizontal scrolling */}
      <Hero />
      <MarqueeDemo />
      <OrderProcess />
      <BusinessExperience />
      <ContactForm />
      <PricingPlan />
      <FAQ />
      <Testimonials />
    </div>
  );
}
