input.onButtonPressed(Button.A, function () {
    basic.showNumber(83)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("viva el Cádiz")
})
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
basic.pause(5000)
maqueen.motorStop(maqueen.Motors.All)
music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
basic.pause(500)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        basic.showIcon(IconNames.Skull)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 56)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
