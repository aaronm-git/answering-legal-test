import HeroImage from "@/images/LandingHero.jpg";
import LandingHeroMobile from "@/images/LandingHeroMobile.jpg";
import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className='max-lg:bg-midnight-blue relative lg:py-16 lg:pb-2'>
      <Image
        src={HeroImage}
        alt='Hero'
        width={1440}
        height={750}
        className='absolute inset-0 hidden h-[750px] w-full object-cover lg:block'
      />
      <Image
        src={LandingHeroMobile}
        alt='Hero'
        width={428}
        height={353}
        className='h-[353px] w-full object-cover md:object-[50%_20%] lg:hidden'
      />
      {/* Hero Content */}
      <div className='relative z-10 container mx-auto px-4 max-lg:py-8'>
        <div className='flex flex-col gap-6 text-white max-lg:text-center lg:max-w-2xl lg:gap-8'>
          <h1 className='h1 order-2 lg:order-1'>
            We're more than an answering service
          </h1>
          <p className='subtitle1 order-3 lg:order-2'>
            Answering Legal has everything you need to make sure your firm never
            misses another opportunity.
          </p>
          <div className='order-1 flex flex-row justify-between gap-4 max-lg:items-center lg:order-3 lg:flex-col lg:gap-3'>
            <span className='h2'>Excellent 4.84</span>
            <p className='flex flex-col'>
              <span className='h1 text-[#FFA130]'>★★★★★</span>
              <span className='text-[32px] font-semibold'>
                based on 230 reviews
              </span>
            </p>
          </div>
          <div className='order-4 flex flex-col lg:order-4 lg:flex-row'>
            <Button variant='primary'>See our pricing</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
