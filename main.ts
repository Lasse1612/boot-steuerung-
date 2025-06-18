input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Ziel_x += 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Position_x == Ziel_x) {
        motors.dualMotorPower(Motor.M1, 50)
        if (Position_y == Ziel_y) {
        	
        } else {
            motors.dualMotorPower(Motor.M0, 50)
            Position_y += 1
        }
    } else {
        motors.dualMotorPower(Motor.M0, 50)
        Position_x += 1
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Ziel_y += 1
})
let Ziel_y = 0
let Ziel_x = 0
let Position_x = 0
let Position_y = 0
Position_y = 0
Position_x = 0
Ziel_x = 0
Ziel_y = 0
