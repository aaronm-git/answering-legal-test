import Article_img_placeholder from "@/images/Article_img_placeholder.jpg";
import cn from "@/lib/utils/cn";
import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @param children
 * @param className
 * @param variant
 *
 * A card component that can be used to display content in a card format.
 *
 * @returns Card component
 */

function Card({
  children,
  className,
  variant
}: CardProps & { variant?: "article" }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[20px] bg-white p-8 opacity-100 shadow",
        variant === "article" && "p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className }: CardProps) {
  return <div className={cn("text-primary", className)}>{children}</div>;
}

function CardBody({ children, className }: CardProps) {
  return <div className={cn("flex-grow", className)}>{children}</div>;
}

function CardFooter({ children, className }: CardProps) {
  return <div className={cn("flex flex-row gap-2", className)}>{children}</div>;
}

function CardImage({
  className,
  image,
  alt
}: {
  className?: string;
  image: StaticImageData | string;
  alt?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-[20px]",
        className
      )}
    >
      <Image
        src={image || Article_img_placeholder}
        alt={alt || ""}
        fill
        className='object-cover'
      />
    </div>
  );
}

function CardArticleHeader({
  title,
  date,
  category
}: {
  title: string;
  date: Date | string;
  category: string;
}) {
  const formattedDate = dayjs(date).format("MMMM D, YYYY");
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-primary text-base font-semibold uppercase'>
        {category}
      </p>
      <div className='border-teal border-l-2 pl-4'>
        <p className='text-gray subtitle2'>{formattedDate}</p>
        <h3 className='subtitle1 line-clamp-2 text-black' title={title}>
          {title}
        </h3>
      </div>
    </div>
  );
}

const CardCompound = Object.assign(Card, {
  Header: CardHeader,
  ArticleHeader: CardArticleHeader,
  Body: CardBody,
  Footer: CardFooter,
  Image: CardImage
});

export default CardCompound;
