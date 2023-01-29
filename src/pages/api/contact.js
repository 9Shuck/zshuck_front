export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
        secure: true,
    })

    const mailData = {
        from: `Contact Form`,
        to: process.env.email,
        subject: `[${req.body.topic}]`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div><p>Message:</p>${req.body.message}</div>
        <p>
        Sent from:
            ${req.body.email}
        </p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)
}