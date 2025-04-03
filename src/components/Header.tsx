'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ dict }: { dict: any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const changeMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden'; // Prevents scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <div className="hidden md:block navigation-header max-w-screen-md mb-3 mx-auto sticky top-1 left-1/2 -translate-x-1/2 bg-background px-5 rounded-md ">
        <nav>
          <ul className={'flex justify-between items-center uppercase font-heading font-bold'}>
            <li>
              <Image src="/smrt.png" alt={dict.heading} width={100} height={56} />
            </li>
            <li>
              <a href="#">{dict.header.home}</a>
            </li>
            <li>
              <a href="#about">{dict.header.about}</a>
            </li>
            <li>
              <a href="#mission">{dict.header.mission}</a>
            </li>
            <li>
              <a href="#gallery">{dict.header.gallery}</a>
            </li>
            <li>
              <a href="#contact">{dict.header.contact}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="fixed top-0 left-0 block md:hidden mobile-menu-opener">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeMenu();
          }}
        >
          <img src="/menu.png" height={35} width={35} alt="Menu" />
        </a>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 size-full h-screen bg-secondary z-[9999]">
          <div className="fixed top-15px left-15px">
            <img src="/x.png" alt="Close" width={35} height={35} onClick={changeMenu} />
          </div>
          <div className="flex flex-col justify-around items-center font-heading font-bold uppercase h-screen">
            <div>
              <a href="#" onClick={changeMenu}>
                {dict.header.home}
              </a>
            </div>
            <div>
              <a href="#about" onClick={changeMenu}>
                {dict.header.about}
              </a>
            </div>
            <div>
              <a href="#mission" onClick={changeMenu}>
                {dict.header.mission}
              </a>
            </div>
            <div>
              <a href="#gallery" onClick={changeMenu}>
                {dict.header.gallery}
              </a>
            </div>
            <div>
              <a href="#contact" onClick={changeMenu}>
                {dict.header.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
