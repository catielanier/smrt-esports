import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SponsorProps {
  dict: {
    sponsors: {
      heading: string;
      brands: { name: string; logo: string; url: string }[];
      contactUs: string;
    };
  };
}

const Sponsors: React.FC<SponsorProps> = ({ dict }) => {
  return (
    <section id="sponsors" className="relative px-6 py-16 bg-secondary text-highlight overflow-hidden">
      {/* Background image ABOVE the section background */}
      <Image
        src="/sponsorbg.png"
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="object-cover z-0 pointer-events-none select-none"
      />
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/30" aria-hidden />

      <div className="inner relative z-20">
        <h2 className="ml-4 md:ml-0 text-3xl font-heading uppercase text-accent font-bold text-center">
          {dict.sponsors.heading}
        </h2>

        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dict.sponsors.brands.map((brand) => {
            const src = brand.logo.startsWith('/') ? brand.logo : `/${brand.logo}`;
            return (
              <li key={brand.name}>
                <Link
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/30 transition shadow-sm hover:shadow-md p-6"
                >
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={src}
                      alt={brand.name}
                      fill
                      sizes="(min-width:768px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <span className="sr-only">{brand.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-12">{dict.sponsors.contactUs}</p>
      </div>
    </section>
  );
};

export default Sponsors;
