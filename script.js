gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
ScrollSmoother.create({
  smooth: 2,
  effects: true,
});

function animarPagina() {
  // Animações hero
  gsap.from(".hero", { opacity: 0, duration: 3 });

  gsap.from("picture:nth-child(2)", { y: 60, duration: 1 });

  gsap.from("picture:nth-child(1)", { y: -60, duration: 1 });

  //Animações cards
  gsap.from(".card", {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    stagger: 0.3,

    scrollTrigger: {
      trigger: ".cards",
      start: "0% 80%",
      end: "100% 70% ",
      scrub: true,
    },
  });

  // //Animações da lista de cidades
  // gsap.from(".secaoAgradecimentos ul li", {
  //   opacity: 0,
  //   x: 30,
  //   filter: "blur(10px)",
  //   stagger: 0.3,

  //   scrollTrigger: {
  //     trigger: ".secaoAgradecimentos ul",
  //     start: "0% 80%",
  //     end: "100% 70% ",
  //     scrub: true,
  //   },
  // });

  //Animações footer
  gsap.from("footer", {
    y: "-55%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  //Letras animadas

  //Seleciona todos os elementos que tem a class="textoSplit"
  const todosTextoSplit = document.querySelectorAll(".textoSplit");

  //Animar cada elemento desse grupamento -> forEach
  todosTextoSplit.forEach((unicoTextoSplit) => {
    const textoSplit = SplitText.create(unicoTextoSplit, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(textoSplit.chars, {
      y: 30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: unicoTextoSplit,
      },
    });
  });
}

//Pré loader -> Cria time line

const tl = gsap.timeline({
  onComplete() {
    animarPagina();
    gsap.to("#preLoader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to("#preLoader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preLoader path", {
  fill: "rgba(168, 19, 19)",
  duration: 0.5,
  strokeDashoffset: 0,
});
