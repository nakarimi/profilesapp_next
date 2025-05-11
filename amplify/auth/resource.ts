import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Verify your email for ProfilesApp",
      verificationEmailBody: (createCode) => `Welcome to ProfilesApp! Your verification code is: ${createCode()}`,
    }
  }
});
