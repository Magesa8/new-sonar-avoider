basic.forever(function () {
    cuteBot.motors(50, 50)
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 10) {
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 0.25)
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.25)
    }
})
