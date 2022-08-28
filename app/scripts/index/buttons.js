import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
(() => {
  const backToTopBtn = document.querySelectorAll(".btn-back-on-top");

  backToTopBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      gsap.to(window, { duration: 0.3, scrollTo: 0, ease: "power2.inOut" });
    });
  });
})();
