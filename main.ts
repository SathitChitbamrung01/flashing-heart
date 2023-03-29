function Left () {
    Status = true
    while (Status) {
        L = iBIT.ReadADC(ibitReadADC.ADC0)
        R = iBIT.ReadADC(ibitReadADC.ADC1)
        Center_L2 = iBIT.ReadADC(ibitReadADC.ADC2)
        Center_R2 = iBIT.ReadADC(ibitReadADC.ADC3)
        if (L > Center_L && R > Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
        } else if (L < Center_L && R > Center_R) {
            iBIT.Spin(ibitSpin.Left, 50)
        } else if (L > Center_L && R < Center_R) {
            iBIT.Spin(ibitSpin.Right, 50)
        } else if (L < Center_L && R < Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
            basic.pause(200)
            iBIT.Spin(ibitSpin.Left, 50)
            basic.pause(400)
            Status = false
        }
    }
}
function Forward () {
    Status = true
    while (Status) {
        L = iBIT.ReadADC(ibitReadADC.ADC0)
        R = iBIT.ReadADC(ibitReadADC.ADC1)
        Center_L2 = iBIT.ReadADC(ibitReadADC.ADC2)
        Center_R2 = iBIT.ReadADC(ibitReadADC.ADC3)
        if (L > Center_L && R > Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
        } else if (L < Center_L && R > Center_R) {
            iBIT.Spin(ibitSpin.Left, 50)
        } else if (L > Center_L && R < Center_R) {
            iBIT.Spin(ibitSpin.Right, 50)
        } else if (L < Center_L && R < Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
            basic.pause(200)
            Status = false
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Forward()
    Left()
    Right()
    Servo()
    BaclWard()
    Left()
    Right()
    Right()
    Left()
    Servo()
    BaclWard()
    iBIT.MotorStop()
})
function BaclWard () {
    Status = true
    while (Status) {
        L = iBIT.ReadADC(ibitReadADC.ADC0)
        R = iBIT.ReadADC(ibitReadADC.ADC1)
        Center_L2 = iBIT.ReadADC(ibitReadADC.ADC2)
        Center_R2 = iBIT.ReadADC(ibitReadADC.ADC3)
        if (L > Center_L && R > Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
        } else if (L < Center_L && R > Center_R) {
            iBIT.Spin(ibitSpin.Left, 50)
        } else if (L > Center_L && R < Center_R) {
            iBIT.Spin(ibitSpin.Right, 50)
        } else if (L < Center_L && R < Center_R) {
            iBIT.Motor(ibitMotor.Backward, 50)
            basic.pause(200)
            iBIT.Spin(ibitSpin.Right, 50)
            basic.pause(700)
            Status = false
        }
    }
}
function Servo () {
    Status = true
    while (Status) {
        L = iBIT.ReadADC(ibitReadADC.ADC0)
        R = iBIT.ReadADC(ibitReadADC.ADC1)
        Center_L2 = iBIT.ReadADC(ibitReadADC.ADC2)
        Center_R2 = iBIT.ReadADC(ibitReadADC.ADC3)
        if (L > Center_L && R > Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
        } else if (L < Center_L && R > Center_R) {
            iBIT.Spin(ibitSpin.Left, 50)
        } else if (L > Center_L && R < Center_R) {
            iBIT.Spin(ibitSpin.Right, 50)
        } else if (L < Center_L && R < Center_R) {
            iBIT.MotorStop()
            iBIT.Servo(ibitServo.SV1, 20)
            basic.pause(1000)
            iBIT.Servo(ibitServo.SV1, 160)
            basic.pause(1000)
            iBIT.Servo(ibitServo.SV1, 20)
            basic.pause(1000)
            Status = false
        }
    }
}
function Right () {
    Status = true
    while (Status) {
        L = iBIT.ReadADC(ibitReadADC.ADC0)
        R = iBIT.ReadADC(ibitReadADC.ADC1)
        Center_L2 = iBIT.ReadADC(ibitReadADC.ADC2)
        Center_R2 = iBIT.ReadADC(ibitReadADC.ADC3)
        if (L > Center_L && R > Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
        } else if (L < Center_L && R > Center_R) {
            iBIT.Spin(ibitSpin.Left, 50)
        } else if (L > Center_L && R < Center_R) {
            iBIT.Spin(ibitSpin.Right, 50)
        } else if (L < Center_L && R < Center_R) {
            iBIT.Motor(ibitMotor.Forward, 50)
            basic.pause(200)
            iBIT.Spin(ibitSpin.Right, 50)
            basic.pause(400)
            Status = false
        }
    }
}
let R = 0
let L = 0
let Status = false
let Center_R2 = 0
let Center_L2 = 0
let Center_R = 0
let Center_L = 0
Center_L = 1364
Center_R = 2161
Center_L2 = 2184
Center_R2 = 2228
