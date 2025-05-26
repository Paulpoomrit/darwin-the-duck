import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Quack! Here's Your Login Code.",
      verificationEmailBody: (createCode) =>
        `Use this code to confirm you account: ${createCode()}`,
    },
  },
});
