import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import CRMGraphic from "@/images/CRM-Graphic.png";
import ReceptionistImg from "@/images/Receptionist_IMG.png";
import Slideshow from "@/components/Slideshow";
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      <SplitSection
        imagePosition='left'
        imageSrc={CRMGraphic}
        imageWidth={576}
        imageAlt='CRM Integration Dashboard'
        title="Your data's in good hands"
        description='Our partnership with your CRM enables a seamless flow of information.'
        bulletPoints={[
          "Answering Legal's receptionists take down exactly the information you need.",
          "Through native API integrations with our proprietary software, we make sure it's immediately where you need it to be.",
          "All you'll have to do is open your CRM and follow up to secure your new client's business."
        ]}
        cta={{
          text: "See our pricing",
          href: "/",
          variant: "primary"
        }}
      />

      <SplitSection
        imagePosition='right'
        imageSrc={ReceptionistImg}
        imageWidth={576}
        imageAlt='Professional receptionist handling legal intake calls'
        title='Design your perfect legal intake process'
        description='Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use your unique specifications to perform a legal intake for every new client caller.'
        cta={{
          text: "See our pricing",
          href: "/",
          variant: "primary"
        }}
      />

      <Slideshow />
    </main>
  );
}
