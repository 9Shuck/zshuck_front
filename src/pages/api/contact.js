export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
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
    if (req.method === 'POST') {
        transporter.sendMail(mailData, (err, info) => {
    
        if (err) {
            res.status(404).json({
                error: `Connection refused at ${err.address}`
            });
        } else {
            res.status(250).json({
                success: `Message delivered to ${info.accepted}`
            });
        }
        });
    }
}
