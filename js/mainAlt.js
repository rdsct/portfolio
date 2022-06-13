
window.addEventListener("pageshow", function () {

    


    var tl_intro = gsap.timeline({
        delay: 0, paused: true
    });
    tl_intro.to("html", 0.8, {
        autoAlpha: 1,
        ease: Power1.easeOut
    });

    tl_intro.play();

    var tl = gsap.timeline({
        delay: 0.8,
        paused: true

    });
    tl.staggerFromTo(".stagger", 1.0, {
        y: '150%',
        skewY: 5,
        autoAlpha: 0
    }, {
        y: '0%',
        skewY: 0,
        autoAlpha: 1,
        ease: Circ.easeOut
    }, 0.3)
        .fromTo(".audio_button", 1.0, {
            scale: 0.8,
            autoAlpha: 0
        }, {
            scale: 1.0,
            autoAlpha: 1,
            ease: Power4.easeOut
        }, 2);

    tl.play();






    [...document.querySelectorAll('.work_item')].forEach(function (item) {




        var this_inner = item.querySelector('.work_item_inner');

        var staggers = item.querySelectorAll('.stagger_body');




        var tl02 = gsap.timeline({
            paused: true
        });
        tl02.staggerFromTo(staggers, 1.0, {
            y: '200%',
            skewY: 10,
            autoAlpha: 0
        }, {
            y: '0%',
            skewY: 0,
            autoAlpha: 1,
            ease: Power4.easeOut
        }, 0.3);

        ScrollTrigger.create({
            trigger: item,
            start: "center bottom",
            onEnter: () => tl02.play()
        });

        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            onLeaveBack: () => tl02.pause(0)
        });







    }); /*close forEach*/


    gsap.ticker.fps(50);




    //underline animations


    [...document.querySelectorAll('.underline_trigger')].forEach(function (item) {

        var this_underline = item.querySelector('.underline');

        item.addEventListener("mouseover", function () {

            gsap.fromTo(this_underline, 0.4, {
                width: 0
            }, {
                width: "100%",
                ease: Power4.easeOut,
                overwrite: true
            });

        });


        item.addEventListener("mouseleave", function () {

            gsap.to(this_underline, 0.4, {
                width: "0%",
                ease: Power4.easeOut,
                overwrite: true
            });

        });



    }); /*close forEach*/



}); /*close on pageview load*/













//three.js
var camera, scene, renderer, loadedSphere01, copy01, copy02, copy03;

var mouseX = 0,
    mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock();

init();
animate();


const newColor1 = new THREE.Color("rgb(102, 178, 154)");
const newColor2 = new THREE.Color("rgb(162, 84, 255)");
const newColor3 = new THREE.Color("rgb(99, 180, 255)");
const newColor4 = new THREE.Color("rgb(192, 62, 62)");
const newColor5 = new THREE.Color("rgb(255, 229, 127)");
const newColor6 = new THREE.Color("rgb(114, 125, 255)");
const newColor7 = new THREE.Color("rgb(255, 148, 106)");
const newColor8 = new THREE.Color("rgb(211, 236, 103)");
const newColor9 = new THREE.Color("rgb(236, 103, 103)");
const newColor10 = new THREE.Color("rgb(75, 196, 247)");

var path = window.location.pathname;
var page = path.split("/").pop();

let color1;
let color2;
let color3;
let color4;
let color5;

if (page == "netdevelopment.html") {
    color1 = 0x193475;
    color2 = 0x86CCDB;
    color3 = 0xE0CAC0;
    color4 = 0xA86456;
    color5 = 0xF2CD5E;
} else if (page == "masterthesis.html") {
    color1 = 0xCBADCF;
    color2 = 0xB3C8FF;
    color3 = 0xECDDFE;
    color4 = 0x6C7336;
    color5 = 0xD3D9F1;
} else if (page == "saludmadrid.html") {
    color1 = 0x164773;
    color4 = 0x0B2B40;
    color3 = 0x1E5959;
    color2 = 0x3B8C6E;
    color5 = 0x89D99D;
}


var material01 = new THREE.MeshLambertMaterial({
    color: color1,
    transparent: true,
    opacity: 1.0
});

var material02 = new THREE.MeshLambertMaterial({
    color: color2,
    transparent: true,
    opacity: 1.0
});

var material03 = new THREE.MeshLambertMaterial({
    color: color3,
    transparent: true,
    opacity: 1.0
});

var material04 = new THREE.MeshLambertMaterial({
    color: color4,
    transparent: true,
    opacity: 1.0
});

var material05 = new THREE.MeshLambertMaterial({
    color: color5,
    transparent: true,
    opacity: 1.0
});

function init() {
    // basic scene
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    var width = window.innerWidth;
    var height = window.innerHeight;

    renderer.setSize(width, height);

    //renderer.setClearColor(0x000000, 0);

    document.getElementById("webgl_wrapper_proj").appendChild(renderer.domElement);

    scene = new THREE.Scene();



    // near = 100;
    //far = 2000;
    // fogColor = '#000000';
    //  scene.fog = new THREE.Fog(fogColor, near, far);
    //  scene.background = new THREE.Color(fogColor);

    camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    camera.position.y = 0;
    camera.position.z = 120;




    var manager = new THREE.LoadingManager();
    //manager.onProgress = function(item, loaded, total) {

    //console.log(item, loaded, total);

    //};


    var loader = new THREE.OBJLoader(manager);

    loader.load('obj/cylinder.obj', function (loadedobject01) {

        loadedobject01.traverse(function (child) {
            if (child instanceof THREE.Mesh) {


                child.material = material01;

            }
        });


        copy01 = loadedobject01.clone();
        copy02 = loadedobject01.clone();
        copy03 = loadedobject01.clone();


        copy01.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material02;
            }
        });


        copy02.traverse(function (child) {
            if (child instanceof THREE.Mesh) {


                child.material = material03;

            }
        });



        copy03.traverse(function (child) {
            if (child instanceof THREE.Mesh) {


                child.material = material04;

            }
        });




        loadedSphere01 = loadedobject01;


        loadedobject01.scale.set(50, 50, 50);
        loadedobject01.position.set(-120, 0, 0);
        loadedobject01.rotation.z = 0;

        copy01.scale.set(50, 50, 50);
        copy01.position.set(0, 0, 0);


        copy02.scale.set(50, 50, 50);
        copy02.position.set(30, 0, 0);
        copy02.rotation.z = 0;

        copy03.scale.set(50, 50, 50);
        copy03.position.set(140, 0, 0);
        copy03.rotation.x = 0;



        scene.add(loadedobject01);

        scene.add(copy01);
        scene.add(copy02);
        scene.add(copy03);

    });

    var dl02 = new THREE.DirectionalLight(0xffffff, 1.0);
    scene.add(dl02);
    dl02.position.set(40, 200, 200);


} /*close init*/



function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 10;
    mouseY = (event.clientY - windowHalfY) / 10;
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    setTimeout(function () {

        requestAnimationFrame(animate);

    }, 1);
    render();
}

function render() {



    var delta = clock.getDelta();
    /*
        if (loadedSphere01) loadedSphere01.rotation.y -= 0.5 * delta;
        if (loadedSphere01) loadedSphere01.rotation.z += 0.3 * delta;
    
        if (copy01) copy01.rotation.x += 0.9 * delta;
    
        if (copy02) copy02.rotation.y += 0.3 * delta;
        if (copy02) copy02.rotation.z -= 0.4 * delta;
    
        if (copy03) copy03.rotation.y += 0.5 * delta;
        if (copy03) copy03.rotation.z -= 0.4 * delta;
    */


    document.addEventListener('mousemove', onDocumentMouseMove, false);

    camera.position.x += (mouseX - camera.position.x) / 10;
    //camera.position.y += (mouseY - camera.position.y) / 10;



    camera.lookAt(scene.position);


    renderer.render(scene, camera);
}

/* Parallax */


// Add event listener
const elem = document.querySelector("#title_bg");
const elem2 = document.querySelector("#title_bg2");


function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    let x = `${_depth1}`;
    let x2 = `${_depth2}`;
    //console.log(x);

    elem.style.backgroundPosition = x;
    //
    elem2.style.backgroundPosition = x2;

}



document.addEventListener("mousemove", e => setTimeout(parallax, 1000 / 8, e));


/*  
  $(".header_proj").mousemove(function(e) {
    parallaxIt(e, "#title_bg", -100);
    parallaxIt(e, "#title_bg2", -30);
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $(".header_proj");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

*/

//  dot nav

const dotNav = (elem, easing) => {
    function scrollIt(destination, duration = 200, easing = 'linear', callback) {
        const easings = {
            linear(t) { return t; },
            easeInQuad(t) { return t * t; },
            easeOutQuad(t) { return t * (2 - t); },
            easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
            easeInCubic(t) { return t * t * t; },
            easeOutCubic(t) { return (--t) * t * t + 1; },
            easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
            easeInQuart(t) { return t * t * t * t; },
            easeOutQuart(t) { return 1 - (--t) * t * t * t; },
            easeInOutQuart(t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
            easeInQuint(t) { return t * t * t * t * t; },
            easeOutQuint(t) { return 1 + (--t) * t * t * t * t; },
            easeInOutQuint(t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; }
        };
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            if (callback) {
                callback();
            }
            return;
        }
        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
            if (window.pageYOffset === destinationOffsetToScroll) {
                if (callback) {
                    callback();
                }
                return;
            }
            requestAnimationFrame(scroll);
        }
        scroll();
    }


    //  in viewport

    const inViewport = (el) => {
        let allElements = document.getElementsByTagName(el);
        let windowHeight = window.innerHeight;
        const elems = () => {
            for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
                let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
                let top = viewportOffset.top;  //  get the offset top
                if (top < windowHeight && top < (windowHeight / 3)) {  //  if the top offset is less than the window height
                    allElements[i].classList.add('in-viewport');  //  add the class
                } else {
                    allElements[i].classList.remove('in-viewport');  //  remove the class
                }
            }
        }
        elems();
        window.addEventListener('scroll', elems);
    }
    inViewport('section');

    //  dot nav

    const allSecs = document.getElementsByTagName(elem);
    const nav = document.getElementById('dot-nav');
    const scrollSpeed = '1000';
    let allVis = document.getElementsByClassName('in-viewport'),
        allDots;
    for (let i = 0; i < allSecs.length; i++) {
        allSecs[i].classList.add('section-' + i);
    }


    //  add the dots

    const buildNav = () => {
        var ul = document.getElementsByClassName('floating_sidebar_list');
        for (let i = 0; i < allSecs.length; i++) {
            const li = document.createElement('li');
            ul[0].appendChild(li);
            const link = document.createElement('a');
            link.href = '#' + allSecs[i].id;
            link.classList.add('floating_sidebar_link');
            const span = document.createElement('span');
            span.classList.add('floating_sidebar_link_text');
            span.innerHTML = allSecs[i].id;
            li.appendChild(link);
            link.appendChild(span);
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.id = 'dot-' + i;
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.classList.add('floating_sidebar_link_dot');
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute('cx', '12');
            circle.setAttribute('cy', '12');
            circle.setAttribute('r', '10');
            svg.appendChild(circle);
            li.append(svg);
        }
    }
    buildNav();

    //  nav position
    /*
        let navHeight = document.getElementById('dot-nav').clientHeight;
        let hNavHeight = navHeight / 2;
        document.getElementById('dot-nav').style.top = 'calc(50% - ' + hNavHeight + 'px)';
    */


    //  onscroll

    const dotActive = () => {
        allVis = document.getElementsByClassName('in-viewport');
        allDots = document.getElementsByClassName('floating_sidebar_link_dot');
        visNum = allVis.length;
        let a = visNum - 1;
        if (a >= 0) {
            for (let i = 0; i < allSecs.length; i++) {
                allDots[i].classList.remove('active');
            }
            document.getElementById('dot-' + a).classList.add('active');
        }
    }
    dotActive();
    window.onscroll = function () { dotActive(); };

    //  click stuff
    /*
        const scrollMe = (e) => {
            let anchor = e.currentTarget.dataset.sec;
            scrollIt(document.querySelector('.section-' + anchor), scrollSpeed, easing);
            e.preventDefault();
        }
    
        allDots = document.getElementsByClassName('dots');
        for (let i = 0; i < allDots.length; i++) {
            allDots[i].addEventListener('click', scrollMe);
        }
    */
}

dotNav('section', 'easeInOutCubic');

