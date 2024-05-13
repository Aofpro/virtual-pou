input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Surprised)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    basic.pause(100)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    basic.pause(100)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Meh)
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.pause(100)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # # # .
        . . . . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . # . .
        . . # . .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
    basic.pause(2000)
    basic.showIcon(IconNames.Asleep)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        # . . . #
        . # # # .
        . # # # .
        `)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 154), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Meh)
basic.pause(100)
basic.showString("Hi")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.showString("Im Pou")
basic.showIcon(IconNames.Asleep)
