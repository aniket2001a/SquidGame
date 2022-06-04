const lost = new Audio('./music/lostEnd')
lost.play();

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );

// // const geometry = new THREE.RingGeometry( 1, 5, 32 );
// const geometry_triangle = new THREE.RingGeometry( 9.686, 12.18, 1, 8, 0, 6.283185 );
// const material_triangle = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
// const triangle = new THREE.Mesh( geometry, material );
// scene.add( triangle );


// // const geometry_square = new THREE.RingGeometry( 9.686, 12.18, 4, 8, 0, 6.283185 );
// // const material_square = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
// // const square = new THREE.Mesh( geometry, material );
// // scene.add( square );


// camera.position.z = 35;

// function animate() {
//     // cube.rotation.x += 0.01;
//     // cube.rotation.y += 0.01;

//     // mesh.rotation.x += 0.01;
//     // mesh.rotation.y += 0.01;
//     triangle.rotation.z += 0.01;
//     triangle.position.x = -30

//     // square.rotation.z += 0.01;

// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// }
// animate();