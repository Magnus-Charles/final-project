input.onPinPressed(TouchPin.P1, function () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(1000)
})
let _switch = 0
basic.clearScreen()
basic.forever(function () {
    _switch = pins.digitalReadPin(DigitalPin.P1)
})
