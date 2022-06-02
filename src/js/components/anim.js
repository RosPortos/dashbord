gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

function loginAnim() {

    let tl = gsap.timeline();

    gsap.fromTo(".login__planet", {
        scale: 0,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "none",
        scrollTrigger: {
            trigger: ".login",
            start: "top bottom",
        }
    });

    tl.from(".elem1", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem2", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem3", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem4", {
        // drawSVG:"0%",
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem5", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".login__tooltip--one", {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem6", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.4,
        ease: "none",
    });

    tl.from(".elem7", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem8", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem9", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem10", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".login__tooltip--two", {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem11", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.4,
        ease: "none",
    });

    tl.from(".elem12", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem13", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem14", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem15", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".login__tooltip--three", {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem16", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.4,
        ease: "none",
    });

    tl.from(".elem17", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem18", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem19", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".elem20", {
        opacity: 0,
        duration: 0.2,
        ease: "none",
    });

    tl.from(".login__tooltip--four", {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "none",
    });

    let tl2 = gsap.timeline();

    tl2.fromTo(".login__planet", {
        y: '-5%',
    }, {
        y: '5%',
        ease: "none",
        duration: 18,
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
            trigger: ".login",
            start: "top bottom",
        }
    });
}

loginAnim();