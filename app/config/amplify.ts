import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: outputs.auth.user_pool_id,
      userPoolClientId: outputs.auth.user_pool_client_id,
      signUpVerificationMethod: 'code' as const,
      loginWith: {
        email: true,
      },
      region: outputs.auth.aws_region,
    },
  },
  API: {
    GraphQL: {
      endpoint: outputs.data.url,
      region: outputs.data.aws_region,
      defaultAuthMode: 'apiKey' as const,
      apiKey: outputs.data.api_key,
    },
  },
};

// Configure Amplify
Amplify.configure(amplifyConfig, { ssr: true }); 