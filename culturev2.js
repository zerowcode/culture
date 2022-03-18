$(function() {
    setTimeout(function () {
      $(".sec-01 .content").addClass("arrive");
    }, 500);
    if ($("body").hasClass("desktop") == true) {
      var controller = new ScrollMagic.Controller();
      var bgtween = new TweenMax.to(".culture-bg", 1, {
        "-webkit-transform": "scale(1) ",
        "-moz-transform": "scale(1)",
        transform: "scale(1)",
      });
      var bgscene = new ScrollMagic.Scene({
        triggerElement: ".sec-01 .t2",
        duration: "75%",
      })
        .setTween(bgtween)
        .addTo(controller);
      var sec1tween1 = new TweenMax.to(".sec-01 .three-guys", 1, {
        "-webkit-transform": "translate(-800px, -200px)",
        "-moz-transform": "translate(-800px, -200px)",
        transform: "translate(-800px, -200px)",
      });
      var sec1scene1 = new ScrollMagic.Scene({
        triggerElement: ".sec-01 .t2",
        duration: "74%",
      })
        .setTween(sec1tween1)
        .addTo(controller);
      var sec1tween2 = new TweenMax.to(".sec-01 .snowboarder", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(200px, 100px) rotate(45deg)",
        "-moz-transform": "translate(200px, 100px) rotate(45deg)",
        transform: "translate(200px, 100px) rotate(45deg)",
      });
      var sec1scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-01 .t2",
        duration: "99%",
      })
        .setTween(sec1tween2)
        .addTo(controller);
      var sec1tween3 = new TweenMax.to(".sec-01 .snowboarder", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(300px, 150px) rotate(68deg)",
        "-moz-transform": "translate(300px, 150px) rotate(68deg)",
        transform: "translate(300px, 150px) rotate(68deg)",
      });
      var sec1scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-03",
        duration: "50%",
      })
        .setTween(sec1tween3)
        .addTo(controller);
      var sec1tween4 = new TweenMax.to(".sec-01 .splash-2", 1, {
        "-webkit-transform": "translate(-200px, -100px) rotate(-10deg)",
        "-moz-transform": "translate(-200px, -100px) rotate(-10deg)",
        transform: "translate(-200px, -100px) rotate(-10deg)",
      });
      var sec1scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-01 .t3",
        duration: "50%",
      })
        .setTween(sec1tween4)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-02" })
        .setClassToggle(".sec-02 .content", "arrive")
        .addTo(controller);
      var sec2tween2 = new TweenMax.to(".sec-02 .topo", 1, {
        "-webkit-transform": "translate(0px, 0px) scale(1)",
        "-moz-transform": "translate(0px, 0px) scale(1)",
        transform: "translate(0px, 0px) scale(1)",
      });
      var sec2scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-01 .t2",
        duration: "75%",
      })
        .setTween(sec2tween2)
        .addTo(controller);
      var sec2tween3 = new TweenMax.to(".sec-02 .topo", 1, {
        "-webkit-transform": "translate(200px, -200px) scale(.75)",
        "-moz-transform": "translate(200px, -200px) scale(.75)",
        transform: "translate(200px, -200px) scale(.75)",
      });
      var sec2scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-02 .t2",
        duration: "75%",
      })
        .setTween(sec2tween3)
        .addTo(controller);
      var sec2tween5 = new TweenMax.to(".sec-02 .cloud", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec2scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-01 .t2",
        duration: "75%",
      })
        .setTween(sec2tween5)
        .addTo(controller);
      var sec2tween6 = new TweenMax.to(".sec-02 .cloud", 1, {
        "-webkit-transform": "translate(-700px, -300px)",
        "-moz-transform": "translate(-700px, -300px)",
        transform: "translate(-700px, -300px)",
      });
      var sec2scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-02 .t2",
        duration: "100%",
      })
        .setTween(sec2tween6)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-03 .t1" })
        .setClassToggle(".sec-03 .content", "arrive")
        .addTo(controller);
      var sec3tween3 = new TweenMax.to(".sec-03 .topo", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-02 .t2",
        duration: "75%",
      })
        .setTween(sec3tween3)
        .addTo(controller);
      var sec3tween4 = new TweenMax.to(".sec-03 .hop-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-02 .t2",
        duration: "75%",
      })
        .setTween(sec3tween4)
        .addTo(controller);
      var sec3tween5 = new TweenMax.to(".sec-03 .splash-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-03",
        duration: "50%",
      })
        .setTween(sec3tween5)
        .addTo(controller);
      var sec3tween6 = new TweenMax.to(".sec-03 .splash-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-03",
        duration: "50%",
      })
        .setTween(sec3tween6)
        .addTo(controller);
      var sec3tween7 = new TweenMax.to(".sec-03 .guys-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene7 = new ScrollMagic.Scene({
        triggerElement: ".sec-03",
        duration: "50%",
      })
        .setTween(sec3tween7)
        .addTo(controller);
      var sec3tween8 = new TweenMax.to(".sec-03 .guys-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene8 = new ScrollMagic.Scene({
        triggerElement: ".sec-02 .t2",
        duration: "75%",
      })
        .setTween(sec3tween8)
        .addTo(controller);
      var sec3tween9 = new TweenMax.to(".sec-03 .guys-3", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec3scene9 = new ScrollMagic.Scene({
        triggerElement: ".sec-02 .t2",
        duration: "75%",
      })
        .setTween(sec3tween9)
        .addTo(controller);
      var sec3tween9 = new TweenMax.to(".sec-03 .topo", 1, {
        "-webkit-transform": "translate(-300px, -300px) scale(.75)",
        "-moz-transform": "translate(-300px, -300px) scale(.75)",
        transform: "translate(-300px, -300px) scale(.75)",
      });
      var sec3scene9 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "75%",
      })
        .setTween(sec3tween9)
        .addTo(controller);
      var sec3tween10 = new TweenMax.to(".sec-03 .hop-1", 1, {
        "-webkit-transform": "translate(-700px, -200px)",
        "-moz-transform": "translate(-700px, -200px)",
        transform: "translate(-700px, -200px)",
      });
      var sec3scene10 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "50%",
      })
        .setTween(sec3tween10)
        .addTo(controller);
      var sec3tween11 = new TweenMax.to(".sec-03 .guys-1", 1, {
        "-webkit-transform": "translate(500px, -300px) rotate(15deg)",
        "-moz-transform": "translate(500px, -300px) rotate(15deg)",
        transform: "translate(500px, -300px) rotate(15deg)",
      });
      var sec3scene11 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "75%",
      })
        .setTween(sec3tween11)
        .addTo(controller);
      var sec3tween12 = new TweenMax.to(".sec-03 .guys-2", 1, {
        "-webkit-transform": "translate(300px, -500px) rotate(-15deg)",
        "-moz-transform": "translate(300px, -500px) rotate(-15deg)",
        transform: "translate(300px, -500px) rotate(-15deg)",
      });
      var sec3scene12 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "75%",
      })
        .setTween(sec3tween12)
        .addTo(controller);
      var sec3tween13 = new TweenMax.to(".sec-03 .guys-3", 1, {
        "-webkit-transform": "translate(0px, 0px) rotate(-15deg)",
        "-moz-transform": "translate(0px, 0px) rotate(-15deg)",
        transform: "translate(0px, 0px) rotate(-15deg)",
      });
      var sec3scene13 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "75%",
      })
        .setTween(sec3tween13)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-04 .t1" })
        .setClassToggle(".sec-04 .content", "arrive")
        .addTo(controller);
      var sec4tween1 = new TweenMax.to(".sec-04 .ocean", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec4scene1 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "100%",
      })
        .setTween(sec4tween1)
        .addTo(controller);
      var sec4tween2 = new TweenMax.to(".sec-04 .ocean", 1, {
        "-webkit-transform": "translate(-200px, -200px) scale(.75)",
        "-moz-transform": "translate(-200px, -200px) scale(.75)",
        transform: "translate(-200px, -200px) scale(.75)",
      });
      var sec4scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "100%",
      })
        .setTween(sec4tween2)
        .addTo(controller);
      var sec4tween3 = new TweenMax.to(".sec-04 .guys-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec4scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t3",
        duration: "75%",
      })
        .setTween(sec4tween3)
        .addTo(controller);
      var sec4tween4 = new TweenMax.to(".sec-04 .guys-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec4scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t3",
        duration: "75%",
      })
        .setTween(sec4tween4)
        .addTo(controller);
      var sec4tween5 = new TweenMax.to(".sec-04 .guys-3", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec4scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-03 .t2",
        duration: "100%",
      })
        .setTween(sec4tween5)
        .addTo(controller);
      var sec4tween6 = new TweenMax.to(".sec-04 .guys-1", 1, {
        "-webkit-transform": "translate(-300px, -200px)",
        "-moz-transform": "translate(-300px, -200px)",
        transform: "translate(-300px, -200px)",
      });
      var sec4scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "50%",
      })
        .setTween(sec4tween6)
        .addTo(controller);
      var sec4tween7 = new TweenMax.to(".sec-04 .guys-2", 1, {
        "-webkit-transform": "translate(-600px, -600px)",
        "-moz-transform": "translate(-600px, -600px)",
        transform: "translate(-600px, -600px)",
      });
      var sec4scene7 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "100%",
      })
        .setTween(sec4tween7)
        .addTo(controller);
      var sec4tween8 = new TweenMax.to(".sec-04 .guys-3", 1, {
        "-webkit-transform": "translate(-400px, -400px)",
        "-moz-transform": "translate(-400px, -400px)",
        transform: "translate(-400px, -400px)",
      });
      var sec4scene8 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "50%",
      })
        .setTween(sec4tween8)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-05 .t1" })
        .setClassToggle(".sec-05 .content", "arrive")
        .addTo(controller);
      var sec5tween1 = new TweenMax.to(".sec-05 .topo-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec5scene1 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "100%",
      })
        .setTween(sec5tween1)
        .addTo(controller);
      var sec5tween2 = new TweenMax.to(".sec-05 .topo-1", 1, {
        "-webkit-transform": "translate(-200px, -200px) scale(.75)",
        "-moz-transform": "translate(-200px, -200px) scale(.75)",
        transform: "translate(-200px, -200px) scale(.75)",
      });
      var sec5scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "100%",
      })
        .setTween(sec5tween2)
        .addTo(controller);
      var sec5tween3 = new TweenMax.to(".sec-05 .topo-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec5scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "100%",
      })
        .setTween(sec5tween3)
        .addTo(controller);
      var sec5tween4 = new TweenMax.to(".sec-05 .topo-2", 1, {
        "-webkit-transform": "translate(-200px, -200px) scale(.75)",
        "-moz-transform": "translate(-200px, -200px) scale(.75)",
        transform: "translate(-200px, -200px) scale(.75)",
      });
      var sec5scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "100%",
      })
        .setTween(sec5tween4)
        .addTo(controller);
      var sec5tween5 = new TweenMax.to(".sec-05 .skater", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(0px, 0px) rotate(0deg)",
        "-moz-transform": "translate(0px, 0px) rotate(0deg)",
        transform: "translate(0px, 0px) rotate(0deg)",
      });
      var sec5scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t3",
        duration: "75%",
      })
        .setTween(sec5tween5)
        .addTo(controller);
      var sec5tween5 = new TweenMax.to(".sec-05 .skater", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(500px, 200px) rotate(15deg)",
        "-moz-transform": "translate(500px, 200px) rotate(15deg)",
        transform: "translate(500px, 200px) rotate(15deg)",
      });
      var sec5scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "75%",
      })
        .setTween(sec5tween5)
        .addTo(controller);
      var sec5tween6 = new TweenMax.to(".sec-05 .biker-1", 1, {
        "-webkit-transform": "translate(0px, 0px) rotate(0deg)",
        "-moz-transform": "translate(0px, 0px) rotate(0deg)",
        transform: "translate(0px, 0px) rotate(0deg)",
      });
      var sec5scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t1",
        duration: "75%",
      })
        .setTween(sec5tween6)
        .addTo(controller);
      var sec5tween7 = new TweenMax.to(".sec-05 .biker-1", 1, {
        "-webkit-transform": "translate(-300px, 200px) rotate(70deg)",
        "-moz-transform": "translate(-300px, 200px) rotate(70deg)",
        transform: "translate(-300px, 200px) rotate(70deg)",
      });
      var sec5scene7 = new ScrollMagic.Scene({
        triggerElement: ".sec-06",
        duration: "75%",
      })
        .setTween(sec5tween7)
        .addTo(controller);
      var sec5tween8 = new TweenMax.to(".sec-05 .climb", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec5scene8 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t3",
        duration: "75%",
      })
        .setTween(sec5tween8)
        .addTo(controller);
      var sec5tween9 = new TweenMax.to(".sec-05 .climb", 1, {
        "-webkit-transform": "translate(-400px, -300px)",
        "-moz-transform": "translate(-400px, -300px)",
        transform: "translate(-400px, -300px)",
      });
      var sec5scene9 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "100%",
      })
        .setTween(sec5tween9)
        .addTo(controller);
      var sec5tween10 = new TweenMax.to(".sec-05 .ski", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec5scene10 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t2",
        duration: "75%",
      })
        .setTween(sec5tween10)
        .addTo(controller);
      var sec5tween11 = new TweenMax.to(".sec-05 .ski", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(-700px, -200px) rotate(35deg)",
        "-moz-transform": "translate(-700px, -200px) rotate(35deg)",
        transform: "translate(-700px, -200px) rotate(35deg)",
      });
      var sec5scene11 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t1",
        duration: "75%",
      })
        .setTween(sec5tween11)
        .addTo(controller);
      var sec5tween12 = new TweenMax.to(".sec-05 .tube", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec5scene12 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t3",
        duration: "75%",
      })
        .setTween(sec5tween12)
        .addTo(controller);
      var sec5tween13 = new TweenMax.to(".sec-05 .tube", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(300px, -600px)",
        "-moz-transform": "translate(300px, -600px)",
        transform: "translate(300px, -600px)",
      });
      var sec5scene13 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "75%",
      })
        .setTween(sec5tween13)
        .addTo(controller);
      var sec5tween14 = new TweenMax.to(".sec-05 .biker-2", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec5scene14 = new ScrollMagic.Scene({
        triggerElement: ".sec-04 .t3",
        duration: "75%",
      })
        .setTween(sec5tween14)
        .addTo(controller);
      var sec5tween15 = new TweenMax.to(".sec-05 .biker-2", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(400px, -500px) rotate(-25deg)",
        "-moz-transform": "translate(400px, -500px) rotate(-25deg)",
        transform: "translate(400px, -500px) rotate(-25deg)",
      });
      var sec5scene15 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "75%",
      })
        .setTween(sec5tween15)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-06 .t1" })
        .setClassToggle(".sec-06 .content", "arrive")
        .addTo(controller);
      var sec6tween1 = new TweenMax.to(".sec-06 .topo-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec6scene1 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t2",
        duration: "75%",
      })
        .setTween(sec6tween1)
        .addTo(controller);
      var sec6tween2 = new TweenMax.to(".sec-06 .topo-1", 1, {
        "-webkit-transform": "translate(-200px, -200px) scale(.75)",
        "-moz-transform": "translate(-200px, -200px) scale(.75)",
        transform: "translate(-200px, -200px) scale(.75)",
      });
      var sec6scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec6tween2)
        .addTo(controller);
      var sec6tween3 = new TweenMax.to(".sec-06 .cloud-1", 1, {
        "-webkit-transform": "translate(700px, -400px)",
        "-moz-transform": "translate(700px, -400px)",
        transform: "translate(700px, -400px)",
      });
      var sec6scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t3",
        duration: "125%",
      })
        .setTween(sec6tween3)
        .addTo(controller);
      var sec6tween4 = new TweenMax.to(".sec-06 .cloud-2", 1, {
        "-webkit-transform": "translate(500px, -300px)",
        "-moz-transform": "translate(500px, -300px)",
        transform: "translate(500px, -300px)",
      });
      var sec6scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-05 .t3",
        duration: "125%",
      })
        .setTween(sec6tween4)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-07 .t1" })
        .setClassToggle(".sec-07 .content", "arrive")
        .addTo(controller);
      var sec7tween2 = new TweenMax.to(".sec-07 .forest-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-06",
        duration: "75%",
      })
        .setTween(sec7tween2)
        .addTo(controller);
      var sec7tween2 = new TweenMax.to(".sec-07 .forest-1", 1, {
        "-webkit-transform": "translate(200px, -200px)",
        "-moz-transform": "translate(200px, -200px)",
        transform: "translate(200px, -200px)",
      });
      var sec7scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t1",
        duration: "100%",
      })
        .setTween(sec7tween2)
        .addTo(controller);
      var sec7tween3 = new TweenMax.to(".sec-07 .cloud", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween3)
        .addTo(controller);
      var sec7tween4 = new TweenMax.to(".sec-07 .ocean", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween4)
        .addTo(controller);
      var sec7tween5 = new TweenMax.to(".sec-07 .ocean", 1, {
        "-webkit-transform": "translate(200px, -100px)",
        "-moz-transform": "translate(200px, -100px)",
        transform: "translate(200px, -100px)",
      });
      var sec7scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t2",
        duration: "100%",
      })
        .setTween(sec7tween5)
        .addTo(controller);
      var sec7tween6 = new TweenMax.to(".sec-07 .tube-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween6)
        .addTo(controller);
      var sec7tween7 = new TweenMax.to(".sec-07 .tube-1", 1, {
        "-webkit-transform": "translate(-400px, -200px)",
        "-moz-transform": "translate(-400px, -200px)",
        transform: "translate(-400px, -200px)",
      });
      var sec7scene7 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t2",
        duration: "75%",
      })
        .setTween(sec7tween7)
        .addTo(controller);
      var sec7tween8 = new TweenMax.to(".sec-07 .snowboarder-1", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene8 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween8)
        .addTo(controller);
      var sec7tween9 = new TweenMax.to(".sec-07 .snowboarder-1", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(-600px, 200px)",
        "-moz-transform": "translate(-600px, 200px)",
        transform: "translate(-600px, 200px)",
      });
      var sec7scene9 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t2",
        duration: "75%",
      })
        .setTween(sec7tween9)
        .addTo(controller);
      var sec7tween10 = new TweenMax.to(".sec-07 .bike-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene10 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween10)
        .addTo(controller);
      var sec7tween11 = new TweenMax.to(".sec-07 .bike-1", 1, {
        "-webkit-transform": "translate(400px, -400px)",
        "-moz-transform": "translate(400px, -400px)",
        transform: "translate(400px, -400px)",
        "-webkit-opacity": "0",
        "-moz-opacity": "0",
        opacity: "0",
      });
      var sec7scene11 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t2",
        duration: "100%",
      })
        .setTween(sec7tween11)
        .addTo(controller);
      var sec7tween12 = new TweenMax.to(".sec-07 .guys-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene12 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween12)
        .addTo(controller);
      var sec7tween13 = new TweenMax.to(".sec-07 .guys-1", 1, {
        "-webkit-transform": "translate(300px, -400px)",
        "-moz-transform": "translate(300px, -400px)",
        transform: "translate(300px, -400px)",
      });
      var sec7scene13 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t2",
        duration: "75%",
      })
        .setTween(sec7tween13)
        .addTo(controller);
      var sec7tween14 = new TweenMax.to(".sec-07 .guys-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec7scene14 = new ScrollMagic.Scene({
        triggerElement: ".sec-06 .t2",
        duration: "75%",
      })
        .setTween(sec7tween14)
        .addTo(controller);
      var sec7tween15 = new TweenMax.to(".sec-07 .guys-2", 1, {
        "-webkit-transform": "translate(200px, -500px)",
        "-moz-transform": "translate(200px, -500px)",
        transform: "translate(200px, -500px)",
      });
      var sec7scene15 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t2",
        duration: "75%",
      })
        .setTween(sec7tween15)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-08 .t1" })
        .setClassToggle(".sec-08 .content", "arrive")
        .addTo(controller);
      var sec8tween1 = new TweenMax.to(".sec-08 .topo-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene1 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween1)
        .addTo(controller);
      var sec8tween2 = new TweenMax.to(".sec-08 .topo-1", 1, {
        "-webkit-transform": "translate(200px, -200px) scale(.75)",
        "-moz-transform": "translate(200px, -200px) scale(.75)",
        transform: "translate(200px, -200px) scale(.75)",
      });
      var sec8scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "100%",
      })
        .setTween(sec8tween2)
        .addTo(controller);
      var sec8tween3 = new TweenMax.to(".sec-08 .topo-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween3)
        .addTo(controller);
      var sec8tween4 = new TweenMax.to(".sec-08 .topo-2", 1, {
        "-webkit-transform": "translate(200px, -200px) scale(.75)",
        "-moz-transform": "translate(200px, -200px) scale(.75)",
        transform: "translate(200px, -200px) scale(.75)",
      });
      var sec8scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "100%",
      })
        .setTween(sec8tween4)
        .addTo(controller);
      var sec8tween5 = new TweenMax.to(".sec-08 .snowboarder-1", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween5)
        .addTo(controller);
      var sec8tween6 = new TweenMax.to(".sec-08 .snowboarder-1", 1, {
        ease: Linear.easeNone,
        "-webkit-transform": "translate(600px, 100px) rotate(45deg)",
        "-moz-transform": "translate(600px, 100px) rotate(45deg)",
        transform: "translate(600px, 100px) rotate(45deg)",
      });
      var sec8scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "75%",
      })
        .setTween(sec8tween6)
        .addTo(controller);
      var sec8tween7 = new TweenMax.to(".sec-08 .splash-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene7 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween7)
        .addTo(controller);
      var sec8tween8 = new TweenMax.to(".sec-08 .splash-1", 1, {
        "-webkit-transform": "translate(400px, -200px)",
        "-moz-transform": "translate(400px, -200px)",
        transform: "translate(400px, -200px)",
      });
      var sec8scene8 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "75%",
      })
        .setTween(sec8tween8)
        .addTo(controller);
      var sec8tween9 = new TweenMax.to(".sec-08 .splash-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene9 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween9)
        .addTo(controller);
      var sec8tween10 = new TweenMax.to(".sec-08 .splash-2", 1, {
        "-webkit-transform": "translate(500px, -100px)",
        "-moz-transform": "translate(500px, -100px)",
        transform: "translate(500px, -100px)",
      });
      var sec8scene10 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "75%",
      })
        .setTween(sec8tween10)
        .addTo(controller);
      var sec8tween11 = new TweenMax.to(".sec-08 .guys-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene11 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween11)
        .addTo(controller);
      var sec8tween12 = new TweenMax.to(".sec-08 .guys-1", 1, {
        "-webkit-transform": "translate(400px, -200px)",
        "-moz-transform": "translate(400px, -200px)",
        transform: "translate(400px, -200px)",
      });
      var sec8scene12 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "100%",
      })
        .setTween(sec8tween12)
        .addTo(controller);
      var sec8tween13 = new TweenMax.to(".sec-08 .guys-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec8scene13 = new ScrollMagic.Scene({
        triggerElement: ".sec-07 .t3",
        duration: "75%",
      })
        .setTween(sec8tween13)
        .addTo(controller);
      var sec8tween14 = new TweenMax.to(".sec-08 .guys-2", 1, {
        "-webkit-transform": "translate(500px, -200px)",
        "-moz-transform": "translate(500px, -200px)",
        transform: "translate(500px, -200px)",
      });
      var sec8scene14 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "100%",
      })
        .setTween(sec8tween14)
        .addTo(controller);
      new ScrollMagic.Scene({ triggerElement: ".sec-09 .t1" })
        .setClassToggle(".sec-09 .content", "arrive")
        .addTo(controller);
      var sec9tween1 = new TweenMax.to(".sec-09 .topo", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec9scene1 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "75%",
      })
        .setTween(sec9tween1)
        .addTo(controller);
      var sec9tween2 = new TweenMax.to(".sec-09 .ocean", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec9scene2 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t2",
        duration: "75%",
      })
        .setTween(sec9tween2)
        .addTo(controller);
      var sec9tween3 = new TweenMax.to(".sec-09 .guys-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec9scene3 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t3",
        duration: "85%",
      })
        .setTween(sec9tween3)
        .addTo(controller);
      var sec9tween4 = new TweenMax.to(".sec-09 .guys-2", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec9scene4 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t3",
        duration: "85%",
      })
        .setTween(sec9tween4)
        .addTo(controller);
      var sec9tween5 = new TweenMax.to(".sec-09 .guys-3", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec9scene5 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t3",
        duration: "75%",
      })
        .setTween(sec9tween5)
        .addTo(controller);
      var sec9tween6 = new TweenMax.to(".sec-09 .splash-1", 1, {
        "-webkit-transform": "translate(0px, 0px)",
        "-moz-transform": "translate(0px, 0px)",
        transform: "translate(0px, 0px)",
      });
      var sec9scene6 = new ScrollMagic.Scene({
        triggerElement: ".sec-08 .t3",
        duration: "100%",
      })
        .setTween(sec9tween6)
        .addTo(controller);
      $(".culture-sec").each(function (index, value) {
        var sectionName = $(this).attr("data-item");
        var paraUpIn = new TweenMax.fromTo(
          ".sec-" + sectionName + " .para-up-in",
          1,
          {
            "-webkit-transform": "translate(0px, 100px)",
            "-moz-transform": "translate(0px, 100px)",
            transform: "translate(0px, 100px)",
          },
          {
            "-webkit-transform": "translate(0px, 0px)",
            "-moz-transform": "translate(0px, 0px)",
            transform: "translate(0px, 0px)",
          }
        );
        var paraUpInScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName,
          duration: "50%",
        })
          .setTween(paraUpIn)
          .addTo(controller);
        var paraDownIn = new TweenMax.fromTo(
          ".sec-" + sectionName + " .para-down-in",
          1,
          {
            "-webkit-transform": "translate(0px, -100px)",
            "-moz-transform": "translate(0px, -100px)",
            transform: "translate(0px, -100px)",
          },
          {
            "-webkit-transform": "translate(0px, 0px)",
            "-moz-transform": "translate(0px, 0px)",
            transform: "translate(0px, 0px)",
          }
        );
        var paraDownInScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName,
          duration: "50%",
        })
          .setTween(paraDownIn)
          .addTo(controller);
        var paraLeftIn = new TweenMax.fromTo(
          ".sec-" + sectionName + " .para-left-in",
          1,
          {
            "-webkit-transform": "translate(200px, 100px)",
            "-moz-transform": "translate(200px, 100px)",
            transform: "translate(200px, 100px)",
          },
          {
            "-webkit-transform": "translate(0px, 0px)",
            "-moz-transform": "translate(0px, 0px)",
            transform: "translate(0px, 0px)",
          }
        );
        var paraLeftInScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName,
          duration: "50%",
        })
          .setTween(paraLeftIn)
          .addTo(controller);
        var paraRightIn = new TweenMax.fromTo(
          ".sec-" + sectionName + " .para-right-in",
          1,
          {
            "-webkit-transform": "translate(-200px, 100px)",
            "-moz-transform": "translate(-200px, 100px)",
            transform: "translate(-200px, 100px)",
          },
          {
            "-webkit-transform": "translate(0px, 0px)",
            "-moz-transform": "translate(0px, 0px)",
            transform: "translate(0px, 0px)",
          }
        );
        var paraRightInScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName,
          duration: "50%",
        })
          .setTween(paraRightIn)
          .addTo(controller);
        var paraSwirlRightIn = new TweenMax.fromTo(
          ".sec-" + sectionName + " .para-swirl-right-in",
          1,
          {
            "-webkit-transform": "translate(100px, -200px) rotate(-45deg)",
            "-moz-transform": "translate(100px, -200px) rotate(-45deg)",
            transform: "translate(100px, -200px) rotate(-45deg)",
          },
          {
            "-webkit-transform": "translate(0px, 0px) rotate(0deg)",
            "-moz-transform": "translate(0px, 0px) rotate(0deg)",
            transform: "translate(0px, 0px) rotate(0deg)",
          }
        );
        var paraSwirlRightInScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName,
          duration: "50%",
        })
          .setTween(paraSwirlRightIn)
          .addTo(controller);
        var paraSwirlLeftIn = new TweenMax.fromTo(
          ".sec-" + sectionName + " .para-swirl-left-in",
          1,
          {
            "-webkit-transform": "translate(-100px, -200px) rotate(45deg)",
            "-moz-transform": "translate(-100px, -200px) rotate(45deg)",
            transform: "translate(-100px, -200px) rotate(45deg)",
          },
          {
            "-webkit-transform": "translate(0px, 0px) rotate(0deg)",
            "-moz-transform": "translate(0px, 0px) rotate(0deg)",
            transform: "translate(0px, 0px) rotate(0deg)",
          }
        );
        var paraSwirlLeftInScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName,
          duration: "50%",
        })
          .setTween(paraSwirlLeftIn)
          .addTo(controller);
        var paraUpOut = new TweenMax.to(
          ".sec-" + sectionName + " .para-up-out",
          1,
          {
            "-webkit-transform": "translate(30px, -100px) rotate(10deg)",
            "-moz-transform": "translate(30px, -100px) rotate(10deg)",
            transform: "translate(30px, -100px) rotate(10deg)",
          }
        );
        var paraUpOutScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName + " .t2",
          duration: "50%",
        })
          .setTween(paraUpOut)
          .addTo(controller);
        var paraDownOut = new TweenMax.to(
          ".sec-" + sectionName + " .para-down-out",
          1,
          {
            "-webkit-transform": "translate(-30px, 100px) rotate(-5deg)",
            "-moz-transform": "translate(-30px, 100px) rotate(-5deg)",
            transform: "translate(-30px, 100px) rotate(-5deg)",
          }
        );
        var paraDownOutScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName + " .t2",
          duration: "50%",
        })
          .setTween(paraDownOut)
          .addTo(controller);
        var paraLeftOut = new TweenMax.to(
          ".sec-" + sectionName + " .para-left-out",
          1,
          {
            "-webkit-transform": "translate(-200px, -100px) rotate(-10deg)",
            "-moz-transform": "translate(-200px, -100px) rotate(-10deg)",
            transform: "translate(-200px, -100px) rotate(-10deg)",
          }
        );
        var paraLeftOutScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName + " .t2",
          duration: "75%",
        })
          .setTween(paraLeftOut)
          .addTo(controller);
        var paraRightOut = new TweenMax.to(
          ".sec-" + sectionName + " .para-right-out",
          1,
          {
            "-webkit-transform": "translate(200px, -100px) rotate(10deg)",
            "-moz-transform": "translate(200px, -100px) rotate(10deg)",
            transform: "translate(200px, -100px) rotate(10deg)",
          }
        );
        var paraRightOutScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName + " .t2",
          duration: "75%",
        })
          .setTween(paraRightOut)
          .addTo(controller);
        var paraFadeOut = new TweenMax.to(
          ".sec-" + sectionName + " .para-fade-out",
          1,
          { "-webkit-opacity": "0", "-moz-opacity": "0", opacity: "0" }
        );
        var paraFadeOutScene = new ScrollMagic.Scene({
          triggerElement: ".sec-" + sectionName + " .t2",
          duration: "30%",
        })
          .setTween(paraFadeOut)
          .addTo(controller);
      });
    }
});
 
