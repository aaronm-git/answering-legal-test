import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import cn from "@/lib/utils/cn";
import Link from "next/link";

const StyleGuideCard = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("rounded-lg bg-gray-200 p-4", className)}>
      {children}
    </div>
  );
};

export default function page() {
  return (
    <div className='container mx-auto flex flex-col gap-4 py-8'>
      <h1 className='h1'>Style Guide</h1>

      <StyleGuideCard className='flex flex-col gap-4'>
        <h2 className='subtitle1'>Typography</h2>
        <h1 className='h1'>H1 Heading</h1>
        <h2 className='h2'>H2 Heading</h2>
        <h3 className='h3'>H3 Heading</h3>
        <h4 className='subtitle1'>Subtitle 1 Heading</h4>
        <h5 className='subtitle2'>Subtitle 2 Heading</h5>
        <p className='body'>Body Text</p>
        <p className='body2'>Body 2 Text</p>
        <small className='small'>Small Text</small>
      </StyleGuideCard>
      <StyleGuideCard className='flex gap-4'>
        <h2 className='subtitle1'>Buttons</h2>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='tertiary'>Tertiary</Button>
      </StyleGuideCard>
      <StyleGuideCard>
        <h2 className='subtitle1'>Cards</h2>
        <div className='flex gap-4'>
          <Card variant='article' className='max-w-md'>
            <Card.Image />
            <Card.ArticleHeader
              title='How Viable Is Remote Work For Lawyers?'
              date='June 6, 2024'
              category='LAWYER WELLNESS'
            />
            <Card.Body>
              <p className='line-clamp-4'>
                This month on the Answering Legal blog, we’ll be covering remote
                work in the legal world. Since the rapid adaptations required by
                quarantine during the COVID-19 pandemic, remote work has
                steadily been on the rise across all sectors of the economy,
                both private and public.
              </p>
            </Card.Body>
            <Card.Footer>
              <Link
                href='#'
                className='text-primary hover:text-navy-blue font-semibold transition-colors duration-300'
              >
                [Read More&gt;]
              </Link>
            </Card.Footer>
          </Card>
        </div>
      </StyleGuideCard>
    </div>
  );
}
