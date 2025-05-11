'use client';

import SignUp from '../components/SignUp';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div>
      <SignUp />
      <div className="text-center mt-4">
        <Link href="/signin" className="text-indigo-600 hover:text-indigo-500">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
} 