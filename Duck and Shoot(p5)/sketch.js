var bullets = new Array();
var ammo = new Array();
var betterGuns = new Array();
var hearts = new Array();

var player1 , player2 ;

function setup() {
	createCanvas(innerWidth,innerHeight);
	player1 = new Player1();
	player2 = new Player2();

	rectMode("center");

	setInterval(setPickupTime,3000);
}

function draw() {
 	background(200);
 	if(!player1.alive){
 		background(150,150,200);
 		textSize(50);
 		fill(250);
 		text("PLAYER 2 Won",innerWidth/2,innerHeight/2);
 	}else if(!player2.alive){
 		background(200,150,150);
 		textSize(50);
 		fill(250);
 		text("PLAYER 1 Won",innerWidth/2,innerHeight/2);
 	}

	player1.draw();
	player2.draw();

	player1.move();
	player2.move();

	//Moving all bullets
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].move();
	}

	//Displaying all pickups
	for (var i = 0; i < ammo.length; i++) {
		ammo[i].draw();
	}
	for (var i = 0; i < betterGuns.length; i++) {
		betterGuns[i].draw();
	}
	for (var i = 0; i < hearts.length; i++) {
		hearts[i].draw();
	}
}

function currentTime (){
	var d = new Date();
	var m = d.getMinutes();
	var s = d.getSeconds();

	var totalS = m * 60 + s; 
	return totalS;
}

function putPickups (){
	var rand = floor(random(0,10));
	console.log(rand);

	if(rand >=6)
		putAmmo();
	else if(rand >= 3)
		putBetterGuns();
	else if(rand >=0)
		putHearts();
}

function setPickupTime () {
	var rand = floor(random(2,5));
	setTimeout(putPickups,rand);
}

function putAmmo() {
	var a = new Ammo();
	a.pickPosition();
	ammo.push(a);
}
function putBetterGuns() {
	var b = new BetterGun();
	b.pickPosition();
	betterGuns.push(b);
}
function putHearts() {
	var h = new Heart();
	h.pickPosition();
	hearts.push(h);
}