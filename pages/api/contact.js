
import nodemailer from "nodemailer"

export default async function Contact(req, res){
    const { name, email, message, } = req.body
    
    const user = process.env.DB_USER;

    const data = {
        name,
        email,
        message,
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.DB_PASS,
        },
    });
    
    try {

        const mail = await transporter.sendMail({
            from: user,
            to: "SarigamiOyama@gmail.com",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html:`
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        });

        console.log("Message sent:", mail.messageId);

       return res.status(200).json({message: "success"});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Could not sent the Email. Your message was not sent.",
        });
    }

    
}