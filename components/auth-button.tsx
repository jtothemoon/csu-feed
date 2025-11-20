"use client";

import { LoginIcon } from "./ui/login-icon";
import { signInWithGoogle, signOut } from "@/lib/actions/auth";

interface AuthButtonProps {
  user: {
    email?: string;
    user_metadata?: {
      name?: string;
      avatar_url?: string;
    };
  } | null;
}

export function AuthButton({ user }: AuthButtonProps) {
  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-tinted-black">
          {user.user_metadata?.name || user.email}
        </span>
        <button
          onClick={() => signOut()}
          className="text-xs font-medium text-medium-gray hover:text-tinted-black"
        >
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
      aria-label="로그인"
    >
      <LoginIcon />
    </button>
  );
}
