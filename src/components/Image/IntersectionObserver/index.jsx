import React, { useEffect, useRef } from "react";
import * as Vibrant from "node-vibrant";
import blankGif from '../../../assets/images/blank.gif';

const getMainColor = image => {
  return new Promise((resolve, reject) => {
    const vibrant = new Vibrant(image);
    vibrant
      .getPalette()
      .then(palette => resolve(palette.Vibrant.getHex()))
      .catch(err => reject(err));
  })
}

export default function IntersectionObserver({ imageUrl, imageAlt = "", className }) {
  const imgEl = useRef(null);

  useEffect(() => {    
    const setBackground = async (imageUrl) => {
      try {
        const bgColor = await getMainColor(imageUrl);
        imgEl.current.style.background = bgColor;
      } catch(err) {
        throw new Error(err);
      }      
    };
    setBackground(imageUrl);
    
  },[imageUrl])

  return (
    <>
      <img
        ref={imgEl}
        className={`lazy ${className}`}
        alt={imageAlt}
        src={blankGif}
        data-src={imageUrl}
      />
    </>
  )
};