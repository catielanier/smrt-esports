'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Gallery() {
  return (
    <section id={'gallery'} className={'pb-12 pt-16 px-6 bg-primary text-highlight'}>
      <div className={'inner'}>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
        >
          <div>
            <img src="/smrt-2.jpg" className="width-max" alt="" />
          </div>
          <div>
            <img src="/smrt-3.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-4.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-5.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-6.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-7.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-8.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-10.jpg" width={800} height={482} alt="" />
          </div>
          <div>
            <img src="/smrt-11.jpg" width={271} height={482} alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
