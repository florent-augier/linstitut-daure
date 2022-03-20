import React, { useCallback, useEffect, useRef, useState } from "react";

import "./ScrollTop.css";
// import { TiArrowUpThick } from "react-icons/ti";

import useWindowSize from "../../hooks/WindowWidth";
import useWindowHeight from "../../hooks/WindowHeight";

const ScrollTop = () => {
  // eslint-disable-next-line no-unused-vars
  const width = useWindowSize();
  const height = useWindowHeight();

  const progressRef = useRef(null);

  const [positionY, setPostionY] = useState(0);
  const [negatifY, setNegatifY] = useState(0);

  const [scrolledY, setScrolledY] = useState(0);

  const checkPosition = () => {
    const myDom = document.querySelector("body");
    let cleintY = myDom.getBoundingClientRect().y;
    setPostionY(cleintY);
  };

  useEffect(() => {
    setNegatifY(positionY * -1);
  }, [positionY]);

  const debounce = function (originalFn, delay = 150) {
    let timeout = null;
    // return a new function that's throttled
    return function (...args) {
      // if currently in the timeout, return
      if (timeout) return;
      timeout = setTimeout(() => (timeout = null), delay);
      originalFn(...args);
    };
  };

  function logit() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    setScrolledY(scrolled);
    updateProgress();
  }

  const updateProgress = useCallback(() => {
    if (progressRef.current) {
      const pathLength = progressRef.current.getTotalLength();
      progressRef.current.style.strokeDashoffset =
        scrolledY * (pathLength / 100) * -1;
      progressRef.current.style.transition =
        progressRef.current.style.WebkitTransition = "none";
      progressRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressRef.current.style.transition =
        progressRef.current.style.WebkitTransition =
          "stroke-dashoffset 10ms linear";
    }
  }, [scrolledY]);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", debounce(checkPosition));
  }, []);

  const smoothScroll = {
    timer: null,

    stop: function () {
      clearTimeout(this.timer);
    },

    scrollTo: function (id, callback) {
      var settings = {
        duration: 1000,
        easing: {
          outQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          },
        },
      };
      let percentage;
      let startTime;

      const node = document.getElementById(id);
      var nodeTop = node.offsetTop;
      var nodeHeight = node.offsetHeight;
      var body = document.body;
      var html = document.documentElement;
      var height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      var windowHeight = window.innerHeight;
      var offset = window.pageYOffset;
      var delta = nodeTop - offset;
      var bottomScrollableY = height - windowHeight;
      var targetY =
        bottomScrollableY < delta
          ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
          : delta;

      startTime = Date.now();
      percentage = 0;

      if (this.timer) {
        // clearInterval(this.timer); // this function works
        // eslint-disable-next-line no-restricted-globals
        stop();
      }

      function step() {
        var yScroll;
        var elapsed = Date.now() - startTime;

        if (elapsed > settings.duration) {
          clearTimeout(this.timer);
        }

        percentage = elapsed / settings.duration;

        if (percentage > 1) {
          clearTimeout(this.timer);

          if (callback) {
            callback();
          }
        } else {
          yScroll = settings.easing.outQuint(
            0,
            elapsed,
            offset,
            targetY,
            settings.duration
          );
          window.scrollTo(0, yScroll);
          this.timer = setTimeout(step, 10);
        }
      }

      this.timer = setTimeout(step, 10);
    },
  };

  const handleBottomClick = () => {
    smoothScroll.scrollTo("progress-wrap");
  };

  return (
    negatifY > height && (
      <div
        id="progress-wrap"
        className="progress-wrap"
        onClick={() => handleBottomClick()}
      >
        <svg
          className="progress-circle svg-content"
          width="102%"
          height="102%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a48,48 0 0,1 0,96 a48,48 0 0,1 0,-96"
            ref={progressRef}
          />
        </svg>
      </div>
    )
  );
};

export default ScrollTop;
