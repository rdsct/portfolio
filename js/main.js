
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



var material01 = new THREE.MeshLambertMaterial({
    color: 0xF2D8DA,
    transparent: true,
    opacity: 1.0
});

var material02 = new THREE.MeshLambertMaterial({
    color: 0xED8D6B,
    transparent: true,
    opacity: 1.0
});

var material03 = new THREE.MeshLambertMaterial({
    color: 0xDEF8F7,
    transparent: true,
    opacity: 1.0
});


var material04 = new THREE.MeshLambertMaterial({
    color: 0x7F7EA0,
    transparent: true,
    opacity: 1.0
});

var material05 = new THREE.MeshLambertMaterial({
    color: 0xF2CD5E,
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

    document.getElementById("webgl_wrapper").appendChild(renderer.domElement);

    scene = new THREE.Scene();



    // near = 100;
    //far = 2000;
    // fogColor = '#000000';
    //  scene.fog = new THREE.Fog(fogColor, near, far);
    //  scene.background = new THREE.Color(fogColor);

    camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    camera.position.y = 0;
    camera.position.z = 130;




    var manager = new THREE.LoadingManager();
    //manager.onProgress = function(item, loaded, total) {

    //console.log(item, loaded, total);

    //};


    var loader = new THREE.OBJLoader(manager);

    loader.load('obj/half_sphere.obj', function (loadedobject01) {

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
		loadedobject01.position.set(-30, 20, 0);
		loadedobject01.rotation.z = -45;

		copy01.scale.set(50, 50, 50);
		copy01.position.set(-20, -30, 0);


		copy02.scale.set(50, 50, 50);
		copy02.position.set(30, 0, -20);
		copy02.rotation.z = 45;

		copy03.scale.set(50, 50, 50);
		copy03.position.set(-10, 0, -10);
		copy03.rotation.x = -60;
		


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

    }, 1000 / 25);
    render();
}

function render() {



    var delta = clock.getDelta();

    if (loadedSphere01) loadedSphere01.rotation.y -= 0.5 * delta;
    if (loadedSphere01) loadedSphere01.rotation.z += 0.3 * delta;

    if (copy01) copy01.rotation.x += 0.9 * delta;

    if (copy02) copy02.rotation.y += 0.3 * delta;
    if (copy02) copy02.rotation.z -= 0.4 * delta;

    if (copy03) copy03.rotation.y += 0.5 * delta;
    if (copy03) copy03.rotation.z -= 0.4 * delta;



    document.addEventListener('mousemove', onDocumentMouseMove, false);
    camera.position.x += (mouseX - camera.position.x) / 10;
    camera.position.y += (mouseY - camera.position.y) / 10;



    camera.lookAt(scene.position);


    renderer.render(scene, camera);
}








