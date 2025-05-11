# Next.js Authentication with AWS Amplify

A modern authentication system built with Next.js and AWS Amplify, featuring a clean and responsive UI using Tailwind CSS.

## Features

- 🔐 Complete authentication flow:
  - Email-based Sign In
  - User Registration
  - Password Reset
  - Protected Routes
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js
- 🔒 Secure authentication with AWS Cognito

## Prerequisites

Before you begin, ensure you have:
- Node.js 16.x or later
- npm or yarn
- An AWS account
- AWS Amplify CLI installed globally

## Installation

0. Follow Prerequisites
Before starting this tutorial, you will need:

An AWS account: if you don't already have one follow the Setup Your Environment tutorial.
Your AWS profile configured for local development.
Installed on your environment: Nodejs and npm.
Familiarity with Git and a Github account.

https://aws.amazon.com/getting-started/hands-on/build-web-app-s3-lambda-api-gateway-dynamodb/

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd profilesapp_next
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure AWS Amplify**
   ```bash
   # Install Amplify CLI globally if you haven't already
   npm install -g @aws-amplify/cli

   # Configure Amplify
   amplify configure

   # Initialize Amplify in the project
   amplify init

   # Add authentication
   amplify add auth

   # Push the configuration to AWS
   amplify push
   ```

4. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_AWS_REGION=your_region
   NEXT_PUBLIC_USER_POOL_ID=your_user_pool_id
   NEXT_PUBLIC_USER_POOL_CLIENT_ID=your_client_id
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
profilesapp_next/
├── app/
│   ├── components/         # React components
│   ├── context/           # Auth context and providers
│   ├── config/            # AWS Amplify configuration
│   └── ...
├── public/                # Static files
├── styles/                # Global styles
├── amplify/              # AWS Amplify configuration files
└── ...
```

## Authentication Flow

1. **Sign Up**
   - Users can create an account using their email
   - Email verification is required
   - Password must meet security requirements

2. **Sign In**
   - Users can sign in with their email and password
   - Automatic redirect to dashboard when authenticated
   - "Remember me" functionality

3. **Password Reset**
   - Users can request a password reset
   - Verification code sent to email
   - New password setup with confirmation

4. **Protected Routes**
   - Dashboard and other protected pages
   - Automatic redirect to login for unauthenticated users
   - Session management

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
1. Modifying the `tailwind.config.js` file
2. Adding custom CSS in `globals.css`
3. Updating component-level styles

### AWS Configuration
You can customize the AWS Amplify configuration in:
- `app/config/amplify.ts`
- Amplify CLI using `amplify configure`

## Deployment

1. **Build the application**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Deploy to your preferred platform**
   - Vercel (recommended for Next.js)
   - AWS Amplify Hosting
   - Other platforms supporting Next.js

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please:
1. Check the documentation
2. Open an issue
3. Contact the maintainers

## Acknowledgments

- Next.js team for the amazing framework
- AWS Amplify for authentication services
- Tailwind CSS for the styling system