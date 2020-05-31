// using fullpage.js to structure the scrolling style of the page
new fullpage('#fullpage', {
  autoScrolling: false,
  navigation: true,
  navigationTooltips: ["home", "about us", "contact"],
  showActiveTooltip: true,
  // controlArrows:true,
  // slidesNavigation:true

  onLeave: function(origin, destination, direction) {
    var leavingSection = this;
    var tl = gsap.timeline({
      delay: 0.7
    });
    //after leaving section 2
    if (origin.index == 0 && direction == 'down') {
      //Used greeshock 3 to do the animations.
      tl.fromTo(".presentation", {
          height: 0,
          width: 0
        }, {
          duration: 1,
          width: "50%",
          height: "70%",
          ease: "power4",
          right: "25%"
        })
        .from(".intro-text", {
          opacity: 0,
          duration: 2,
          ease: "power4"
        })
        .from(".hidden-intro", {
          opacity: 0,
          visibility: "visible",
          duration: 1,
          x: 200,
          ease: "power4"
        }, "-=2")
        .to(".hidden-intro", {
          opacity: 100,
          visibility: "visible",
          x: 0
        })
    } else if (origin.index == 1 && direction == 'down') {
      // alert("Going to section 2!");

    } else if (origin.index == 2 && direction == 'down') {
      // alert("Going to section 3!");

    }
    // up
    else if (origin.index == 3 && direction == 'up') {
      // alert("Going to section 2!");

    } else if (origin.index == 2 && direction == 'up') {
      //alert("Going to section 1!");
      tl.fromTo(".presentation", {
          height: 0,
          width: 0
        }, {
          duration: 1,
          width: "50%",
          height: "70%",
          ease: "power4",
          right: "25%"
        })
        .from(".intro-text", {
          opacity: 0,
          duration: 2,
          ease: "power4"
        })
        .from(".hidden-intro", {
          opacity: 0,
          visibility: "visible",
          duration: 1,
          x: 200,
          ease: "power4"
        }, "-=2")
        .to(".hidden-intro", {
          opacity: 100,
          visibility: "visible",
          x: 0
        })
    }
  }
});
