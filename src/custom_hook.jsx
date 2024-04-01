import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};
function useWebsite() {
  useEffect(() => {
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      let navbarlinks = select("#navbar .scrollto", true);
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    return () => {
      // Clean up any event listeners or other resources if needed
    };
  }, []);
}

export default useWebsite;

// const is992px = useMediaQuery('(max-width: 992px)')
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const queryList = window.matchMedia(query);
    const updateMatches = (event) => setMatches(event.matches);
    updateMatches(queryList);
    queryList.addEventListener("change", updateMatches);
    return () => {
      queryList.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};
