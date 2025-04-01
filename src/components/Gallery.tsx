'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Gallery() {
  return (
    <section id={'gallery'} className={'py-12 px-6 bg-primary text-highlight'}>
      <div className={'inner'}>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
          <div>
            <img src="/smrt-1.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-2.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-3.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-4.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-5.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-6.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-7.jpg" alt="" />
          </div>
          <div>
            <img src="/smrt-8.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
