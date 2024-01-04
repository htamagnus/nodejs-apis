# Projeto Sending Emails 📧

O projeto "Sending Emails" tem como foco a integração do Node.js com o envio de e-mails, utilizando as bibliotecas Nodemailer e Nodemailer SendGrid Transport. A seguir, são abordados os principais tópicos do projeto:

## Tópicos:
1. [Configurando o Nodemailer](#1-configurando-o-nodemailer)
2. [Utilizando o Nodemailer SendGrid Transport](#2-utilizando-o-nodemailer-sendgrid-transport)

---

## 1. Configurando o Nodemailer 📤:

A primeira parte do projeto abrange a configuração do Nodemailer, uma biblioteca que facilita o envio de e-mails usando Node.js. São discutidos os passos necessários para configurar o Nodemailer, incluindo a instalação da biblioteca e a definição das opções de transporte.
~~~javascript
const nodemailer = require('nodemailer');

// Configuração do transporte
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'exemplo@gmail.com',
    pass: 'senha',
  },
});

// Configurações do e-mail
const mailOptions = {
  from: 'exemplo@gmail.com',
  to: 'destinatario@example.com',
  subject: 'Assunto do E-mail',
  text: 'Conteúdo do E-mail.',
};

// Enviar e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erro ao enviar e-mail:', error);
  } else {
    console.log('E-mail enviado com sucesso:', info.response);
  }
});
~~~

---

## 2. Utilizando o Nodemailer SendGrid Transport 📧📤:

A segunda parte destaca o uso do Nodemailer SendGrid Transport, um módulo de transporte para o Nodemailer que permite enviar e-mails usando o serviço SendGrid. São abordados os passos para integrar o SendGrid ao Nodemailer, configurando as credenciais e utilizando o transporte para enviar e-mails de forma eficiente.

---
Estes são os principais tópicos abordados no projeto "Sending Emails", proporcionando uma compreensão prática de como integrar o envio de e-mails em aplicações Node.js usando o Nodemailer e o Nodemailer SendGrid Transport.
