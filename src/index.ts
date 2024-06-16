// import nodemailer from 'nodemailer';
// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import bodyParser from 'body-parser';
// // Carregar variáveis de ambiente do arquivo .env
// dotenv.config();
//
//
// const app = express();
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
// }));
//
// app.use(bodyParser.json());
// // Rota de teste para verificar se o servidor está atendendo
// app.get('/test', (req: Request, res: Response) => {
//     res.send('<h1>Servidor está funcionando corretamente!</h1>');
// });
// // Rota inicial para exibir uma página de boas-vindas
// app.get('/', (req: Request, res: Response) => {
//     res.send('<h1>Bem-vindo ao servidor</h1>');
// });
// app.post('/send-email', (req, res) => {
//     const { name, email, subject, phone, message } = req.body;
//
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });
//
//     const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_USER,
//         subject: subject,
//         html: `
//             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//                 <h2 style="background-color: #4CAF50; color: white; padding: 10px;">Nova Mensagem de Contato</h2>
//                 <p><strong>Nome:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Telefone:</strong> ${phone}</p>
//                 <p><strong>Mensagem:</strong></p>
//                 <p>${message}</p>
//                 <img src="cid:logo" style="width: 100px; margin-top: 20px;" alt="Logo"/>
//             </div>
//         `,
//         attachments: [{
//             filename: 'logo.png',
//             path: path.join(__dirname, 'logo.svg'),
//             cid: 'logo'
//         }]
//     };
//
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Ocorreu um erro ao enviar email:', error);
//             return res.status(500).send(error.toString());
//         }
//         console.log('Email enviado com sucesso!');
//         res.status(200).send('Email sent: ' + info.response);
//     });
// });
// // app.post('/send-email', (req, res) => {
// //     const { name, email, subject, phone, message } = req.body;
// //
// //     const transporter = nodemailer.createTransport({
// //         service: 'gmail',
// //         auth: {
// //             user: process.env.EMAIL_USER,
// //             pass: process.env.EMAIL_PASS
// //         }
// //     });
// //
// //     const mailOptions = {
// //         from: email,
// //         to: process.env.EMAIL_USER,
// //         subject: subject,
// //         text: `Nome: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
// //     };
// //
// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             console.error('Ocorreu um erro ao enviar email:', error);
// //             return res.status(500).send(error.toString());
// //         }
// //         console.log('Email enviado com sucesso!');
// //         res.status(200).send('Email sent: ' + info.response);
// //     });
// // });
//
// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

import nodemailer from 'nodemailer';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

// Rota de teste para verificar se o servidor está atendendo
app.get('/test', (req: Request, res: Response) => {
    res.send('<h1>Servidor está funcionando corretamente!</h1>');
});

// Rota inicial para exibir uma página de boas-vindas
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Bem-vindo ao servidor</h1>');
});

app.post('/send-email', (req: Request, res: Response) => {
    const { name, email, subject, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="background-color: #4CAF50; color: white; padding: 10px;">Nova Mensagem de Contato</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefone:</strong> ${phone}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
                <img src="cid:logo" style="width: 100px; margin-top: 20px;" alt="Logo"/>
            </div>
        `,
        attachments: [{
            filename: 'logo.png',
            path: path.join(__dirname, 'logo.svg'),
            cid: 'logo'
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Ocorreu um erro ao enviar email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email enviado com sucesso!');
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
