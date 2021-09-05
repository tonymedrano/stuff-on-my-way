/*
 * Filename: /Users/tonymedrano/Desktop/canvas-typescript-physics/src/app.ts
 * Path: /Users/tonymedrano/Desktop/canvas-typescript-physics
 * Created Date: Tuesday, February 27th 2018, 6:30:22 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 CALCULUS TYPESCRIPT PHYSICS by TONY MEDRANO
 */

import Particle from './particle/Particle'
import {
  getRandomColor,
  colors,
  math,
  easing,
  shape,
  background
} from './utils'


import { helper } from './helper/Helper'

import { loop } from "./utils/neon-effect"

//. Create element --->
const canvas: HTMLCanvasElement = document.createElement('canvas')
canvas.id = 'calculus-trigonometry'
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

//. Create ctx ---->
const ctx: any = canvas.getContext('2d')
const width: number = canvas.width
const height: number = canvas.height

//. Settings ---->
const centerY: number = height * .5
const centerX: number = width * .5
const radius: number = centerX * .75
let speed: number = 0.01
let angle: number = 0


//. CannonBall test ----->
let gun = {
  x: 100,
  y: height,
  angle: -Math.PI / 4
},
  cannonball = Particle.create(gun.x, gun.y, 15, gun.angle, 0.2),
  isShooting = false,
  forceAngle = 0,
  forceSpeed = 0.1,
  rawForce = 0,
  target: any = {}

cannonball.radius = 7

setTarget()

function setTarget() {
  target.x = helper.randomRange(200, width)
  target.y = height
  target.radius = helper.randomRange(10, 40)
}

document.body.addEventListener("mousedown", onMouseDown)

document.body.addEventListener("keydown", function (event: any) {
  switch (event.keyCode) {
    case 32: // space
      if (!isShooting) {
        shoot()
      }
      break

    default:
      break
  }
})

const shoot = () => {
  const force = helper.map(rawForce, -1, 1, 2, 20)
  cannonball.x = gun.x + Math.cos(gun.angle) * 40
  cannonball.y = gun.y + Math.sin(gun.angle) * 40
  cannonball.vx = Math.cos(gun.angle) * force
  cannonball.vy = Math.sin(gun.angle) * force

  isShooting = true
}

function checkTarget() {
  if (helper.circleCollision(target, cannonball)) {
    // create amazing collision reaction!!!
    setTarget()
  }
}

function onMouseDown(event: any) {
  document.body.addEventListener("mousemove", onMouseMove)
  document.body.addEventListener("mouseup", onMouseUp)
  aimGun(event.clientX, event.clientY)
}

function onMouseMove(event: any) {
  aimGun(event.clientX, event.clientY)
}

function onMouseUp(event: any) {
  document.body.removeEventListener("mousemove", onMouseMove)
  document.body.removeEventListener("mouseup", onMouseUp)
  aimGun(event.clientX, event.clientY)
}

function aimGun(mouseX: number, mouseY: number) {
  gun.angle = helper.clamp(Math.atan2(mouseY - gun.y, mouseX - gun.x), -Math.PI / 2, -0.3)
}

function draw() {
  ctx.fillStyle = "#ccc"
  ctx.fillRect(10, height - 10, 20, -100)

  ctx.fillStyle = "#666"
  ctx.fillRect(10, height - 10, 20, helper.map(rawForce, -1, 1, 0, -100))

  ctx.fillStyle = "#000"

  ctx.beginPath()
  ctx.arc(gun.x, gun.y, 24, 0, Math.PI * 2, false)
  ctx.fill()

  ctx.save()
  ctx.translate(gun.x, gun.y)
  ctx.rotate(gun.angle)
  ctx.fillRect(0, -8, 40, 16)
  ctx.restore()

  ctx.beginPath()
  ctx.arc(cannonball.x,
    cannonball.y,
    cannonball.radius,
    0, Math.PI * 2, false)
  ctx.fill()

  ctx.fillStyle = "red"
  ctx.beginPath()
  ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2, false)
  ctx.fill()
}


//. Render ---->
const _update = () => {

  //. Clear canvas ----->
  shape.clear(ctx, width, height)
  background(ctx, 15, 45, colors.orchid, colors.black, colors.aquamarine)

  //. Sin/Cos --->
  const pos: any = math.position(centerX, centerY, angle, radius)
  const pos2: any = math.position(pos.x, pos.y, angle * 5, radius * .2)

  //. Basic scheme
  shape.circle(ctx, centerX, centerY, radius, colors.black, colors.transparent, 5)
  shape.circle(ctx, centerX, centerY, 20, colors.black, colors.transparent, 5)
  shape.line(ctx, centerX, centerY, pos.x, pos.y, colors.black, 5)
  shape.circle(ctx, pos.x, pos.y, 20, colors.black, colors.transparent, 5)

  if (!isShooting) {
    forceAngle += forceSpeed
  }
  rawForce = Math.sin(forceAngle)
  if (isShooting) {
    cannonball.update()
    checkTarget()
  }
  draw()

  if (cannonball.y > height) {
    isShooting = false
  }


  //. Update everything! ---->
  angle += speed

  requestAnimationFrame(_update)

}
_update()