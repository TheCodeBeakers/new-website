import { useEffect } from 'react';
import style from './binary.Module.css'

const BinaryAnimationComponent = () => {
  const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  class Random {
    static generateBinary() {
      return Math.random() > 0.5 ? 1 : 0;
    }

    static generate(min, max) {
      return Math.floor(Math.random() * max + min);
    }
  }

  class Binary {
    constructor() {
      this.value = Random.generateBinary();
    }

    animate(ts, leftOffset, topOffset) {
      const div = document.createElement('div');
      div.style.fontSize = `${ts}px`;
      div.style.top = `${topOffset * (ts / 2)}px`;
      div.style.left = `${leftOffset}px`;
      div.textContent = this.value;
      div.classList.add('binary');
      div.style.display = 'none';
      document.body.appendChild(div);

      div.style.display = 'block';
      div.classList.add('animated', 'fadeIn');
      div.addEventListener(animationEnd, this.fadeInEnd);

      return div.offsetTop;
    }

    fadeInEnd(event) {
      const binary = event.currentTarget;
      binary.classList.remove('animated', 'fadeIn');
      binary.classList.add('animated', 'fadeOut');
      binary.addEventListener(animationEnd, function () {
        binary.remove();
      });
    }
  }

  class BinaryLine {
    constructor(lO, tS, dS) {
      this.leftOffset = lO;
      this.textSize = tS;
      this.documentSize = dS;
    }

    generate() {
      let iterator = 1;
      const fontSize = this.textSize;
      const documentSize = this.documentSize;
      const currentOffset = 0;
      const leftOffset = this.leftOffset;
      const interval = setInterval(() => {
        if (currentOffset < documentSize) {
          const binary = new Binary();
          binary.animate(fontSize, leftOffset, iterator);
          iterator++;
        } else {
          clearInterval(interval);
        }
      }, 80);
    }
  }

  class BinaryAnimation {
    start() {
      setInterval(() => {
        new BinaryLine(
          Random.generate(0, window.innerWidth),
          Random.generate(window.innerWidth * 0.002, window.innerWidth * 0.008),
          window.innerHeight
        ).generate();
      }, 400);

      setInterval(() => {
        document.querySelectorAll('.binary').forEach((element) => element.remove());
      }, 30000);
    }
  }

  useEffect(() => {
    const binaryAnimation = new BinaryAnimation();
    binaryAnimation.start();
  }, []);

  return null;
};

export default BinaryAnimationComponent;