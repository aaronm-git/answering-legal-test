import Image, { StaticImageData } from "next/image";
import Button from "./ui/Button";

interface HeroProps {
  image: StaticImageData;
  mobileImage: StaticImageData;
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  rating: {
    score: string;
    stars: string;
    reviewCount: string;
  };
}

export default function Hero({
  image,
  mobileImage,
  title,
  description,
  cta,
  rating
}: HeroProps) {
  return (
    <div className='max-lg:bg-midnight-blue relative lg:h-[750px] lg:py-16 lg:pb-2'>
      <Image
        src={image}
        alt='Hero'
        width={1440}
        height={750}
        className='absolute inset-0 hidden h-full w-full object-cover lg:block'
      />
      <Image
        src={mobileImage}
        alt='Hero'
        width={428}
        height={353}
        className='h-[353px] w-full object-cover md:object-[50%_20%] lg:hidden'
      />
      {/* Hero Content */}
      <div className='relative z-10 container mx-auto px-4 max-lg:py-8'>
        <div className='flex flex-col gap-6 text-white max-lg:text-center lg:max-w-2xl lg:gap-8'>
          <h1 className='h1 order-2 lg:order-1'>{title}</h1>
          <p className='subtitle1 order-3 lg:order-2'>{description}</p>
          <div className='order-1 flex flex-row justify-between gap-4 max-lg:items-center lg:order-3 lg:flex-col lg:gap-3'>
            <span className='h2'>Excellent {rating.score}</span>
            <p className='flex flex-col'>
              <span className='h1 text-[#FFA130]'>{rating.stars}</span>
              <span className='text-[32px] font-semibold'>
                based on {rating.reviewCount} reviews
              </span>
            </p>
          </div>
          <div className='order-4 flex flex-col lg:order-4 lg:flex-row'>
            <Button variant='primary' href={cta.href}>
              {cta.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
