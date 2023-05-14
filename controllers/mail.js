const ErrorResponse = require("../utils/errorResponse");
const nodemailer = require("nodemailer");

exports.subscribe = async (req, res, next) => {
  const {email} = req.body;

  const emailData = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Newsletter Subscriber",
    text: `New Subscriber: ${email}`,
  };

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse("Something went wrong!", 400));
    } else {
      console.log(info);
      return res.json({
        success: true,
        message: "success",
      });
    }
  });
};

exports.contact = async (req, res, next) => {
  const email = req.body;

  return console.log(email)

  const emailData = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Newsletter Subscriber",
    text: `New Subscriber: ${email}`,
  };

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse("Something went wrong!", 400));
    } else {
      console.log(info);
      return res.json({
        success: true,
        message: "success",
      });
    }
  });
};
