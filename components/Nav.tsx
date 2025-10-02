import Link from "next/link";

export default function Nav() {
  return (
    <div className='flex gap-4 bg-gray-200 p-4'>
      <Link href='/' className='hover:text-navy-blue text-black'>
        Home
      </Link>
      <Link href='/style-guide' className='hover:text-navy-blue text-black'>
        Style Guide
      </Link>
    </div>
  );
}
