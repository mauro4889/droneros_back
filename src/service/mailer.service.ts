import nodemailer from 'nodemailer'

const Email = async (options: any) => {
    let transpoter = nodemailer.createTransport({
        service: 'gmail', //i use outlook
        auth: {
            user: process.env.EMAIL, // email
            pass: process.env.PASS, //password
        },
    });
    transpoter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

export const EmailSend = async ({ email, firstname, url }: any) => {
    console.log(email, firstname, url)
    const options = {
        from: `${process.env.USER}`,
        to: email,
        subjet: 'DRONEROS',
        html: `
            <h2>Gracias ${firstname} por crearte una cuenta</h2>
			Ingresa a este link para validar tu correo: <b>{${url}}</b>
        `
    }

    Email(options)
}