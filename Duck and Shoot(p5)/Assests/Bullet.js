function Bullet(x,y,direction,to) {
	this.x = x;
	this.y = y;
	this.w = 15;
	this.h = 10;
	this.damage = 10;
	this.velocity = 20;
	this.id = bullets.length;

	this.move = function () {
		fill(100,100,100);
		stroke(0);
		rect(this.x,this.y,this.w,this.h);
		//image(rocketImage);

		this.x += this.velocity*direction;

		this.check();
	}

	this.check = function () {

		// If it hits another bullet
		for (var i = 0; i < bullets.length; i++) {
			var d = dist(bullets[i].x,bullets[i].y,this.x,this.y);
			if(d<=0 && i!=this.id){
				bullets[i].destroyMe();
				this.destroyMe();
			}
		}

		//If it hits the player
		if(to.x+to.w/2>this.x && to.x-to.w/2<this.x && to.alive){
			if(to.y+to.h/2>this.y && to.y-to.h/2<this.y){
				to.health -= this.damage;
				this.destroyMe();
			}
		}

		//If bullet crosses the screen
		if(this.x<0 || this.x>innerWidth || this.y<0 || this.y>innerHeight)
			this.destroyMe();
	}

	//Remove the bullet
	this.destroyMe = function () {
		bullets.splice(this.id,1);
		for (var i = this.id; i < bullets.length; i++) {
			bullets[i].id-=1;
		}
	}
}
