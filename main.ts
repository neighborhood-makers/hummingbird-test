hummingbird.startHummingbird()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, 50)
    basic.pause(1000)
    hummingbird.setLED(ThreePort.One, 0)
    basic.pause(1000)
})
