require("dotenv").config();


    const params = {
      Source: 'sourceEmail',
      Destination: {
        ToAddresses: [
          'recipientEmail'
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data:'message',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'subject',
        }
      },
    };
 
module.exports = {
    params,
  };