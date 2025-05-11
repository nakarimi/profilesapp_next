'use client';

import ForgotPassword from '../components/ForgotPassword';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div>
      <ForgotPassword />
      <div className="text-center mt-4">
        <Link href="/signin" className="text-indigo-600 hover:text-indigo-500">
          Back to Sign in
        </Link>
      </div>
    </div>
  );
} 