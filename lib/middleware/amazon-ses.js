require("dotenv").config();

const AWS = require("aws-sdk");

const SESConfig = {
    apiVersiom: '2021-04-21',
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION
}

const AWS_SES = new AWS.SES(SESConfig);

let sendEmail = (recipientEmail, from, message, subject) => {
    let params = {
      Source: from,
      Destination: {
        ToAddresses: [
          recipientEmail
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: message,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        }
      },
    };
    return AWS_SES.sendEmail(params).promise();
};

module.exports = {
    sendEmail,
  };