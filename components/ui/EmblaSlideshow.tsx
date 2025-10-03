"use client";

import cn from "@/lib/utils/cn";
import { EmblaCarouselType, type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel, {
  type EmblaViewportRefType
} from "embla-carousel-react";
import { createContext, useContext } from "react";

// Define the context type
type EmblaSlideshowContextType = {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
};

// Create the context with undefined as default
// This enforces that the context must be used within a provider
const EmblaSlideshowContext = createContext<
  EmblaSlideshowContextType | undefined
>(undefined);

/**
 * Hook to access the Embla Slideshow context
 * Must be used within an EmblaSlideshow component
 */
const useEmblaSlideshow = () => {
  const context = useContext(EmblaSlideshowContext);
  if (context === undefined) {
    throw new Error(
      "useEmblaSlideshow must be used within an EmblaSlideshow component"
    );
  }
  return context;
};

/**
 * Main EmblaSlideshow component that provides context to all child components
 */
function EmblaSlideshow({
  children,
  options,
  className
}: {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  className?: string;
}) {
  // Initialize the Embla carousel with the provided options
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <EmblaSlideshowContext.Provider value={{ emblaRef, emblaApi }}>
      <div className={cn("embla-wrapper", className)}>{children}</div>
    </EmblaSlideshowContext.Provider>
  );
}

function EmblaSlideshowContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { emblaRef } = useEmblaSlideshow();

  return (
    <div className={cn("embla", className)} ref={emblaRef}>
      {children}
    </div>
  );
}

/**
 * Container component
 */
const SlidesContainer = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("embla-container", className)}>{children}</div>;
};

/**
 * Individual slide component
 */
const Slide = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("embla-slide", className)}>{children}</div>;
};

/**
 * Controls wrapper component
 */
const Controls = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("embla-controls", className)}>{children}</div>;
};

/**
 * Buttons wrapper component
 */
const Buttons = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("embla-buttons", className)}>{children}</div>;
};

/**
 * Previous button component - automatically connects to the emblaApi
 */
const PrevButton = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { emblaApi } = useEmblaSlideshow();

  const handlePrevClick = () => {
    emblaApi?.scrollPrev();
  };

  return (
    <button
      className={cn("embla-button embla-button-prev", className)}
      onClick={handlePrevClick}
      type='button'
      aria-label='Previous slide'
    >
      {children}
    </button>
  );
};

/**
 * Next button component - automatically connects to the emblaApi
 */
const NextButton = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { emblaApi } = useEmblaSlideshow();

  const handleNextClick = () => {
    emblaApi?.scrollNext();
  };

  return (
    <button
      className={cn("embla-button embla-button-next", className)}
      onClick={handleNextClick}
      type='button'
      aria-label='Next slide'
    >
      {children}
    </button>
  );
};

/**
 * Dots wrapper component for pagination indicators
 */
// const Dots = ({ children }: { children: React.ReactNode }) => {
//   return <div className='embla-dots'>{children}</div>;
// };

/**
 * Compound Controls component with nested button and dot components
 * Usage: <EmblaSlideshow.Controls.PrevButton>...</EmblaSlideshow.Controls.PrevButton>
 */
const EmblaControlsCompound = Object.assign(Controls, {
  Buttons,
  //   Dots,
  PrevButton,
  NextButton
});

/**
 * Main compound component export
 *
 * Usage example:
 * ```tsx
 * <EmblaSlideshow options={{ loop: true }}>
 *   <EmblaSlideshow.Slide>Slide 1</EmblaSlideshow.Slide>
 *   <EmblaSlideshow.Slide>Slide 2</EmblaSlideshow.Slide>
 *   <EmblaSlideshow.Controls>
 *     <EmblaSlideshow.Controls.PrevButton>Prev</EmblaSlideshow.Controls.PrevButton>
 *     <EmblaSlideshow.Controls.NextButton>Next</EmblaSlideshow.Controls.NextButton>
 *   </EmblaSlideshow.Controls>
 * </EmblaSlideshow>
 * ```
 */
const EmblaSlideshowCompound = Object.assign(EmblaSlideshow, {
  SlidesContainer,
  Slide,
  Controls: EmblaControlsCompound
});

export default EmblaSlideshowCompound;

export {
  Buttons,
  Controls,
  NextButton,
  PrevButton,
  Slide,
  SlidesContainer,
  useEmblaSlideshow,
  EmblaSlideshowContainer
};
