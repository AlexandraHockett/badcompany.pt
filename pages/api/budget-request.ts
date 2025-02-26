import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { name, email, phone, eventType, date, guestCount, details } =
      req.body;

    if (!name || !email || !eventType) {
      return res.status(400).json({ error: "Campos obrigatórios ausentes" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587, // Use 465 se precisar de SSL
      secure: false, // true para SSL (porta 465), false para TLS (porta 587)
      auth: {
        user: process.env.EMAIL_USER, // "geral@badcompany.pt"
        pass: process.env.EMAIL_PASS, // Senha do e-mail
      },
    });

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "geral@badcompany.pt",
      subject: "Novo Pedido de Orçamento",
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Tipo de Evento: ${eventType}
        Data: ${date}
        Nº de Convidados: ${guestCount}
        Detalhes: ${details}
      `,
    };

    // Enviar e-mail
    await transporter.sendMail(mailOptions);

    console.log("Novo pedido de orçamento recebido:", req.body);
    return res
      .status(200)
      .json({ message: "Pedido de orçamento enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
