function Player1 () {
	this.x = innerWidth/2 - 300;
	this.y = innerHeight - 250;
	this.h = 60;
	this.w = 50;
	this.ammo = 10;
	this.maxAmmo = 10;
	this.direction = 1;
	this.health = 100;
	this.shootDelay = 1;
	this.nextShoot = currentTime()+this.shootDelay;
	this.alive = true;

	this.draw = function () {
		fill(200,100,100);
		
		if(this.alive){
			//health
			noStroke();
			textSize(15);
			text(this.ammo,this.x-this.w/2,this.y-60);
			fill(200,100,100,100);
			rect(this.x,this.y-50,this.health/2,10);
			stroke(0);
			fill(200,100,100);
			rect(this.x,this.y,this.w,this.h);
			//inner circle
			ellipse(this.x,this.y,25,25);
			fill(200)
			//Barrel
			rect(this.x+(this.direction*this.w/2),this.y,30,10);
			//Ammo level
			this.check();
		}else{
			noStroke();
			textSize(20);
			text("DEAD",this.x-30,this.y-70);
			fill(100,100);
			rect(this.x,this.y,this.w,this.h);
		}

	}

	this.move = function (){
		//PLAYER 1 Movement Controls
		if(keyIsDown(68) && player1.x<innerWidth)
			player1.x+=5;

		if(keyIsDown(65) && player1.x>0)
			player1.x-=5;

		if(keyIsDown(83) && player1.y<innerHeight)
			player1.y+=5;

		if(keyIsDown(87) && player1.y>0)
			player1.y-=5;

		if(keyIsDown(75))
			player1.shoot();
	}

	this.check = function () {
		if(this.health<=0) this.alive = false;

		if(this.x<player2.x){
			this.direction = 1
		}else{
			this.direction = -1;
		};
	}

	this.shoot = function () {
		if(this.alive && this.nextShoot <= currentTime() && this.ammo>0){
			//inserting new bullet
			var bullet = new Bullet (this.x,this.y,this.direction,player2);
			bullets.push(bullet);

			//changing next shooting time
			this.nextShoot = currentTime() + this.shootDelay;
			this.ammo--;
		}

	}
}