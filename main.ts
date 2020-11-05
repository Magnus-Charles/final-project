let distance_from_door = 0
basic.clearScreen()
basic.forever(function () {
    distance_from_door = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance_from_door < 5) {
        robotbit.Servo(robotbit.Servos.S1, 90)
        basic.pause(1000)
    }
    if (distance_from_door > 5) {
        robotbit.Servo(robotbit.Servos.S1, 10)
    }
    basic.pause(1000)
})
