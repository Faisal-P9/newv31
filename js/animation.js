
$(window).on('load', function(){

    gsap.registerPlugin(ScrollTrigger)
    
    // var tl = gsap.timeline({})

    // tl
    // .to('.displayAd', {
    //     delay: 0.1,
    //     scrollTrigger: {
    //         trigger: ".displayAd",
    //         // snap: 0.5,
    //         // markers: true,
    //         // scrub: 1
    //     },
    //     ease: 'expo.out'
    // })

    // .to('.dynamicAd', {
    //     scrollTrigger: {
    //         trigger: ".dynamicAd",
    //         // snap: 0.5,
    //         // markers: true,
    //         // scrub: 1
    //     },
    //     ease: 'expo.out'
    // })

    // .to('.shadowAd', {
    //     scrollTrigger: {
    //         trigger: ".shadowAd",
    //         // snap: 0.5,
    //         // scrub: 1
    //     },
    //     ease: 'expo.out'
    // })


    gsap.from(".displayAd__head", {
        x: '20%',
        y: '15%',
        stagger: 0.2,
        opacity: 0,
        scrollTrigger: {
        trigger: ".displayAd",
        start: "top center",
        // end: "top 30vh",
        // scrub: true,
        toggleActions: "play none none none",
        },
        
    });

    var dynamicTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".dynamicAd",
        start: "top center",
        end: "top center",
        // scrub: true,
        toggleActions: "play none none none",
    }
    })

    dynamicTl
    .from(".dynamicAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    // gsap.from(".dynamicAd__head", {

        
    // });
    .to(".dynamicAd__images--one__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: 'power2.out'})
    .to(".dynamicAd__ams--arrow", { duration: 0.2, opacity: 1, ease: 'power2.out'}, '-=0.1')
    .to(".dynamicAd__ams--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: 'power2.inOut'}, '-=0.1')

    .to(".dynamicAd__images--two__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: 'power2.out'}, '-=0.1')
    .to(".dynamicAd__rot--arrow", { duration: 0.2, opacity: 1, ease: 'power2.out'}, '-=0.1')
    .to(".dynamicAd__rot--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: 'power2.inOut'}, '-=0.1')

    .to(".dynamicAd__images--three__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: 'power2.out'}, '-=0.1')
    .to(".dynamicAd__den--arrow", { duration: 0.2, opacity: 1, ease: 'power2.out'}, '-=0.1')
    .to(".dynamicAd__den--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: 'power2.inOut'}, '-=0.1')



    // gsap.from(".swipe_hand", {
    //   rotation: '15deg',
    //   duration: 0.6,
    //   repeatDelay: 0.3,
    //   repeat: 4,
    //   scrollTrigger: {
    //     trigger: ".displayAd",
    //     start: "top center",
        // end: "top 30vh",
        // scrub: true,
    //     toggleActions: "restart none none none",
    //   }
    // });

    let video = document.querySelector('.weboramaAd__bg--content');

    video.pause();
    function videoPlayPause() {
    if (!video.play()) {
        video.play()
    } else {
        video.play()
    }
    }

    var weboramaAdTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".weboramaAd",
        start: "top center",
        // end: "top 30vh",
        // scrub: true,
        toggleActions: "restart none none none",
    }
    })

    weboramaAdTl
    .to(".weboramaAd__head", {
    x: 0,
    y: 0,
    stagger: 0.2,
    opacity: 1,
    onComplete: videoPlayPause
    })

    .to(".weboramaAd__devices", {
    stagger: 0.2,
    opacity: 1
    })



    var screenWidth = window.innerWidth;


    console.log(screenWidth)

    var shadowAdTl = gsap.timeline({

    scrollTrigger: {
        trigger: ".shadowAd",
        start: "top center",
        // end: "top 30vh",
        // scrub: true,
        // toggleActions: "restart none none none",
    }
    })

    if(screenWidth > 1600) {



    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '94%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-5%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '45%'
    }, 'sc2')

    } else if(screenWidth > 1400 && screenWidth <= 1600) {


    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '92%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-6%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '44%'
    }, 'sc2')

    } else if(screenWidth > 1200 && screenWidth <= 1400) {


    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '94%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-6%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '44%'
    }, 'sc2')

    } else if(screenWidth > 1025 && screenWidth <= 1200) {


    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '92%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-7.4%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '42.5%'
    }, 'sc2')

    } else if(screenWidth > 900 && screenWidth <= 1025) {


    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '95%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-5%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '45%'
    }, 'sc2')

    } else if(screenWidth > 575 && screenWidth <= 900) {


    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '91%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-8%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '42%'
    }, 'sc2')

    } else if(screenWidth > 100 && screenWidth <= 575) {


    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '91%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-8%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '42%'
    }, 'sc2')
    } else {
    
    shadowAdTl
    .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    })


    .add('sc0')
    .to(".after_1", {
    duration: 0.5,
    width: '100%'
    }, 'sc0')
    .to(".scroller", {
    duration: 0.5,
    left: '95%'
    }, 'sc0')

    .add('sc1')
    .to(".after_1", {
    duration: 1,
    width: '0%'
    }, 'sc1')
    .to(".scroller", {
    duration: 1,
    left: '-5%'
    }, 'sc1')

    .add('sc2')
    .to(".after_1", {
    duration: 0.5,
    width: '50%'
    }, 'sc2')
    .to(".scroller", {
    duration: 0.5,
    left: '45%'
    }, 'sc2')
    }


    // gsap.to('.weboramaAd', { duration: 2, scrollTo: 250 });
    // var t3 = gsap.timeline({})

    // .to('.workflow__reveal--content', {
    //     scrollTrigger: {
    //         trigger: ".workflow",
    //         start: "bottom 30px",
    //         // snap: 0.5,
    //         // scrub: 1
    //     },
    //     height: b,
    //     ease: 'expo.out',

    // })

    gsap.to(".header__text", {
    backgroundPosition: "100% -10%",
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        // end: "bottom center",
        scrub: true,
        // markers: true,
        toggleActions: "restart none none none",
    }
    });


    gsap.to(".displayAd__heading", {
    backgroundPosition: "100% 100%",
    scrollTrigger: {
        trigger: ".displayAd",
        start: "top 70vh",
        end: "top -50vh",
        scrub: true,
        toggleActions: "restart none none none",
    }
    });


    gsap.to(".dynamicAd__heading", {
    backgroundPosition: "100% 30%",
    scrollTrigger: {
        trigger: ".dynamicAd",
        start: "top 70vh",
        end: "top -500px",
        scrub: true,
        toggleActions: "restart none none none",
    }
    });


    gsap.to(".weboramaAd__heading", {
    backgroundPosition: "100% -35%",
    scrollTrigger: {
        trigger: ".weboramaAd",
        start: "top 90vh",
        end: "top -500px",
        scrub: true,
        toggleActions: "restart none none none",
    }
    });




    gsap.to(".shadowAd__heading", {
    backgroundPosition: "100% -5%",
    scrollTrigger: {
        trigger: ".shadowAd",
        start: "top 90vh",
        end: "top -500px",
        scrub: true,
        toggleActions: "restart none none none",
    }
    })




});