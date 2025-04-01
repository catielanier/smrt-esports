import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({ dict }: { dict: any }) {
  return (
    <div
      className={
        'navigation-header max-w-screen-md mb-3 mx-auto sticky top-1 z-50 left-1/2 -translate-x-1/2 bg-background px-5 rounded-md'
      }
    >
      <nav>
        <ul className={'flex justify-between items-center uppercase font-heading font-bold'}>
          <li>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/smrt.png`}
              alt={dict.heading}
              width={100}
              height={56}
            />
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
  );
}
