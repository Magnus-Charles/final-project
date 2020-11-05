basic.clearScreen()
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
})
