			if ( WEBGL.isWebGLAvailable() === false ) {
				document.body.appendChild( WEBGL.getWebGLErrorMessage() );
			}


			var renderer, scene, camera;
			var spotLight;
			var box;
			
			var controls;
			var Sinemove,Cubicmove, Quintmove,Circmove, Bouncemove, Elasticmove, Expomove, BouncingBall;
			var mySelect= document.getElementById("mySelect")
	
			init();
			render();
			function init() {



				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				renderer.gammaInput = true;
				renderer.gammaOutput = true;
				renderer.setClearColor( 0xfff222 );
				scene = new THREE.Scene();
				//camera setting
				camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 80, 20, 0 );

				controls = new THREE.OrbitControls( camera, renderer.domElement );
				// controls.addEventListener( 'change', render );
				controls.minDistance = 20;
				controls.maxDistance = 400;
				controls.minPolarAngle=0;
				controls.maxPolarAngle = Math.PI/2;

				controls.update();
			

				
				//light setting
				var ambient = new THREE.AmbientLight( 0xffffff, 0.8 );
				scene.add( ambient );

				spotLight = new THREE.SpotLight( 0xffffff, 0.8);
				spotLight.position.set( 0, 50, 20 );
				spotLight.angle =1;
				spotLight.penumbra = 0.5;
				spotLight.decay = 2;
				spotLight.distance = 200;
				spotLight.castShadow = true;
				spotLight.shadow.mapSize.width = 1024;
				spotLight.shadow.mapSize.height = 1024;
				spotLight.shadow.camera.near = 10;
				spotLight.shadow.camera.far = 100;
				scene.add( spotLight );
			
				var material = new THREE.MeshPhongMaterial( { color: 0xfff222, dithering: true } );
				var geometry = new THREE.PlaneBufferGeometry( 1200, 1200 );
				var mesh = new THREE.Mesh( geometry, material );
				mesh.position.set( 0, -4, 0 );
				mesh.rotation.x = - Math.PI * 0.5;
				mesh.receiveShadow = true;
				scene.add( mesh );

				var material = new THREE.MeshPhongMaterial( { color: 0xffffff, dithering: true } );
				var geometry = new THREE.BoxBufferGeometry( 9, 9, 9 );
				material.transparent =true;
				material.opacity =0.8;
				box = new THREE.Mesh( geometry, material );

				box.position.set( 0, 0.5, 0 );
				box.castShadow = true;


				scene.add( box );
				controls.target.copy( box.position );
				
				window.addEventListener( 'resize', onResize, false );

			   

				

				// mySelect.addEventListener("change", function(){
 			// 	   console.log(mySelect.value);
	

			 //    });

				BallAnimation();

			}

			function BallAnimation(){


				var Sinebutton=document.getElementById("Sine");
				var Powerbutton=document.getElementById("Power");
				var Bouncebutton=document.getElementById("Bounce");
				var Elasticbutton=document.getElementById("Elastic");
				var Backbutton=document.getElementById("Back");
				var Circbutton=document.getElementById("Circ");
				var Expobutton=document.getElementById("Expo");
		
				var BouncingBallbutton=document.getElementById("BouncingBall");
				var Waterbutton=document.getElementById("Water");
				var Carbutton=document.getElementById("Carstop");
				var Fallingbutton=document.getElementById("Falling");
				var activeAnim = null;
				var easingstat =  document.getElementById("textBox").innerHTML;
		

				function stopAnim() {
					if(activeAnim !== null) {

 				   	activeAnim.clear();

 				   	box.position.set( 0, 0.5, 0 );
 				   	box.rotation.set( 0, 0, 0 );
 				   }
				}


			   Powerbutton.addEventListener("click", function(){
 				   
				   stopAnim();
				   

				   if(mySelect.value==="EaseIn"){
				   console.log("Easein-Power");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Power.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Power.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Power.easeIn});

				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Power.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Power.easeIn});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Power.easeIn});"

				   }else if(mySelect.value==="EaseOut"){
				   console.log("Easeout-Power");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Power.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Power.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Power.easeOut});
				    document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Power.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Power.easeOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Power.easeOut});"
				   
				   }else if(mySelect.value==="EaseInOut"){
				   console.log("Easeinout-Power");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Power.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Power.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Power.easeInOut});

				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Power.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Power.easeInOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Power.easeInOut});"
				   
				   }

			  });
			

			  Sinebutton.addEventListener("click", function(){
 				
				   stopAnim();

				if(mySelect.value==="EaseIn"){
           		 console.log("Easein-sine");
				   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Sine.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Sine.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Sine.easeIn});


				    document.getElementById("textBox").innerHTML = "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br> activeAnim.to(box.position, 1, {z: 15, ease: Sine.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Sine.easeIn});<br> activeAnim.to(box.position, 0.5, {z: 0, ease: Sine.easeIn});"


				

				}else if(mySelect.value==="EaseOut"){
				 console.log("Easeout-sine");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Sine.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Sine.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Sine.easeOut});
				    document.getElementById("textBox").innerHTML = "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br> activeAnim.to(box.position, 1, {z: 15, ease: Sine.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Sine.easeOut});<br> activeAnim.to(box.position, 0.5, {z: 0, ease: Sine.easeOut});"

				 

				}else if(mySelect.value==="EaseInOut"){
				 console.log("Easeinout-sine");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Sine.easeInOut});

				    document.getElementById("textBox").innerHTML = "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br> activeAnim.to(box.position, 1, {z: 15, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Sine.easeInOut});<br> activeAnim.to(box.position, 0.5, {z: 0, ease: Sine.easeInOut});"

				
				 }

			
               });
			 


			  Circbutton.addEventListener("click", function(){
 				   
				   stopAnim();

				   if(mySelect.value==="EaseIn"){
				   console.log("EaseIn-Circ");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Circ.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Circ.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Circ.easeIn});

				   document.getElementById("textBox").innerHTML = 

				   "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Circ.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Circ.easeIn});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Circ.easeIn});"
				

				   }
				   else if(mySelect.value==="EaseOut"){
				   console.log("EaseOut-Circ");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Circ.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Circ.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Circ.easeOut});
				   
				    document.getElementById("textBox").innerHTML = 	 "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Circ.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Circ.easeOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Circ.easeOut});"


				   }

				   else if(mySelect.value==="EaseInOut"){
				   console.log("EaseInOut-Circ");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Circ.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Circ.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Circ.easeInOut});

				   document.getElementById("textBox").innerHTML = 	 "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Circ.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Circ.easeInOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Circ.easeInOut});"
			  
				   }
			  });

			  Expobutton.addEventListener("click", function(){
 				   
				   stopAnim();
				   if(mySelect.value==="EaseIn"){
				   console.log("EaseIn-Expo");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Expo.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Expo.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Expo.easeIn});

				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Expo.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Expo.easeIn});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Expo.easeIn});"
				   } 
				   else if(mySelect.value==="EaseOut"){
				   console.log("EaseOut-Expo");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Expo.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Expo.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Expo.easeOut});
				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Expo.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Expo.easeOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Expo.easeOut});"
				   } 
				   else if(mySelect.value==="EaseInOut"){
				   console.log("EaseInOut-Expo");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Expo.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Expo.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Expo.easeInOut});
				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Expo.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Expo.easeInOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Expo.easeInOut});"
				   } 
			  });

			   Backbutton.addEventListener("click", function(){
 				   
				   stopAnim();
				   if(mySelect.value==="EaseIn"){
				   console.log("EaseIn-Back");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Back.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Back.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Back.easeIn});

				   document.getElementById("textBox").innerHTML = "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Back.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Back.easeIn});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Back.easeIn});"

				   } 
				   else if(mySelect.value==="EaseOut"){
				   console.log("EaseOut-Back");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Back.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Back.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Back.easeOut});

				    document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Back.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Back.easeOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Back.easeOut});"
				   } 
				   else if(mySelect.value==="EaseInOut"){
				   console.log("EaseInOut-Back");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Back.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Back.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Back.easeInOut});
				    document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Back.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Back.easeInOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Back.easeInOut});"
				   } 
			  });




			  Elasticbutton.addEventListener("click", function(){
 				   
				   stopAnim();
				   if(mySelect.value==="EaseIn"){
				   console.log("EaseIn-Elastic");	
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Elastic.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Elastic.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Elastic.easeIn});
				    document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Elastic.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Elastic.easeIn});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Elastic.easeIn});"
				   }
				   else if(mySelect.value==="EaseOut"){
				   console.log("Easeout-Elastic");
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Elastic.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Elastic.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Elastic.easeOut});
				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Elastic.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Elastic.easeOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Elastic.easeOut});"
				   }
				   else if(mySelect.value==="EaseInOut"){
				   console.log("Easeinout-Elastic");	
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Elastic.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Elastic.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Elastic.easeInOut});
				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Elastic.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Elastic.easeInOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Elastic.easeInOut});"
				   }
			  });





			  Bouncebutton.addEventListener("click", function(){
			  	   
			  	   stopAnim();

			  	   if(mySelect.value==="EaseIn"){
			  	   console.log("EaseIn-Bounce");	
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Bounce.easeIn});
				   activeAnim.to(box.position, 1, {z: -15, ease: Bounce.easeIn});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Bounce.easeIn});
				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Bounce.easeIn});<br>activeAnim.to(box.position, 1, {z: -15, ease: Bounce.easeIn});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Bounce.easeIn});"
				   }
				   else if(mySelect.value==="EaseOut"){
				   console.log("EaseOut-Bounce");	
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Bounce.easeOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Bounce.easeOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Bounce.easeOut});
				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Bounce.easeOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Bounce.easeOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Bounce.easeOut});"
				   }
				   else if(mySelect.value==="EaseInOut"){
				   console.log("EaseInOut-Bounce");	
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
				   activeAnim.to(box.position, 1, {z: 15, ease: Bounce.easeInOut});
				   activeAnim.to(box.position, 1, {z: -15, ease: Bounce.easeInOut});
				   activeAnim.to(box.position, 0.5, {z: 0, ease: Bounce.easeInOut});

				   document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1, {z: 15, ease: Bounce.easeInOut});<br>activeAnim.to(box.position, 1, {z: -15, ease: Bounce.easeInOut});<br>activeAnim.to(box.position, 0.5, {z: 0, ease: Bounce.easeInOut});"
				   }
			  });

			  
			   BouncingBallbutton.addEventListener("click", function(){
			   	   console.log("BouncingBall");
			   	   stopAnim();
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0});
				   activeAnim.to(box.position, 0.3, {y: 15, ease: Power2.easeOut});
				   activeAnim.to(box.rotation, 0.2, {z: 1.5, ease: Back.easeOut});
				   activeAnim.to(box.position, 0.5, {y: 0, ease: Circ.easeIn});


				document.getElementById("textBox").innerHTML = "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0});<br>activeAnim.to(box.position, 0.5, {y: 15, ease: Power2.easeOut});<br>activeAnim.to(box.rotation, 0.2, {z: 1.5, ease: Back.easeOut});<br>activeAnim.to(box.position, 0.5, {y: 0, ease: Circ.easeIn});"

			  });

			

			   Waterbutton.addEventListener("click", function(){
			   	   console.log("Floating");
			   	   stopAnim();
	   			   activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});
	   			   
				   activeAnim.to(box.position, 1.5, {y: 8, ease: Power.easeInOut});

				   activeAnim.to(box.position, 1.3, {y: 6.5, ease: Sine.easeInOut});

				   activeAnim.to(box.position, 1.5, {y: 8, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 1.0, {y: 6.5, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 1.5, {y: 8, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 3, {y: 0.5, ease: Sine.easeInOut});


				   document.getElementById("textBox").innerHTML =  "activeAnim=new TimelineMax({repeat: -1 , repeatDelay:0.5});<br>activeAnim.to(box.position, 1.5, {y: 6, ease: Power.easeInOut});<br>activeAnim.to(box.position, 1.3, {y: 4.5, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 1.5, {y: 6, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 1.0, {y: 4.5, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 1.5, {y: 6, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 3, {y: 0.5, ease: Sine.easeInOut});"
			  });


		


			    Carbutton.addEventListener("click", function(){
			   	   console.log("Carstop");
			   	   stopAnim();
			   	   // ball.position.set(0,0.5,20);
	   			   activeAnim=new TimelineMax({repeat: 0 , repeatDelay:0});
				   box.position.set(0,0.5,-65);
				   activeAnim.to(box.position, 0.5, {z: -60, ease: Circ.easeOut});
				   activeAnim.to(box.position, 0.8, {z: -65, ease: Power.easeIn});
				   activeAnim.to(box.position, 0.8, {z: 2, ease: Sine.easeOut});
				   activeAnim.to(box.position, 0.1, {z: 0, ease: Power.easeIn});
				   document.getElementById("textBox").innerHTML = "activeAnim=new TimelineMax({repeat: 0 , repeatDelay:0});<br>box.position.set(0,0.5,-65);<br>activeAnim.to(box.position, 0.5, {z: -60, ease: Circ.easeOut});<br>activeAnim.to(box.position, 0.8, {z: -65, ease: Power.easeIn});<br>activeAnim.to(box.position, 0.8, {z: 2, ease: Sine.easeOut});<br>activeAnim.to(box.position, 0.1, {z: 0, ease: Power.easeIn});"
			  });

			    Fallingbutton.addEventListener("click", function(){
			   	   console.log("Falling");
			   	   stopAnim(); 

			   	   
	   			   activeAnim=new TimelineMax({repeat: 0 , repeatDelay:0});
				   box.position.set(0,30,0);
				   activeAnim.to(box.position, 2, {z:10 ,y:30, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 2, {z:-10,y: 25 , ease: Sine.easeInOut});

				   activeAnim.to(box.position, 2.5, {z:10 ,y:20, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 2, {z:-10,y: 15 , ease: Sine.easeInOut});
				   activeAnim.to(box.position, 2.5, {z:8 ,y:10, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 2, {z:-8,y: 6 , ease: Sine.easeInOut});
				   activeAnim.to(box.position, 2.5, {z:5 ,y:3, ease: Sine.easeInOut});
				   activeAnim.to(box.position, 2, {z:0,y: 0.5 , ease: Sine.easeInOut});

				    document.getElementById("textBox").innerHTML ="activeAnim=new TimelineMax({repeat: 0 , repeatDelay:0});<br>box.position.set(0,30,0);<br>activeAnim.to(box.position, 2, {z:10 ,y:30, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2, {z:-10,y: 25 , ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2.5, {z:10 ,y:20, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2, {z:-10,y: 15 , ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2.5, {z:8 ,y:10, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2, {z:-8,y: 6 , ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2.5, {z:5 ,y:3, ease: Sine.easeInOut});<br>activeAnim.to(box.position, 2, {z:0,y: 0 , ease: Sine.easeInOut});"
				  
				
			  });


			  


	
			}

	   
				
			function onResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}




			function render() {
				requestAnimationFrame( render );
				// camera.rotation.x+=0.0005;
	
				renderer.render( scene, camera );
				
				

			}
			
		
			
