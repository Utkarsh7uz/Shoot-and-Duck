function Ammo() {
	this.x;
	this.y;
	this.h = 30;
	this.id = ammo.length;
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
		rect(this.x,this.y,this.h,this.h);
		line(this.x,this.y+this.h/2,this.x,this.y-this.h/2);
		line(this.x-this.h/3,this.y+this.h/2,this.x-this.h/3,this.y-this.h/2);
		line(this.x+this.h/3,this.y+this.h/2,this.x+this.h/3,this.y-this.h/2);

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
		ammo.splice(this.id,1);

		for (var i = this.id; i < ammo.length; i++) {
			ammo[i].id--;
		}
	}


	this.get = function (player) {
		if(player.ammo+5<=player.maxAmmo){
			player.ammo+=5;
		}
		else{
			player.ammo = player.maxAmmo;
		}

		this.destroyMe();
	}
}