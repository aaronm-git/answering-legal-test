import AnswerLegalIcon from "@/images/AL_2ColorIcon-AnsweringService.svg";
import ChatbotIcon from "@/images/AL_2ColorIcon-Chatbot.svg";
import LVCv2Icon from "@/images/AL_2ColorIcon-LVCv2.svg";
import Image, { StaticImageData } from "next/image";
import Card from "./ui/Card";
import Divider from "./ui/Divider";

interface Feature {
  title: string;
  description: string;
  icon: StaticImageData;
}

export default function Features({ features, title }: { features: Feature[], title: string }) {
  return (
    <section className='relative container mx-auto px-4 py-16 lg:-mt-[174px] lg:pt-0 lg:pb-16'>
      <h2 className='h2 text-dark mb-6 text-center lg:text-white'>
        {title}
      </h2>

      <Divider className='mb-8 rounded-[10px]' />

      <div className='grid grid-cols-1 gap-8 text-center max-lg:px-[22px] md:grid-cols-3'>
        {features.map((feature) => (
          <Card key={feature.title} className='rounded-[20px] px-4 py-8 shadow'>
            <Card.Body className='flex flex-col items-center gap-6'>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={100}
                height={100}
                className='size-[100px]'
              />
              <h3
                className='h2'
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></h3>
              <Divider className='rounded-[5px]' />
              <p className='subtitle2'>{feature.description}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
