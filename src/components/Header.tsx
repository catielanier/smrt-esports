'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faDiscord, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

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
      <div className="hidden md:flex fixed top-3 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-screen-xl px-5">
        <div className="flex items-center justify-between w-full bg-background rounded-md shadow-md py-2 px-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image src="/smrt.png" alt={dict.heading} width={100} height={56} />
          </div>

          {/* Center: Nav Links */}
          <nav className="flex-grow text-center">
            <ul className="flex justify-center space-x-6 uppercase font-heading font-bold">
              <li>
                <Link href="/#home">{dict.header.home}</Link>
              </li>
              <li>
                <Link href="/#about">{dict.header.about}</Link>
              </li>
              <li>
                <Link href="/#mission">{dict.header.mission}</Link>
              </li>
              <li>
                <Link href="/#events">{dict.header.events}</Link>
              </li>
              <li>
                <Link href="/#gallery">{dict.header.gallery}</Link>
              </li>
              <li>
                <Link href="/#sponsors">{dict.header.sponsors}</Link>
              </li>
              <li>
                <Link href="/#contact">{dict.header.contact}</Link>
              </li>
            </ul>
          </nav>

          {/* Right: Socials */}
          <div className="flex space-x-4">
            <Link href="https://x.com/SMRTesports" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link href="https://bsky.app/profile/smrtesports.bsky.social" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBluesky} />
            </Link>
            <Link href="https://www.instagram.com/smrtesports/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://www.youtube.com/@smrtesports" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link href="https://whiff-city-discord.smrtesports.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 block md:hidden mobile-menu-opener">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            changeMenu();
          }}
        >
          <img src="/menu.png" height={35} width={35} alt="Menu" />
        </Link>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 size-full h-screen bg-secondary z-[9999]">
          <div className="fixed top-15px left-15px">
            <img src="/x.png" alt="Close" width={35} height={35} onClick={changeMenu} />
          </div>
          <div className="flex flex-col justify-around items-center font-heading font-bold uppercase h-screen">
            <div>
              <Link href="#home" onClick={changeMenu}>
                {dict.header.home}
              </Link>
            </div>
            <div>
              <Link href="#about" onClick={changeMenu}>
                {dict.header.about}
              </Link>
            </div>
            <div>
              <Link href="#mission" onClick={changeMenu}>
                {dict.header.mission}
              </Link>
            </div>
            <div>
              <Link href="#events" onClick={changeMenu}>
                {dict.header.events}
              </Link>
            </div>
            <div>
              <Link href="#gallery" onClick={changeMenu}>
                {dict.header.gallery}
              </Link>
            </div>
            <div>
              <Link href="#sponsors" onClick={changeMenu}>
                {dict.header.sponsors}
              </Link>
            </div>
            <div>
              <Link href="#contact" onClick={changeMenu}>
                {dict.header.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
