export const background = (ctx: any, minor: any, major: any, stroke: string = "#00FF00", fill: string = "#009900", bg: string = "gray") => {
    minor = minor || 10
    major = major || minor * 5
    stroke = stroke
    fill = fill

    ctx.save()
    ctx.fillStyle = bg
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.strokeStyle = stroke
    ctx.fillStyle = fill
    let width = ctx.canvas.width, height = ctx.canvas.height
    for (let x = 0; x < width; x += minor) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25
        ctx.stroke()
        if (x % major == 0) { ctx.fillText(x, x, 10) }
    }
    for (let y = 0; y < height; y += minor) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25
        ctx.stroke()
        if (y % major == 0) { ctx.fillText(y, 0, y + 10) }
    }
    ctx.restore()
}