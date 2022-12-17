import nodemailer from 'nodemailer';


export default class MailingService{
    constructor (){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: process.env.GMAIL_USER,//cuenta de gmail que utilice para conectar
                pass: process.env.GMAIL_PASS //pass del aplicativo creado desde gmail
            }
        });
    }

    sendMail = async ({from, to, subject, html, attachments=[]}) => {
        let result = await this.transporter.sendMail({
            from,
            to,
            subject,
            html,
            attachments,

        })
        return result;
    }

}  