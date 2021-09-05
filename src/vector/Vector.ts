/*
 * Filename: /home/tonymedranodvlpr/Documents/ANIMATIONS/stuff-on-my-way/src/vector/Vector.ts
 * Path: /home/tonymedranodvlpr/Documents/ANIMATIONS/stuff-on-my-way
 * Created Date: Saturday, September 4th 2021, 6:13:40 pm
 * Author: tonymedranodvlpr
 * 
 * Copyright (c) 2021tonymedrano.dvlpr
 */

class Vector {
    _x: number = 1
    _y: number = 0

    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }

    static create(x: number, y: number) {
        return new Vector(x, y)
    }

    set x(value: number) {
        this._x = value
    }

    get x() {
        return this._x
    }

    set y(value: any) {
        this._y = value
    }

    get y() {
        return this._y
    }

    set angle(angle: number) {
        const length = this.length
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    }

    get angle() {
        return Math.atan2(this._y, this._x)
    }

    set length(length: number) {
        const angle = this.angle
        this._x = Math.cos(angle) * length
        this._y = Math.sin(angle) * length
    }

    get length() {
        return Math.sqrt(this._x * this._x + this._y * this._y)
    }

    add(v2: any) {
        return Vector.create(this._x + v2.getX(), this._y + v2.getY())
    }

    subtract(v2: any) {
        return Vector.create(this._x - v2.getX(), this._y - v2.getY())
    }

    multiply(val: number) {
        return Vector.create(this._x * val, this._y * val)
    }

    divide(val: number) {
        return Vector.create(this._x / val, this._y / val)
    }

    addTo(v2: any) {
        this._x += v2.getX()
        this._y += v2.getY()
    }

    subtractFrom(v2: any) {
        this._x -= v2.getX()
        this._y -= v2.getY()
    }

    multiplyBy(val: number) {
        this._x *= val
        this._y *= val
    }

    divideBy(val: number) {
        this._x /= val
        this._y /= val
    }
}

export default Vector