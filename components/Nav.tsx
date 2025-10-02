import NavBar, {
  Brand,
  DropdownItem,
  HamburgerMenu,
  Menu,
  MenuDropdown,
  MenuLink,
  MobileMenuFooter,
  NavContainer,
  TopMenu
} from "@/components/ui/NavBar";
import Logo from "@/images/Answering LegalTM_Blue.png";
import SearchIcon from "@/images/Search.svg";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function NavComponent() {
  return (
    <NavBar>
      <TopMenu>
        <Link
          href='#'
          className='bg-primary flex w-full flex-row items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white lg:hidden'
        >
          Try for free here <MdOutlineArrowRightAlt className='size-6' />
        </Link>

        <div className='hidden w-full justify-end gap-8 px-8 pt-8 lg:flex'>
          <Link href='#' className='text-gray text-[20px] underline'>
            Support
          </Link>
          <Link href='tel:(631) 686 9700' className='text-link text-[20px]'>
            (631) 686 9700
          </Link>
        </div>
      </TopMenu>
      <NavContainer>
        <Brand href='/'>
          <Image
            src={Logo}
            alt='Answering Legal'
            width={293}
            height={48}
            className='h-12 w-auto'
          />
        </Brand>
        <HamburgerMenu />
        <Menu>
          <MenuDropdown label='Products' id='products'>
            <DropdownItem
              title='24/7 Live Virtual Receptionists'
              description='24/7 live answering'
              href='#'
            />
            <DropdownItem title='Bilingual receptionists' href='#' />
            <DropdownItem title='Full legal intake' href='#' />
            <DropdownItem title='Integrations' href='#' />
            <DropdownItem title='Mobile app' href='#' />
            <DropdownItem title='AI-powered chatbot' href='#' />
            <DropdownItem title='Live translation services' href='#' />
          </MenuDropdown>

          <MenuDropdown label='About' id='about'>
            <DropdownItem title='Our Story' href='#' />
            <DropdownItem title='Team' href='#' />
            <DropdownItem title='Careers' href='#' />
            <DropdownItem title='Contact Us' href='#' />
          </MenuDropdown>

          <MenuDropdown label='Resources' id='resources'>
            <DropdownItem title='Blog' href='#' />
            <DropdownItem title='Case Studies' href='#' />
            <DropdownItem title='Help Center' href='#' />
            <DropdownItem title='API Documentation' href='#' />
          </MenuDropdown>

          <MenuLink href='#'>Pricing</MenuLink>
        </Menu>

        <MobileMenuFooter>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3 rounded-lg bg-white px-4 py-3'>
              <input
                type='text'
                placeholder='Search'
                className='text-navy-blue placeholder:text-gray flex-1 bg-transparent text-base outline-none'
              />
              <Image
                src={SearchIcon}
                alt='Search'
                width={24}
                height={24}
                className='size-6'
              />
            </div>

            <Link
              href='#'
              className='text-center text-[20px] font-semibold text-white underline'
            >
              Support
            </Link>

            <Link
              href='tel:(631) 686 9700'
              className='text-center text-[24px] font-bold text-white'
            >
              (631) 686-9700
            </Link>

            <Link
              href='#'
              className='bg-primary rounded-xl px-6 py-4 text-center text-base font-semibold text-white'
            >
              Try for free
            </Link>
          </div>
        </MobileMenuFooter>

        <div className='hidden flex-row gap-2 lg:flex'>
          <button type='button' aria-label='Search button'>
            <Image
              src={SearchIcon}
              alt='Search button'
              width={32}
              height={32}
              className='size-8'
            />
          </button>
          <Link
            href='#'
            className='bg-primary rounded-xl px-4 py-3 text-base font-semibold text-white'
          >
            Try for free
          </Link>
        </div>
      </NavContainer>
    </NavBar>
  );
}
