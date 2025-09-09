'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faDiscord, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
      <div className="hidden md:flex fixed top-3 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-screen-lg px-5">
        <div className="flex items-center justify-between w-full bg-background rounded-md shadow-md py-2 px-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Image src="/smrt.png" alt={dict.heading} width={100} height={56} />
          </div>

          {/* Center: Nav Links */}
          <nav className="flex-grow text-center">
            <ul className="flex justify-center space-x-6 uppercase font-heading font-bold">
              <li>
                <a href="#home">{dict.header.home}</a>
              </li>
              <li>
                <a href="#about">{dict.header.about}</a>
              </li>
              <li>
                <a href="#mission">{dict.header.mission}</a>
              </li>
              <li>
                <a href="#events">{dict.header.events}</a>
              </li>
              <li>
                <a href="#gallery">{dict.header.gallery}</a>
              </li>
              <li>
                <a href="#sponsors">{dict.header.sponsors}</a>
              </li>
              <li>
                <a href="#contact">{dict.header.contact}</a>
              </li>
            </ul>
          </nav>

          {/* Right: Socials */}
          <div className="flex space-x-4">
            <a href="https://x.com/SMRTesports" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://bsky.app/profile/smrtesports.bsky.social" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBluesky} />
            </a>
            <a href="https://www.instagram.com/smrtesports/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@smrtesports" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://whiff-city-discord.smrtesports.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
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
              <a href="#home" onClick={changeMenu}>
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
              <a href="#events" onClick={changeMenu}>
                {dict.header.events}
              </a>
            </div>
            <div>
              <a href="#gallery" onClick={changeMenu}>
                {dict.header.gallery}
              </a>
            </div>
            <div>
              <a href="#sponsors" onClick={changeMenu}>
                {dict.header.sponsors}
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
