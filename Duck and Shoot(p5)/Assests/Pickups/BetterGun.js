function BetterGun() {
	this.x;
	this.y;
	this.h = 30;
	this.id = betterGuns.length;
	this.lifeTime = currentTime() + 7;

	this.pickPosition = function () {
		this.x = floor(random(0,innerWidth));
		this.y = floor(random(0,innerHeight));

		if(dist(this.x,this.y,player1.x,player1.y)<100)
			this.pickPosition();
		if(dist(this.x,this.y,player2.x,player2.y)<100)
			this.pickPosition();
	}

	this.draw = function () {
		fill(150);
		stroke(0);
		rect(this.x,this.y,this.h,this.h/2);
		rect(this.x-this.h/4,this.y+this.h/2,this.h/2,this.h/3);
		this.check();
	}

	this.check = function () {
		if(currentTime()>this.lifeTime)
			this.destroyMe();

		if(dist(this.x,this.y,player1.x,player1.y)<40 && player1.alive)
			this.get(player1);
		else if(dist(this.x,this.y,player2.x,player2.y)<40 && player2.alive)
			this.get(player2);
	}

	this.destroyMe = function () {
		betterGuns.splice(this.id,1);

		for (var i = this.id; i < betterGuns.length; i++) {
			betterGuns[i].id--;
		}
	}


	this.get = function (player) {
		player.shootDelay/=2;
		this.destroyMe();
	}
}
