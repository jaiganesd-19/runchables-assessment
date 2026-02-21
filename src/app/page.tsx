import AnnouncementBar from "@/components/hero-section/AnnouncementBar";
import HeroBanner from "@/components/hero-section/HeroBanner";
import SpeakerandForm from "@/components/hero-section/SpeakerandForm";
import WhatWeAre from "@/components/hero-section/WhatWeAre";
import ProofGallerySection from "@/components/hero-section/ProofGallerySection";
import FormValidation from "@/components/workshop-section/FormValidation";
import AboutWorkshop from "@/components/workshop-section/AboutWorkshop";
import MeetYourHost from "@/components/administration-section/MeetYourHost";
import IndustryLeaders from "@/components/administration-section/LeaderAndCelebrities";
import MegaBonus from "@/components/administration-section/MegaBonus";
import FormSection from "@/components/administration-section/FormSection";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/footer/PopupForm";

export default function Home() {
  return (
    <>
      {/* Fixed Announcement Bar */}
      <AnnouncementBar />

      {/* Push content below fixed bar */}
      <div className="pt-[80px] md:pt-[70px]">
        <HeroBanner />
        <SpeakerandForm />
        <WhatWeAre />
        <ProofGallerySection />
        <FormValidation />
        <AboutWorkshop />
        <MeetYourHost />
        <IndustryLeaders />
        <MegaBonus />
        <FormSection />
        <Footer />
      </div>

      <Popup />
    </>
  );
}