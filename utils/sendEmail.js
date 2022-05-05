const nodemailer = require('nodemailer')

const sendEmail = async(options)  => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'thanhbinh16092k1@gmail.com',
            pass: 'binh1692001',
        },
    })

    const mailOptions = {
        from: 'thanhbinh16092k1@gmail.com',
        to: options.email,
        subject: 'Sending email',
        html: options.message,
        // text: 'okee'
    }
    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail