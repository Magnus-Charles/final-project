let dial = 0
basic.clearScreen()
basic.forever(function () {
    dial = pins.digitalReadPin(DigitalPin.P1)
    robotbit.Servo(robotbit.Servos.S1, dial)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, dial)
    basic.pause(1000)
})
