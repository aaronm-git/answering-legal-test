import ArrowLeft from "@/images/Left_Arrow.svg";
import ArrowRight from "@/images/Right_Arrow.svg";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import Card from "./ui/Card";
import EmblaSlideshow, {
  Buttons,
  Controls,
  EmblaSlideshowContainer,
  NextButton,
  PrevButton,
  Slide,
  SlidesContainer
} from "./ui/EmblaSlideshow";

interface SlideshowPosts {
  title: string;
  description: string;
  image: StaticImageData | string;
  category: string;
  date: string;
  slug: string;
}

interface SlideshowProps {
  posts: SlideshowPosts[];
  title: string;
  cta?: {
    text: string;
    href?: string;
    variant?: "primary" | "secondary" | "tertiary";
  };
  className?: string;
}

function Slideshow({ posts, title, cta, className }: SlideshowProps) {
  return (
    <section className='container mx-auto flex flex-col gap-8 px-4 py-8 lg:px-8 lg:py-16'>
      <h2 className='h2 text-center'>{title}</h2>

      <EmblaSlideshow
        options={{
          loop: true,
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false,
          slidesToScroll: 1
        }}
        className=''
      >
        <Controls>
          <Buttons>
            <PrevButton>
              <Image src={ArrowLeft} alt='Arrow Left' />
            </PrevButton>
            <NextButton>
              <Image src={ArrowRight} alt='Arrow Right' />
            </NextButton>
          </Buttons>
        </Controls>
        <EmblaSlideshowContainer className='mx-auto lg:max-w-[90%]'>
          <SlidesContainer className='-m-2'>
            {posts.map((post) => (
              <Slide
                key={post.slug}
                className='w-full flex-none p-4 lg:w-[calc(100%/3)] lg:min-w-[320px]'
              >
                <Card variant='article' className='flex h-full flex-col'>
                  <Card.Image image={post.image} alt={post.title} />
                  <Card.ArticleHeader
                    title={post.title}
                    date={post.date}
                    category={post.category}
                  />
                  <Card.Body>
                    <p className='text-gray-600'>{post.description}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      href={`/blog/${post.slug}`}
                      className='text-blue-600 hover:text-blue-800'
                    >
                      [Read More &gt;]
                    </Link>
                  </Card.Footer>
                </Card>
              </Slide>
            ))}
          </SlidesContainer>
        </EmblaSlideshowContainer>
      </EmblaSlideshow>

      {cta && (
        <div className='flex justify-center'>
          <Button variant={cta.variant || "primary"} href={cta.href}>
            {cta.text}
          </Button>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
