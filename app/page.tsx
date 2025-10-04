import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";
import SplitSection from "@/components/SplitSection";
import AnswerLegalIcon from "@/images/AL_2ColorIcon-AnsweringService.svg";
import ChatbotIcon from "@/images/AL_2ColorIcon-Chatbot.svg";
import LVCv2Icon from "@/images/AL_2ColorIcon-LVCv2.svg";
import PlaceholderImg from "@/images/Article_img_placeholder.jpg";
import CRMGraphic from "@/images/CRM-Graphic.png";
import HeroImage from "@/images/LandingHero.jpg";
import LandingHeroMobile from "@/images/LandingHeroMobile.jpg";
import ReceptionistImg from "@/images/Receptionist_IMG.png";

export default function Home() {
  return (
    <main>
      <Hero
        image={HeroImage}
        mobileImage={LandingHeroMobile}
        title="We're more than an answering service"
        description='Answering Legal has everything you need to make sure your firm never misses another opportunity.'
        cta={{ text: "See our pricing", href: "/" }}
        rating={{
          score: "4.84",
          stars: "★★★★★",
          reviewCount: "230"
        }}
      />
      <Features
        title="Here's what we can do for your law firm"
        features={[
          {
            title: "Legal answering <br /> service",
            description:
              "With 24/7 legal intake, you'll never miss a potential client's call.",
            icon: AnswerLegalIcon
          },
          {
            title: "AI intake <br /> chatbot",
            description:
              "Turn web leads into clients with a chatbot powered by the latest in AI technology.",
            icon: ChatbotIcon
          },
          {
            title: "Live translation <br /> services",
            description:
              "Break through the language barrier and schedule video conferences with live interpreters.",
            icon: LVCv2Icon
          }
        ]}
      />

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

      <Slideshow
        title='Want to learn more? Read our articles on legal intake.'
        cta={{
          text: "Read our articles",
          href: "/",
          variant: "primary"
        }}
        posts={[
          {
            title: "How Viable Is Remote Work For Lawyers?",
            description:
              "This month on the Answering Legal blog, we'll be covering remote work in the legal world. Since the rapid adaptations required by quarantine during the pandemic, many law firms have had to rethink their traditional office-based approach to work.",
            image: PlaceholderImg,
            category: "LAWYER WELLNESS",
            date: "2024-06-06",
            slug: "how-viable-is-remote-work-for-lawyers"
          },
          {
            title: "The Future of Legal Technology: AI and Automation",
            description:
              "Artificial intelligence is revolutionizing the legal profession at an unprecedented pace. From document review to case prediction, AI tools are helping lawyers work more efficiently while maintaining the highest standards of accuracy.",
            image: PlaceholderImg,
            category: "LEGAL TECH",
            date: "2024-05-28",
            slug: "the-future-of-legal-technology-ai-and-automation"
          },
          {
            title: "Client Communication Best Practices for Modern Law Firms",
            description:
              "Effective client communication has always been crucial for law firms, but in today's digital age, the expectations and methods have evolved significantly. Learn how to maintain strong client relationships through modern communication strategies.",
            image: PlaceholderImg,
            category: "CLIENT RELATIONS",
            date: "2024-05-15",
            slug: "client-communication-best-practices-for-modern-law-firms"
          },
          {
            title: "Cybersecurity Essentials for Law Firms",
            description:
              "Law firms are increasingly becoming targets for cybercriminals due to the sensitive nature of the data they handle. Understanding the latest cybersecurity threats and implementing robust protection measures is essential for any modern practice.",
            image: PlaceholderImg,
            category: "SECURITY",
            date: "2024-05-02",
            slug: "cybersecurity-essentials-for-law-firms"
          },
          {
            title: "Building a Sustainable Legal Practice in 2024",
            description:
              "Sustainability isn't just about environmental impact—it's about creating a law practice that can thrive long-term. Discover strategies for building resilience, maintaining work-life balance, and ensuring your practice remains competitive.",
            image: PlaceholderImg,
            category: "PRACTICE MANAGEMENT",
            date: "2024-04-18",
            slug: "building-a-sustainable-legal-practice-in-2024"
          },
          {
            title: "The Rise of Alternative Legal Service Providers",
            description:
              "The legal industry is experiencing a significant shift with the emergence of alternative legal service providers. Traditional law firms must adapt to remain competitive in this evolving landscape.",
            image: PlaceholderImg,
            category: "INDUSTRY TRENDS",
            date: "2024-04-05",
            slug: "the-rise-of-alternative-legal-service-providers"
          }
        ]}
      />

      <ContactForm />
    </main>
  );
}
