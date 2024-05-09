import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server Start http://localhost:${port}`)
})
app.post('/send', async (req, res) => {
    try {
        const { email, number } = req.body
        for (let i = 0; i < number; i++) {
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.GMAIL_ID,
                    pass: process.env.GMAIL_PASSWORD
                }
            })
            const mailOptions = {
                from: 'd14772046@gmail.com',
                to: email,
                subject: 'Bloody',
                text: `Thank You for Register Happy Coding `,
            };
            await transporter.sendMail(mailOptions);
        }
        return res.status(201).json({
            msg: 'Email send Successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            succes: false,
            message: 'Error while sending email'
        })
    }
})