radio.onReceivedString(function (receivedString) {
    if (receivedString == "hidari") {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            . . # # #
            . . . . .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
    } else if (receivedString == "migi") {
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # # # . .
            . . . . .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 100)
    } else if (receivedString == "mae") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 100)
    } else if (receivedString == "usiro") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 100)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 100)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
    }
})
radio.setGroup(1)
let tama1 = 5
let tama2 = 5
motor.servo(motor.Servos.S1, 90)
motor.servo(motor.Servos.S2, 90)
motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
})
