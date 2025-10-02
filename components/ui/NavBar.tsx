"use client";

import HamburgerMenuIcon from "@/images/Hamburger_Menu.svg";
import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from "react-icons/md";

type NavBarContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  openDropdown: string | null;
  setOpenDropdown: (dropdown: string | null) => void;
};

const NavBarContext = createContext<NavBarContextType>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
  openDropdown: null,
  setOpenDropdown: () => {}
});

function NavBar({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <NavBarContext.Provider
      value={{
        mobileMenuOpen,
        setMobileMenuOpen,
        openDropdown,
        setOpenDropdown
      }}
    >
      <div className='bg-[#f6f5f5] lg:gap-4'>
        <div className='flex w-full flex-col lg:mx-auto lg:gap-4'>
          {children}
        </div>
      </div>
    </NavBarContext.Provider>
  );
}

function NavigationTopMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-row justify-end gap-8'>{children}</div>
  );
}

function NavContainerComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-row items-center justify-between gap-4 px-4 py-2 lg:p-8 lg:pt-0 lg:pb-6'>
      {children}
    </div>
  );
}

function MenuComponent({ children }: { children: React.ReactNode }) {
  const { mobileMenuOpen } = useContext(NavBarContext);
  return (
    <>
      {/* Desktop Menu */}
      <div className='hidden flex-row gap-8 lg:flex'>{children}</div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className='bg-midnight-blue fixed inset-0 z-50 flex flex-col lg:hidden'>
          <div className='flex justify-end p-4'>
            <MobileCloseButton />
          </div>
          <div className='flex-1 overflow-y-auto px-7 pb-6'>{children}</div>
        </div>
      )}
    </>
  );
}

function MenuLinkComponent({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <>
      {/* Desktop Link */}
      <div className='hidden lg:block'>
        <Link
          href={href}
          className='text-navy-blue hover:text-primary inline-flex min-h-8 items-start text-[20px] font-semibold transition-colors'
        >
          {children}
        </Link>
      </div>

      {/* Mobile Link */}
      <div className='border-turquoise border-b lg:hidden'>
        <Link
          href={href}
          className='block py-6 text-[28px] font-bold text-white'
        >
          {children}
        </Link>
      </div>
    </>
  );
}

function MenuDropdownComponent({
  label,
  id,
  children
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  const { openDropdown, setOpenDropdown } = useContext(NavBarContext);
  const isOpen = openDropdown === id;

  return (
    <>
      {/* Desktop Dropdown */}
      <div className='relative hidden lg:block'>
        <div className='relative'>
          <button
            type='button'
            onClick={() => setOpenDropdown(isOpen ? null : id)}
            className='text-navy-blue hover:text-primary inline-flex min-h-8 items-center gap-1 text-[20px] font-semibold transition-colors'
          >
            {label}
            <MdKeyboardArrowDown
              className={`size-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div className='bg-turquoise absolute -bottom-1 left-0 h-1 w-full rounded-[8px] transition-all duration-300'></div>
          )}
        </div>

        {isOpen && (
          <div className='absolute top-full left-0 z-50 mt-2 min-w-[400px] rounded-2xl bg-white p-6 shadow-lg'>
            <div className='flex flex-col gap-4'>{children}</div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className='border-turquoise border-b lg:hidden'>
        <button
          type='button'
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          className='flex w-full items-center justify-between py-6 text-left text-[28px] font-bold text-white'
        >
          {label}
          {isOpen ? (
            <MdKeyboardArrowUp className='size-8' />
          ) : (
            <MdKeyboardArrowDown className='size-8' />
          )}
        </button>

        {isOpen && <div className='flex flex-col gap-0 pb-6'>{children}</div>}
      </div>
    </>
  );
}

function DropdownItemComponent({
  icon,
  title,
  description,
  href
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  href: string;
}) {
  return (
    <>
      {/* Desktop Dropdown Item */}
      <Link
        href={href}
        className='hover:bg-pale-blue hidden rounded-lg p-3 transition-colors lg:flex lg:items-start lg:gap-4'
      >
        {icon && <div className='shrink-0'>{icon}</div>}
        <div className='flex flex-col gap-1'>
          <div className='text-navy-blue text-base font-semibold'>{title}</div>
          {description && (
            <div className='text-navy-blue/70 text-sm'>{description}</div>
          )}
        </div>
      </Link>

      {/* Mobile Dropdown Item */}
      <Link
        href={href}
        className='text-turquoise py-3 text-[20px] font-normal lg:hidden'
      >
        {title}
      </Link>
    </>
  );
}

function HamburgerMenuComponent() {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(NavBarContext);
  return (
    <div className='flex w-full flex-row justify-end lg:hidden'>
      <button
        type='button'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <MdClose className='size-12 text-white' />
        ) : (
          <Image
            src={HamburgerMenuIcon}
            alt='Hamburger Menu'
            width={48}
            height={48}
            className='h-12 w-auto'
          />
        )}
      </button>
    </div>
  );
}

function BrandComponent({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className='inline-flex shrink-0 items-center'>
      <Link href={href}>{children}</Link>
    </div>
  );
}

function MobileCloseButtonComponent() {
  const { setMobileMenuOpen } = useContext(NavBarContext);

  return (
    <button
      type='button'
      onClick={() => setMobileMenuOpen(false)}
      aria-label='Close menu'
      className='hover:text-turquoise text-white transition-colors'
    >
      <MdClose className='size-8' />
    </button>
  );
}

function MobileMenuFooterComponent({
  children
}: {
  children: React.ReactNode;
}) {
  const { mobileMenuOpen } = useContext(NavBarContext);

  if (!mobileMenuOpen) return null;

  return (
    <div className='bg-midnight-blue fixed right-0 bottom-0 left-0 z-50 flex flex-col gap-6 px-7 pt-6 pb-10 lg:hidden'>
      {children}
    </div>
  );
}

const Menu = MenuComponent;
const TopMenu = NavigationTopMenu;
const NavContainer = NavContainerComponent;
const HamburgerMenu = HamburgerMenuComponent;
const Brand = BrandComponent;
const MenuLink = MenuLinkComponent;
const MenuDropdown = MenuDropdownComponent;
const DropdownItem = DropdownItemComponent;
const MobileMenuFooter = MobileMenuFooterComponent;
const MobileCloseButton = MobileCloseButtonComponent;

const NavigationCompound = Object.assign(NavBar, {
  Menu,
  TopMenu,
  NavContainer,
  HamburgerMenu,
  Brand,
  MenuLink,
  MenuDropdown,
  DropdownItem,
  MobileMenuFooter
});

export default NavigationCompound;

export {
  Brand,
  DropdownItem,
  HamburgerMenu,
  Menu,
  MenuDropdown,
  MenuLink,
  MobileMenuFooter,
  NavContainer,
  TopMenu
};
