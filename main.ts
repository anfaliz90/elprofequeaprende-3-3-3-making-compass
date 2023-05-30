let degree = 0
basic.forever(function () {
    degree = input.compassHeading()
    if (45 <= degree && degree < 135) {
        basic.showString("E")
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (135 <= degree && degree < 225) {
        basic.showString("O")
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (225 <= degree && degree < 315) {
        basic.showString("S")
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showString("N")
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
