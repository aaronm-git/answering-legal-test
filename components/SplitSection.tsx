import Button from "@/components/ui/Button";
import cn from "@/lib/utils/cn";
import Image, { type StaticImageData } from "next/image";
import Divider from "./ui/Divider";

interface SplitSectionProps {
  imagePosition?: "left" | "right";
  imageSrc: StaticImageData;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  description: string;
  bulletPoints?: string[];
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "tertiary";
  };
  className?: string;
}

export default function SplitSection({
  imagePosition = "right",
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageHeight = 400,
  title,
  description,
  bulletPoints,
  cta,
  className
}: SplitSectionProps) {
  return (
    <section className={cn("py-8 lg:py-16", className)}>
      <div className='container mx-auto px-4 lg:px-8'>
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16",
            imagePosition === "left" ? "lg:grid-flow-col" : ""
          )}
        >
          {/* Content Section */}
          <div
            className={cn(
              "order-2 flex flex-col gap-6",
              imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            )}
          >
            <h2 className='h2'>{title}</h2>

            <Divider className='rounded-[5px]' />

            <div className='body2 text-gray-700'>{description}</div>

            {bulletPoints && bulletPoints.length > 0 && (
              <ul className='flex flex-col gap-6'>
                {bulletPoints.map((point, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='bg-primary mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full'>
                      <svg
                        className='h-3 w-3 text-white'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <span className='text-gray-700'>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <Button
                variant={cta.variant || "primary"}
                href={cta.href}
                onClick={cta.onClick}
                className='w-fit'
              >
                {cta.text}
              </Button>
            )}
          </div>

          {/* Image Section */}
          <div
            className={cn(
              "order-1",
              imagePosition === "left" ? "lg:order-1" : "lg:order-2",
              "relative"
            )}
          >
            <div className='relative'>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className='h-auto w-full object-cover'
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
