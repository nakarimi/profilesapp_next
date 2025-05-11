'use client';

import SignIn from '../components/SignIn';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div>
      <SignIn />
      <div className="text-center mt-4">
        <Link href="/signup" className="text-indigo-600 hover:text-indigo-500">
          Don't have an account? Sign up
        </Link>
        <br />
        <Link href="/forgot-password" className="text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
} 