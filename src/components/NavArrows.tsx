'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function NavArrows() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const anchors: string[] = ['#', '#about', '#mission', '#gallery', '#contact'];
  return (
    <>
      {currentIndex < anchors.length - 1 && (
        <a href={anchors[currentIndex + 1]} onClick={() => setCurrentIndex(currentIndex + 1)}>
          <div className={'fixed bottom-0 right-0'}>
            <FontAwesomeIcon icon={faAnglesDown} />
          </div>
        </a>
      )}
      {currentIndex > 0 && (
        <a href={anchors[currentIndex - 1]} onClick={() => setCurrentIndex(currentIndex - 1)}>
          <div className={'fixed top-0 right-0'}>
            <FontAwesomeIcon icon={faAnglesUp} />
          </div>
        </a>
      )}
    </>
  );
}
