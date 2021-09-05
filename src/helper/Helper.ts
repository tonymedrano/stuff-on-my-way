export const helper = {
    norm: (value: number, min: number, max: number) => {
        return (value - min) / (max - min);
    },

    lerp: (norm: number, min: number, max: number) => {
        return (max - min) * norm + min;
    },

    map: (value: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number) => {
        return helper.lerp(helper.norm(value, sourceMin, sourceMax), destMin, destMax);
    },

    clamp: (value: number, min: number, max: number) => {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    },

    distance: (p0: any, p1: any) => {
        let dx = p1.x - p0.x,
            dy = p1.y - p0.y;
        return Math.sqrt(dx * dx + dy * dy);
    },

    distanceXY: (x0: number, y0: number, x1: number, y1: number) => {
        let dx = x1 - x0,
            dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
    },

    circleCollision: (c0: any, c1: any) => {
        return helper.distance(c0, c1) <= c0.radius + c1.radius;
    },

    circlePointCollision: (x: number, y: number, circle: any) => {
        return helper.distanceXY(x, y, circle.x, circle.y) < circle.radius;
    },

    pointInRect: (x: number, y: number, rect: any) => {
        return helper.inRange(x, rect.x, rect.x + rect.width) &&
            helper.inRange(y, rect.y, rect.y + rect.height);
    },

    inRange: (value: number, min: number, max: number) => {
        return value >= Math.min(min, max) && value <= Math.max(min, max);
    },

    rangeIntersect: (min0: number, max0: number, min1: number, max1: number) => {
        return Math.max(min0, max0) >= Math.min(min1, max1) &&
            Math.min(min0, max0) <= Math.max(min1, max1);
    },

    rectIntersect: (r0: any, r1: any) => {
        return helper.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
            helper.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
    },

    degreesToRads: (degrees: number) => {
        return degrees / 180 * Math.PI;
    },

    radsToDegrees: (radians: number) => {
        return radians * 180 / Math.PI;
    },

    randomRange: (min: number, max: number) => {
        return min + Math.random() * (max - min);
    },

    randomInt: (min: number, max: number) => {
        return Math.floor(min + Math.random() * (max - min + 1));
    }

}