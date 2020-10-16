var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var color = new THREE.Color("hsl(41, 100%, 50%)");

var geometry = new THREE.BoxGeometry( 2, 1, 0.9 );
var material = new THREE.MeshBasicMaterial( { color: color } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
