import React, { useEffect, useRef } from 'react';
import { ReactComponent as Logo } from 'img/herb-pilica.svg';
import gsap from 'gsap';
import { Component } from './herb.css';
const Herb = () => {
  const wrapper = useRef(null);
  useEffect(() => {
    const [elements] = wrapper.current.children;
    const shield = elements.getElementById('shield');
    const star = elements.getElementById('star');
    const figure = elements.getElementById('figure');
    const tl = gsap.timeline();
    tl.fromTo(
      shield,
      {
        y: '-=110',
        opacity: 0,
      },
      {
        duration: 1,
        y: '+=110',
        opacity: 1,
        ease: 'elastic',
      },
    )
      .fromTo(
        figure,
        { y: '+=15px', opacity: 0 },
        { duration: 1, y: '-=15px', ease: 'back', opacity: 1, stagger: 0.2 },
      )
      .fromTo(
        star,
        { opacity: 0, scale: '-=.2' },
        { duration: 1, opacity: 1, ease: 'back', scale: '+=.2', stagger: 0.2 },
      );
    return () => {};
  }, []);
  return (
    <Component ref={wrapper}>
      <Logo />
    </Component>
  );
};

export default Herb;
