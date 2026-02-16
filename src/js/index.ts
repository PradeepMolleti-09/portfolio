// @ts-nocheck
import LoconativeScroll from "./vendor/loconative-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { copyText } from "./utils/index";
import { mapEach } from "./utils/dom";
import Time from "./components/Time";

gsap.registerPlugin(ScrollTrigger);

export class Home {
  constructor(scroll) {
    this.locomotive = scroll;
    this.heroTextAnimation();
    this.homeIntro();
    this.homeAnimations();
    this.homeActions();
  }

  homeActions() {
    const toContactButtons = document.querySelectorAll(".contact-scroll");
    const footer = document.getElementById("js-footer");
    const emailButton = document.querySelector("button.email");
    const toCopyText = document.querySelector(".to-copy span");

    mapEach(toContactButtons, (button) => {
      button.onclick = () => {
        this.locomotive.scrollTo(footer);
      };
    });

    if (emailButton) {
      emailButton.addEventListener("click", (e) => {
        copyText(e);
        if (toCopyText) {
          toCopyText.textContent = "copied";
          setTimeout(() => {
            toCopyText.textContent = "Click To Copy";
          }, 2000);
        }
      });
    }
  }

  homeIntro() {
    const tl = gsap.timeline();
    const scrollEl = document.querySelector("[data-scroll-container]");

    gsap.to(scrollEl, {
      autoAlpha: 1,
    });

    tl.from(".home__nav", {
      duration: 0.5,
      delay: 0.3,
      opacity: 0,
      yPercent: -100,
      ease: "power4.out",
    })
      .from(".hero__title [title-overflow]", {
        duration: 0.7,
        yPercent: 100,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      })
      .from(
        ".hero__title .bottom__right",
        {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          ease: "power4.out",
        },
        "<20%"
      )
      .set(".hero__title .overflow", { overflow: "unset" })
      .from(
        ".hero__title .mobile",
        {
          duration: 0.7,
          yPercent: 100,
          stagger: {
            amount: 0.2,
          },
          ease: "power4.out",
        },
        "-=1.4"
      );
  }

  homeAnimations() {
    gsap.to(".home__projects__line", { autoAlpha: 1 });
    gsap.utils.toArray(".home__projects__line").forEach((el) => {
      const line = el.querySelector("span");
      gsap.from(line, {
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          scroller: "[data-scroll-container]",
        },
        scaleX: 0,
      });
    });

    gsap.utils.toArray(".home__projects__project").forEach((el) => {
      const text = el.querySelector(".title__main");
      const link = el.querySelector(".home__projects__project__link");
      gsap.from([text, link], {
        scrollTrigger: {
          trigger: el,
          scroller: "[data-scroll-container]",
        },
        duration: 1.5,
        yPercent: 100,
        stagger: {
          amount: 0.2,
        },
        ease: "power4.out",
      });
    });

    gsap.utils.toArray("[data-fade-in]").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scroller: "[data-scroll-container]",
        },
        duration: 1.5,
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
      });
    });
  }

  heroTextAnimation() {
    gsap.to(".hero__title__dash.desktop", {
      scrollTrigger: {
        trigger: ".hero__title",
        scroller: "[data-scroll-container]",
        scrub: true,
        start: "-8% 9%",
        end: "110% 20%",
      },
      scaleX: 4,
      ease: "none",
    });
  }
}

export function initAnimations() {
  const scrollEl = document.querySelector("[data-scroll-container]");

  // Initialize Time
  new Time();

  if (!scrollEl) return;

  const scroll = new LoconativeScroll({
    el: scrollEl,
    smooth: true,
    lerp: 0.06,
    tablet: {
      breakpoint: 768,
    },
  });

  // Update ScrollTrigger on scroll
  scroll.on("scroll", ScrollTrigger.update);

  // Proxy ScrollTrigger to Locomotive Scroll
  ScrollTrigger.scrollerProxy(scroll.el, {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  // Refresh ScrollTrigger when window updates
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  ScrollTrigger.refresh();

  // Initialize Home animations
  new Home(scroll);

  // Delayed update to ensure everything is rendered
  setTimeout(() => {
    scroll.update();
    ScrollTrigger.refresh();
  }, 1000);

  return scroll;
}
