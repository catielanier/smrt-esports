'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function NavArrows() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const anchors: string[] = ['#home', '#about', '#mission', '#gallery', '#contact'];

  const scrollToIndex = (index: number) => {
    const target = document.querySelector(anchors[index]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <>
      {currentIndex < anchors.length - 1 && (
        <button
          onClick={() => scrollToIndex(currentIndex + 1)}
          className="fixed bottom-2 right-2 p-4 z-50 text-background rounded-full bg-chevron"
        >
          <FontAwesomeIcon icon={faAnglesDown} className="text-2xl" />
        </button>
      )}
      {currentIndex > 0 && (
        <button
          onClick={() => scrollToIndex(currentIndex - 1)}
          className="fixed top-2 right-2 p-4 z-50 rounded-full text-background bg-chevron"
        >
          <FontAwesomeIcon icon={faAnglesUp} className="text-2xl" />
        </button>
      )}
    </>
  );
}
