class Particle {
	x: number = 0
	y: number = 0
	vx: number = 0 
	vy: number = 0
	mass: number = 1
	radius: number = 0
	bounce: number = -1
	friction: number = 1
	gravity: number = 0

    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }

	static create(x: number, y: number, speed: number, direction: number, grav: number) {
		console.log("x: ", x);
		const particle = new Particle(x, y)
		particle.x = x;
		particle.y = y;
		particle.vx = Math.cos(direction) * speed;
		particle.vy = Math.sin(direction) * speed;
		particle.gravity = grav || 0;
		return particle;
	}

	accelerate(ax: number, ay: number) {
		this.vx += ax
		this.vy += ay
	}

	update() {
		this.vx *= this.friction;
		this.vy *= this.friction;
		this.vy += this.gravity;
		this.x += this.vx;
		this.y += this.vy;
	}

	angleTo(p2: any) {
		return Math.atan2(p2.y - this.y, p2.x - this.x);
	}

	distanceTo(p2: any) {
		let dx = p2.x - this.x,
			dy = p2.y - this.y;

		return Math.sqrt(dx * dx + dy * dy);
	}

	gravitateTo(p2: any) {
		let dx = this.x - p2.x,
			dy = this.y - p2.y,
			distSQ = dx * dx + dy * dy,
			distance = Math.sqrt(distSQ),
			force = p2.mass / distSQ,
			ax = dx / distance * force,
			ay = dy / distance * force;

		this.vx += ax;
		this.vy += ay;
	}
}

export default Particle