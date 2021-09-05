
const drawRectangle = function (ctx: any, x: any, y: any, w: any, h: any, border: any) {
    ctx.beginPath()
    ctx.moveTo(x + border, y)
    ctx.lineTo(x + w - border, y)
    ctx.quadraticCurveTo(x + w - border, y, x + w, y + border)
    ctx.lineTo(x + w, y + h - border)
    ctx.quadraticCurveTo(x + w, y + h - border, x + w - border, y + h)
    ctx.lineTo(x + border, y + h)
    ctx.quadraticCurveTo(x + border, y + h, x, y + h - border)
    ctx.lineTo(x, y + border)
    ctx.quadraticCurveTo(x, y + border, x + border, y)
    ctx.closePath()
    ctx.stroke()
}

const neonRect = function (ctx: any, x: any, y: any, w: any, h: any, r: any, g: any, b: any) {
    ctx.shadowColor = "rgb(" + r + "," + g + "," + b + ")"
    ctx.shadowBlur = 10
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)"
    ctx.lineWidth = 7.5
    drawRectangle(ctx, x, y, w, h, 1.5)
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)"
    ctx.lineWidth = 6
    drawRectangle(ctx, x, y, w, h, 1.5)
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)"
    ctx.lineWidth = 4.5
    drawRectangle(ctx, x, y, w, h, 1.5)
    ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + ",0.2)"
    ctx.lineWidth = 3
    drawRectangle(ctx, x, y, w, h, 1.5)
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 1.5
    drawRectangle(ctx, x, y, w, h, 1.5)
}

function draw(ctx: any, x: any, y: any) {
    neonRect(ctx, 25 + x, 25 + y, 50, 50, 243, 243, 21)
    neonRect(ctx, 225 - x, 25 + y, 50, 50, 193, 253, 51)
    neonRect(ctx, 25 + x, 225 - y, 50, 50, 255, 153, 51)
    neonRect(ctx, 225 - x, 225 - y, 50, 50, 252, 90, 184)
    neonRect(ctx, 125, 125, 50, 50, 13, 213, 252)
}

let x: number = 30
let y: number = 30
export function loop(ctx: any, width: number) {
    x += 2
    y += 2
    if (x >= width) { x = -50 , y = -50 }
    draw(ctx, x, y)
}
