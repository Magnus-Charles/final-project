basic.clearScreen()
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
})
