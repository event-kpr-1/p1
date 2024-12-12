import nodemailer from 'nodemailer';

export const sendMail = async (toAddress, sub, msg = '',imageUrl = '',htmlTemplate = '') => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your preferred email service
    auth: {
      user: 'event6803@gmail.com', // Replace with your email
      pass: 'xfpgsrisyfvjymaa', // Replace with your password or app password
    },
  });

  // Define email details
  const mailOptions = {
    from: '"event kpr" <event6803@gmail.com>', // Sender's address
    to: toAddress, // Recipient's address (string)
    subject: sub, // Subject line (string)
    text: msg, // Email body (string)
    ...(htmlTemplate && { html: htmlTemplate }),
    attachments: imageUrl
      ? [
          {
            filename: 'yourID.jpg', // You can rename the file if needed
            path: imageUrl, // URL or local file path
          },
        ]
      : [],
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
