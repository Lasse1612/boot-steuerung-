def on_button_a():
    motors.dual_motor_power(Motor.M0, 100)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)
